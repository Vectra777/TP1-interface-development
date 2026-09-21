<script setup>
defineProps({ items: { type: Array, required: true } })
const emit = defineEmits(['retirer'])
</script>

<template>
  <div>
    <div v-if="items.length === 0" class="empty">
      <p>Votre panier est vide.</p>
      <router-link class="btn" to="/articles">Voir les articles</router-link>
    </div>
    <ul v-else class="panier-list">
      <li v-for="(item, index) in items" :key="index">
        <img v-if="item.image" :src="item.image" :alt="item.title" class="thumb" />
        <div v-else class="thumb thumb-placeholder">{{ item.category }}</div>
        <div class="item-info">
          <span class="title">{{ item.title }}</span>
          <span class="category">{{ item.category }}</span>
        </div>
        <span class="item-price">{{ item.price.toFixed(2) }} €</span>
        <button class="btn btn-danger btn-small" @click="emit('retirer', index)">Retirer</button>
      </li>
    </ul>
    <p v-if="items.length" class="total">
      Total : {{ items.reduce((sum, i) => sum + i.price, 0).toFixed(2) }} €
    </p>
  </div>
</template>

<style scoped>
.panier-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.panier-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid var(--border);
  background: var(--surface);
  padding: 0.75rem 1rem;
  border-radius: 4px;
}
.thumb {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
}
.thumb-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  color: var(--muted);
  font-size: 0.65rem;
  text-transform: uppercase;
  text-align: center;
}
.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.title {
  font-weight: 600;
}
.category {
  color: var(--muted);
  font-size: 0.8rem;
  text-transform: uppercase;
}
.item-price {
  font-weight: 600;
}
.total {
  margin-top: 1.5rem;
  font-weight: 700;
  font-size: 1.2rem;
  text-align: right;
}
.empty {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  color: var(--muted);
}
</style>
