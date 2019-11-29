<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div>
      <ListHeader v-if="!settings.showTasksInOneList" bgcolor="bg-orange-4">Todo</ListHeader>
      <q-list separator bordered>
        <Task v-for="(task, key) in tasksTodo" :key="key" :task="task" :id="key"/>
      </q-list>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import Task from "components/Tasks/Task.vue";
import ListHeader from "components/Shared/ListHeader.vue";

export default {
  props: ["tasksTodo"],
  components: {
    Task,
    ListHeader
  },
  computed: {
    ...mapGetters("settings", ["settings"])
  }
};
</script>

<style lang="scss" scoped>
</style>