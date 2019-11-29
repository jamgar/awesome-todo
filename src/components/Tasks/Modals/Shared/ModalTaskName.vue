<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      autofocus
      v-select-all
      :value="name"
      @input="$emit('update:name', $event)"
      label="Task Name"
      :rules="[val => !!val || 'Field is required']"
      class="col"
      ref="name"
    >
      <template v-slot:append>
        <q-icon v-if="name" name="close" @click="$emit('update:name', '')" class="cursor-pointer"/>
      </template>
    </q-input>
  </div>
</template>

<script>
import { selectAll } from "src/directives/directive-select-all.js";

export default {
  props: ["name"],
  directives: {
    selectAll
  }
};
</script>

<style lang="scss" scoped>
</style>