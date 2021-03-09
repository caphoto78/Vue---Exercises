<template>
  <button @click="inc">Add 22</button>
  <button @click="increase({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    /* addOne() {
      this.$store.dispatch('increment');
    } */
    // ...mapActions(['increment', 'increase']) or, if you want to change the names
    ...mapActions('numbers', {
      inc: 'increment',
      increase: 'increase'
    })
  }
};
</script>

<style></style>
