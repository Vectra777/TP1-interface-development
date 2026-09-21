<script setup>
import { ref, computed, watch } from 'vue'
import ArticleItem from './ArticleItem.vue'

const props = defineProps({
  articles: { type: Array, required: true },
  showDelete: { type: Boolean, default: false },
  perPage: { type: Number, default: 4 },
})
const emit = defineEmits(['ajouter-panier', 'supprimer'])

const page = ref(1)
const pageCount = computed(() => Math.max(1, Math.ceil(props.articles.length / props.perPage)))

watch(() => props.articles.length, () => {
  page.value = 1
})

const articlesPage = computed(() => {
  const start = (page.value - 1) * props.perPage
  return props.articles.slice(start, start + props.perPage)
})
</script>

<template>
  <div>
    <p v-if="articles.length === 0" class="empty">Aucun article trouvé.</p>
    <div class="grid">
      <ArticleItem
        v-for="a in articlesPage"
        :key="a.id"
        :article="a"
        :show-delete="showDelete"
        @ajouter-panier="emit('ajouter-panier', $event)"
        @supprimer="emit('supprimer', $event)"
      />
    </div>
    <div v-if="pageCount > 1" class="pagination">
      <button class="btn btn-outline" :disabled="page === 1" @click="page--">Précédent</button>
      <span>Page {{ page }} / {{ pageCount }}</span>
      <button class="btn btn-outline" :disabled="page === pageCount" @click="page++">Suivant</button>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}
.pagination {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
}
.empty {
  color: var(--muted);
}
</style>
