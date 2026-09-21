<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['ajouter'])

const form = reactive({
  title: '',
  category: '',
  price: '',
  description: '',
  image: '',
})

function submit() {
  emit('ajouter', {
    title: form.title,
    category: form.category,
    price: parseFloat(form.price) || 0,
    description: form.description,
    image: form.image,
  })
  form.title = ''
  form.category = ''
  form.price = ''
  form.description = ''
  form.image = ''
}
</script>

<template>
  <form class="form" @submit.prevent="submit">
    <label>
      Titre
      <input v-model="form.title" type="text" required />
    </label>
    <label>
      Catégorie
      <input v-model="form.category" type="text" required />
    </label>
    <label>
      Prix (€)
      <input v-model="form.price" type="number" step="0.01" min="0" required />
    </label>
    <label>
      Description
      <textarea v-model="form.description" rows="3"></textarea>
    </label>
    <label>
      Image (URL, optionnel)
      <input v-model="form.image" type="url" placeholder="https://..." />
    </label>
    <button class="btn" type="submit">Ajouter l'article</button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 420px;
}
label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.9rem;
}
</style>
