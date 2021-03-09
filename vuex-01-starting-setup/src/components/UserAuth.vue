<template>
  <button @click="login" v-if="!userIsAuthenticated">Login</button>
  <button @click="logout" v-if="userIsAuthenticated">Logout</button>
  <p>{{ testAuth }}</p>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['userIsAuthenticated']),
    ...mapGetters('numbers', ['testAuth'])
  },
  methods: {
    ...mapActions(['login', 'logout'])
  }
};
</script>

<style></style>
