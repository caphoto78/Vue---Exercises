<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setAge">Change Age</button>
  </section>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    // const uName = ref('Constantin');
    // const uAge = ref(43);
    const user = reactive({
      name: 'Constantin',
      age: 43
    });

    function setNewData() {
      user.age = 32;
    }

    return { user: user, setAge: setNewData };
  }
  // data() {
  //   return {
  //     userName: 'Constantin'
  //   };
  // },
  // methods: {
  //   setNewAge() {
  //     this.age = 32;
  //   }
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
