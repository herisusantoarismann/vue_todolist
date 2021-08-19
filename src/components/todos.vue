<template>
  <div class="container">
    <h1 class="text-center">Todo List</h1>
    <div class="container card w-50 p-3 mb-4">
      <h4 class="card-title">Add a task</h4>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Task</label>
        <input
          type="email"
          class="form-control"
          placeholder="Add task here ...."
          v-model="task"
          @keyup.enter="addTask(task)"
        />
      </div>
      <div class="d-flex justify-content-between">
        <button class="btn btn-primary w-25" @click="addTask(task)">
          Save
        </button>
        <button class="btn btn-danger w-25" @click="deleteAllTask()">
          Delete All Task
        </button>
      </div>
    </div>
    <div class="container card">
      <div class="card-body">
        <h5 class="card-title">Task List</h5>
        <table class="table text-center" v-if="todoList.length > 0">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Taks</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(todo, index) in todoList" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ todo.task }}</td>
              <td>
                <div class="form-check form-switch d-inline-block">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    :checked="todo.done"
                    @change="changeStatus(index, todo.done)"
                  />
                  <label
                    class="form-check-label"
                    for="flexSwitchCheckChecked"
                    v-if="todo.done"
                    >Finished</label
                  >
                  <label
                    class="form-check-label"
                    for="flexSwitchCheckChecked"
                    v-else
                    >Unfinished</label
                  >
                </div>
              </td>
              <td>
                <button class="btn btn-danger" @click="deleteTask(index)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <p v-else class="text-center">Task is Empty</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getTask();
  },
  data() {
    return {
      todoList: [],
      task: "",
      modalShow: false,
    };
  },
  watch: {
    todoList: {
      handler() {
        localStorage.setItem("todos", JSON.stringify(this.todoList));
      },
      deep: true,
    },
  },
  methods: {
    getTask() {
      const tl = JSON.parse(localStorage.getItem("todos"));
      if (tl === null) {
        return;
      }
      this.todoList = tl;
    },
    addTask(newTask) {
      this.todoList.push({ task: newTask, done: false });
      this.task = "";
    },
    deleteTask(index) {
      this.todoList.splice(index, 1);
    },
    deleteAllTask() {
      this.todoList = [];
      localStorage.removeItem("todos");
    },
    changeStatus(idx, status) {
      this.todoList[idx].done = !status;
    },
  },
};
</script>

<style></style>
