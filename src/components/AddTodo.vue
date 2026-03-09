<template>
  <form @submit.prevent="handleSubmit" class="mb-8">
    <div class="flex items-center space-x-2">
      <input 
        v-model="newTodo" 
        type="text" 
        placeholder="What needs to be done?" 
        class="flex-1 p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
      >
      <button 
        type="submit"
        :disabled="!newTodo.trim()"
        class="px-6 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
      >
        <div class="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
          <span>Add</span>
        </div>
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const newTodo = ref('')

const handleSubmit = () => {
  if (newTodo.value.trim()) {
    store.dispatch('addTodo', newTodo.value.trim())
    newTodo.value = ''
  }
}
</script>
