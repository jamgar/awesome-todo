<template>
  <q-card>
    <ModalHeader>Edit Task</ModalHeader>
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
  props: ["task", "id"],
  mixins: [mixinAddEditTask],
  data() {
    return {
      taskToSubmit: {}
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      });
      this.$emit("close");
    }
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task);
  }
};
</script>

<style lang="scss" scoped>
</style>