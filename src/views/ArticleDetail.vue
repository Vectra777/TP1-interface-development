<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { store, addToPanier } from '../store'

const route = useRoute()
const article = computed(() => store.articles.find((a) => a.id === Number(route.params.id)))
const added = ref(false)

function onAdd() {
  addToPanier(article.value)
  added.value = true
  setTimeout(() => (added.value = false), 2000)
}
</script>

<template>
  <section v-if="article">
    <router-link class="back" to="/articles">&larr; Retour aux articles</router-link>
    <div class="detail">
      <img v-if="article.image" :src="article.image" :alt="article.title" class="photo" />
      <div v-else class="photo photo-placeholder">{{ article.category }}</div>
      <div class="info">
        <span class="category">{{ article.category }}</span>
        <h1>{{ article.title }}</h1>
        <p class="description">{{ article.description }}</p>
        <p class="price">{{ article.price.toFixed(2) }} €</p>
        <button class="btn" @click="onAdd">Ajouter au panier</button>
        <p v-if="added" class="confirmation">Ajouté au panier !</p>
      </div>
    </div>
  </section>
  <p v-else>Article introuvable.</p>
</template>

<style scoped>
.back {
  display: inline-block;
  margin-bottom: 1rem;
  color: var(--primary);
  text-decoration: none;
}
.detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 2rem;
}
.photo {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 4px;
}
.photo-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  color: var(--muted);
  text-transform: uppercase;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}
.category {
  color: var(--muted);
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.03em;
}
.info h1 {
  margin: 0;
}
.description {
  color: var(--text);
}
.price {
  font-weight: 700;
  font-size: 1.6rem;
  color: var(--primary-dark);
  margin: 0.5rem 0;
}
.confirmation {
  color: #1e7a3d;
  font-size: 0.9rem;
}

@media (max-width: 640px) {
  .detail {
    grid-template-columns: 1fr;
  }
}
</style>
