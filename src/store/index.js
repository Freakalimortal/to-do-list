import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: 1, text: 'Learn Vue 3', completed: false },
      { id: 2, text: 'Master Vuex', completed: false }
    ]
  },
  mutations: {
    ADD_TODO(state, text) {
      state.todos.push({
        id: Date.now(),
        text,
        completed: false
      })
    },
    TOGGLE_TODO(state, todoId) {
      const todo = state.todos.find(t => t.id === todoId)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    DELETE_TODO(state, todoId) {
      state.todos = state.todos.filter(t => t.id !== todoId)
    }
  },
  actions: {
    addTodo({ commit }, text) {
      commit('ADD_TODO', text)
    },
    toggleTodo({ commit }, todoId) {
      commit('TOGGLE_TODO', todoId)
    },
    deleteTodo({ commit }, todoId) {
      commit('DELETE_TODO', todoId)
    }
  },
  getters: {
    allTodos: (state) => state.todos
  }
})
