<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <template v-if="tasksDownloaded">
        <div class="row q-mb-lg">
          <Search/>
          <Sort/>
        </div>
        <p
          v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length"
        >No Search Results</p>
        <q-scroll-area class="q-scroll-area-tasks">
          <NoTasks
            v-if="!Object.keys(tasksTodo).length && !search && !settings.showTasksInOneList"
            @showAddTask="showAddTask = true"
            class="q-mb-lg"
          ></NoTasks>
          <TasksTodo v-if="Object.keys(tasksTodo).length" :tasksTodo="tasksTodo"/>
          <TasksCompleted
            v-if="Object.keys(tasksCompleted).length"
            :tasksCompleted="tasksCompleted"
            class="q-mb-xl"
          />
        </q-scroll-area>
        <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
          <q-btn
            @click="showAddTask = true"
            round
            class="all-pointer-events"
            color="primary"
            size="24px"
            icon="add"
          />
        </div>
      </template>
      <template v-else>
        <span class="absolute-center">
          <q-spinner color="primary" size="3em"/>
        </span>
      </template>
    </div>
    <q-dialog v-model="showAddTask">
      <AddTask @close="showAddTask = false"/>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import AddTask from "../components/Tasks/Modals/AddTask.vue";
import TasksTodo from "../components/Tasks/TasksTodo.vue";
import TasksCompleted from "../components/Tasks/TasksCompleted.vue";
import NoTasks from "../components/Tasks/NoTasks.vue";
import Search from "../components/Tasks/Tools/Search.vue";
import Sort from "../components/Tasks/Tools/Sort.vue";

export default {
  name: "PageTodo",
  data() {
    return {
      showAddTask: false // change to false after editing
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
    ...mapGetters("settings", ["settings"]),
    ...mapState("tasks", ["search", "tasksDownloaded"])
  },
  components: {
    AddTask,
    TasksTodo,
    TasksCompleted,
    NoTasks,
    Search,
    Sort
  }
};
</script>

<style>
.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
}
</style>