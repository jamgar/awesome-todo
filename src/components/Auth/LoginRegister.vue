<template>
  <form @submit.prevent="submitForm">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary"/>
        </template>
        {{ tab | titleCase }} to access your Todos anywhere!
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
        ref="email"
        outlined
        v-model="formData.email"
        class="col"
        label="Email"
        :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email']"
        stack-label
        lazy-rules
      />
    </div>
    <div class="row q-mb-md">
      <q-input
        ref="password"
        outlined
        v-model="formData.password"
        class="col"
        type="password"
        label="Password"
        stack-label
        :rules="[ val => val.length >= 6 || 'Please enter atleast 6 characters']"
        lazy-rules
      />
    </div>
    <div class="row">
      <q-space/>
      <q-btn color="primary" type="submit" :label="tab"/>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginRegister",
  props: ["tab"],
  data() {
    return {
      formData: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions("auth", ["registerUser", "loginUser"]),
    submitForm() {
      this.$refs.email.validate();
      this.$refs.password.validate();
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if (this.tab == "login") {
          this.loginUser(this.formData);
        } else {
          this.registerUser(this.formData);
        }
      }
    },
    isValidEmailAddress(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  },
  filters: {
    titleCase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>