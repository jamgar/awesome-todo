<template>
  <q-banner dense inline-actions :class="bgcolor" class="list__header text-white text-center">
    <span class="text-bold text-subtitle1">
      <slot></slot>
    </span>
  </q-banner>
</template>

<script>
export default {
  props: ["bgcolor"]
};
</script>

<style lang="scss" scoped>
.list__header {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>