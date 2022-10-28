const { createApp } = Vue

createApp({
  data() {
    return {
        newTask: "",
        tasks: [
          {text: "Task1",
          done: false},
          {text: "Task2",
          done: false},
          {text: "Task3",
          done: false},
        ],

        taskTooShort: false,
    }
  },
  methods: {
    createTask() {
        if(this.newTask.length >=5){
        this.tasks.unshift({text:this.newTask, done:false})
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