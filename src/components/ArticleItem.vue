<script setup>
defineProps({
  article: { type: Object, required: true },
  showDelete: { type: Boolean, default: false },
})
const emit = defineEmits(['ajouter-panier', 'supprimer'])

function confirmerSuppression(id) {
  if (confirm('Supprimer cet article ?')) {
    emit('supprimer', id)
  }
}
</script>

<template>
  <article class="card">
    <img v-if="article.image" :src="article.image" :alt="article.title" class="thumb" />
    <div v-else class="thumb thumb-placeholder">{{ article.category }}</div>
    <h3>{{ article.title }}</h3>
    <p class="category">{{ article.category }}</p>
    <p class="description">{{ article.description }}</p>
    <p class="price">{{ article.price.toFixed(2) }} €</p>
    <div class="actions">
      <router-link :to="`/article/${article.id}`" class="btn btn-outline">Voir</router-link>
      <button class="btn" @click="emit('ajouter-panier', article)">Ajouter au panier</button>
      <button v-if="showDelete" class="btn btn-danger" @click="confirmerSuppression(article.id)">
        Supprimer
      </button>
    </div>
  </article>
</template>

<style scoped>
.card {
  border: 1px solid var(--border);
  background: var(--surface);
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.thumb {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 4px;
  margin: -1rem -1rem 0.5rem;
  width: calc(100% + 2rem);
}
.thumb-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  color: var(--muted);
  text-transform: uppercase;
  font-size: 0.85rem;
}
.category {
  color: var(--muted);
  font-size: 0.85rem;
  text-transform: uppercase;
}
.description {
  flex: 1;
}
.price {
  font-weight: 600;
  font-size: 1.1rem;
}
.actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}
</style>
