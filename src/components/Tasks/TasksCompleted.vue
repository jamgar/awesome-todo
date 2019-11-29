<template>
  <transition appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
    <div :class="{ 'q-mt-lg' : !settings.showTasksInOneList }">
      <ListHeader v-if="!settings.showTasksInOneList" bgcolor="bg-green-4">Completed</ListHeader>
      <q-list separator bordered>
        <Task v-for="(task, key) in tasksCompleted" :key="key" :task="task" :id="key"/>
      </q-list>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import Task from "components/Tasks/Task.vue";
import ListHeader from "components/Shared/ListHeader.vue";

export default {
  props: ["tasksCompleted"],
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