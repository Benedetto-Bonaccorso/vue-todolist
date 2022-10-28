const { createApp } = Vue

createApp({
  data() {
    return {
        newTask: "",
        tasks: [
          {text: "Task1",
          done: true},
          {text: "Task2",
          done: true},
          {text: "Task3",
          done: true},
        ],

        taskTooShort: false,
    }
  },
  methods: {
    createTask() {
        if(this.newTask.length >=5){
        this.tasks.unshift(this.newTask)
        this.newTask = ""
        this.taskTooShort = false
        } else {
            this.taskTooShort = true
        }
    },
    taskDone(i){
        this.tasks[i].done = !this.tasks[i].done
    }
  }

}).mount('#app')