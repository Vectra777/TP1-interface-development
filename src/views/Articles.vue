<script setup>
import { ref, computed } from 'vue'
import { store, addToPanier } from '../store'
import BarreRecherche from '../components/BarreRecherche.vue'
import ListeArticles from '../components/ListeArticles.vue'

const categories = computed(() => [...new Set(store.articles.map((a) => a.category))])
const searchText = ref('')
const category = ref('')

const filtered = computed(() =>
  store.articles.filter((a) => {
    const matchSearch = a.title.toLowerCase().includes(searchText.value.toLowerCase())
    const matchCategory = !category.value || a.category === category.value
    return matchSearch && matchCategory
  }),
)
</script>

<template>
  <section>
    <h1>Articles</h1>
    <BarreRecherche v-model:search="searchText" v-model:category="category" :categories="categories" />
    <ListeArticles :articles="filtered" @ajouter-panier="addToPanier" />
  </section>
</template>
