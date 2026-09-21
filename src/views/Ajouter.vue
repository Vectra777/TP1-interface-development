<script setup>
import { ref } from 'vue'
import { addArticle } from '../store'
import FormulaireArticle from '../components/FormulaireArticle.vue'

const confirmation = ref(false)

function onAjouter(article) {
  addArticle(article)
  confirmation.value = true
  setTimeout(() => (confirmation.value = false), 3000)
}
</script>

<template>
  <section>
    <h1>Ajouter un article</h1>
    <p v-if="confirmation" class="confirmation">Article ajouté avec succès !</p>
    <FormulaireArticle @ajouter="onAjouter" />
  </section>
</template>

<style scoped>
.confirmation {
  background: #e3f5e8;
  color: #1e7a3d;
  border: 1px solid #b6e3c3;
  padding: 0.6rem 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}
</style>
