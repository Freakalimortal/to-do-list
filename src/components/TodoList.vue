<template>
  <div class="space-y-2">
    <div v-if="todos.length === 0" class="text-center py-10 text-gray-500 italic">
      No tasks yet. Add one above!
    </div>
    <TodoItem 
      v-for="todo in todos" 
      :key="todo.id" 
      :todo="todo"
      @toggle="toggleTodo"
      @delete="deleteTodo"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TodoItem from './TodoItem.vue'

const store = useStore()
const todos = computed(() => store.getters.allTodos)

const toggleTodo = (id) => store.dispatch('toggleTodo', id)
const deleteTodo = (id) => store.dispatch('deleteTodo', id)
</script>
