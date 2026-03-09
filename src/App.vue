<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
    <div class="max-w-2xl w-full">
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <!-- Header -->
        <div class="bg-indigo-600 px-8 py-10 text-white text-center">
          <h1 class="text-4xl font-extrabold tracking-tight mb-2">Todo Master</h1>
          <p class="text-indigo-100 text-lg">Stay organized and productive</p>
        </div>

        <!-- Main Content -->
        <div class="p-8">
          <AddTodo />
          <div class="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
            <h2 class="text-xl font-bold text-gray-800">Your Tasks</h2>
            <span class="px-3 py-1 bg-indigo-50 text-indigo-600 text-sm font-semibold rounded-full">
              {{ pendingCount }} Pending
            </span>
          </div>
          <TodoList />
        </div>

        <!-- Footer -->
        <div class="bg-gray-50 px-8 py-6 border-t border-gray-100 text-center">
          <p class="text-gray-500 text-sm">
            Project by Aliabbas
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'

const store = useStore()
const pendingCount = computed(() => {
  return store.getters.allTodos.filter(t => !t.completed).length
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>
