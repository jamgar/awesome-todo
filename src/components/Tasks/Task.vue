<template>
  <q-item
    @click="updateTask({ id, updates: { completed: !task.completed }})"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    clickable
    v-ripple
    v-touch-hold:1000.mouse="showEditTaskModal"
  >
    <q-item-section side top>
      <q-checkbox :value="task.completed" class="no-pointer-events"/>
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{ 'text-strikethrough' : task.completed }"
        v-html="$options.filters.searchHighlight(task.name, search)"
      ></q-item-label>
    </q-item-section>

    <q-item-section v-if="task.dueDate" side>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="18px" class="q-mr-xs"/>
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>{{ task.dueDate | niceDate }}</q-item-label>
          <q-item-label class="row justify-end" caption>
            <small>{{ taskDueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn @click.stop="showEditTaskModal" flat round dense color="positive" icon="edit"/>
        <q-btn
          @click.stop="promptToDelete(id)"
          flat
          round
          dense
          color="negative"
          icon="delete_outline"
        />
      </div>
    </q-item-section>
    <q-dialog v-model="showEditTask">
      <EditTask @close="showEditTaskModal" :task="task" :id="id"/>
    </q-dialog>
  </q-item>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { date } from "quasar";
import EditTask from "./Modals/EditTask.vue";

export default {
  props: ["task", "id"],
  components: {
    EditTask
  },
  data() {
    return {
      showEditTask: false
    };
  },
  computed: {
    ...mapState("tasks", ["search"]),
    ...mapGetters("settings", ["settings"]),
    taskDueTime() {
      if (this.settings.show12HourTimeFormat) {
        const { formatDate } = date;
        return formatDate(this.task.dueDate + " " + this.task.dueTime, "h:mmA");
      }
      return this.task.dueTime;
    }
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure want to delete task?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.deleteTask(id);
        });
    },
    showEditTaskModal() {
      this.showEditTask = !this.showEditTask;
    }
  },
  filters: {
    niceDate(value) {
      const { formatDate } = date;
      return formatDate(value, "MMM D");
    },
    searchHighlight(value, search) {
      if (value) {
        let searchRegExp = new RegExp(search, "ig");
        return value.replace(searchRegExp, match => {
          return `<span class="bg-yellow-6">${search}</span>`;
        });
      }
      return value;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>