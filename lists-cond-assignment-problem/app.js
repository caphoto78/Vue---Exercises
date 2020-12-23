const app = Vue.createApp({
  data() {
    return {
      task: '',
      tasks: [],
      show: true
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.task)
    },
    handleShow() {
      this.show = !this.show
    }
  },
});

app.mount('#assignment')