<template>
  <q-card>
    <ModalHeader>Add Task</ModalHeader>
    <q-form @submit.prevent="submitForm">
      <q-card-section>
        <ModalTaskName :name.sync="taskToSubmit.name" ref="modalTaskName"/>
        <ModalDueDate :dueDate.sync="taskToSubmit.dueDate" @clear="clearDueDate"/>
        <ModalDueTime v-if="taskToSubmit.dueDate" :dueTime.sync="taskToSubmit.dueTime"/>
      </q-card-section>
      <ModalButton/>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import mixinAddEditTask from "src/mixins/mixin-add-edit-task.js";

export default {
  mixins: [mixinAddEditTask],
  data() {
    return {
      taskToSubmit: {
        name: "",
        completed: false,
        dueDate: "",
        dueTime: ""
      }
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>