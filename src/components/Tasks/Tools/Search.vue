<template>
  <q-input
    outlined
    @keyup.esc="searchField = ''"
    v-select-all
    v-model="searchField"
    label="Search"
    class="col"
  >
    <template v-slot:append>
      <q-icon
        v-if="searchField !== ''"
        name="close"
        @click="searchField= ''"
        class="cursor-pointer"
      />
      <q-icon name="search"/>
    </template>
  </q-input>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { selectAll } from "src/directives/directive-select-all.js";

export default {
  directives: {
    selectAll
  },
  computed: {
    ...mapState("tasks", ["search"]),
    searchField: {
      get() {
        return this.search;
      },
      set(value) {
        this.setSearch(value);
      }
    }
  },
  methods: {
    ...mapActions("tasks", ["setSearch"])
  }
};
</script>

<style lang="scss" scoped>
</style>