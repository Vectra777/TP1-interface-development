<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { login } from '../store'

const username = ref('')
const router = useRouter()
const route = useRoute()

function submit() {
  login(username.value || 'invité')
  router.push(route.query.redirect || '/')
}
</script>

<template>
  <section>
    <h1>Connexion</h1>
    <form class="form" @submit.prevent="submit">
      <label>
        Nom d'utilisateur
        <input v-model="username" type="text" required />
      </label>
      <button class="btn" type="submit">Se connecter</button>
    </form>
  </section>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 320px;
}
label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
</style>
