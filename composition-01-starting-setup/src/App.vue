<template>
  <section class="container">
    <user-data
      class="test"
      :first-name="firstName"
      :last-name="lastName"
    ></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';
// import { reactive } from 'vue';
export default {
  components: { UserData },
  setup() {
    // const uName = ref('Constantin');
    const firstName = ref('');
    const lastName = ref('');

    const lastNameInput = ref(null);
    const uAge = ref(43);

    provide('userAge', uAge);

    // const user = reactive({
    //   name: 'Constantin',
    //   age: 43
    // });

    const uName = computed(function() {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, uName], function(newValues, oldValues) {
      console.log('Old age: ' + oldValues[0]);
      console.log('New age: ' + newValues[0]);
      console.log('Old Name: ' + oldValues[1]);
      console.log('New Name: ' + newValues[1]);
    });

    function setNewData() {
      uAge.value = 32;
    }

    function setLastName() {
      // lastName.value = this.$refs.lastNameInput.value
      lastName.value = lastNameInput.value.value;
    }

    return {
      firstName,
      lastName,
      lastNameInput,
      userName: uName,
      age: uAge,
      setAge: setNewData,
      setLastName
    };
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
  // provide() {
  //   return {
  //     age: this.age
  //   }
  // }
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
