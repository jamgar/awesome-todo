import ModalHeader from "../components/Tasks/Modals/Shared/ModalHeader.vue";
import ModalTaskName from "../components/Tasks/Modals/Shared/ModalTaskName.vue";
import ModalDueDate from "../components/Tasks/Modals/Shared/ModalDueDate.vue";
import ModalDueTime from "../components/Tasks/Modals/Shared/ModalDueTime.vue";
import ModalButton from "../components/Tasks/Modals/Shared/ModalButton.vue";

export default {
  components: {
    ModalHeader,
    ModalTaskName,
    ModalDueDate,
    ModalDueTime,
    ModalButton
  },
  methods: {
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    clearDueDate() {
      this.taskToSubmit.dueDate = "";
      this.taskToSubmit.dueTime = "";
    }
  }
};
