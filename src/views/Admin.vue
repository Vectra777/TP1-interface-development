<script setup>
import { store, removeArticle } from '../store'
import ListeArticles from '../components/ListeArticles.vue'
</script>

<template>
  <section>
    <h1>Administration</h1>
    <p>Connecté en tant que {{ store.user }}.</p>
    <ListeArticles :articles="store.articles" :show-delete="true" :per-page="8" @supprimer="removeArticle" />
  </section>
</template>
