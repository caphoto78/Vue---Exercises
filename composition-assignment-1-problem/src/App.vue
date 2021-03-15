<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="courseData.isVisible">{{ courseData.goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoalVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { ref } from 'vue';
import { reactive } from 'vue';
export default {
  setup() {
    // const goal = ref('Finish the Vue course');
    // const isVisible = ref(true);

    // const courseData = ref({
    //   goal: 'Finish the Vue course',
    //   isVisible: true
    // });

    const courseData = reactive({
      goal: 'Finish the Vue course',
      isVisible: true
    });

    // const toggleGoalVisibility = function() {
    //   courseData.value.isVisible = !courseData.value.isVisible;
    //   console.log(courseData.value.isVisible);
    // };

    const toggleGoalVisibility = function() {
      courseData.isVisible = !courseData.isVisible;
      console.log(courseData.isVisible);
    };

    // return { goal, isVisible, toggleGoal };
    return { courseData, toggleGoalVisibility };
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
