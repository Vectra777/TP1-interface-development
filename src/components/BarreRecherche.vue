<script setup>
defineProps(['categories'])
const search = defineModel('search', { default: '' })
const category = defineModel('category', { default: '' })
</script>

<template>
  <div class="search-bar">
    <input v-model="search" type="text" placeholder="Rechercher un article..." />
    <select v-model="category">
      <option value="">Toutes les catégories</option>
      <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
    </select>
  </div>
</template>

<style scoped>
.search-bar {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.search-bar input {
  flex: 1;
}
.search-bar select {
  min-width: 180px;
}
</style>
