<script setup></script>

<template>
  <section>
    <h1>Bienvenue</h1>
    <p>Petite boutique en ligne développée avec Vue.js et Vue Router.</p>
    <div class="links">
      <router-link class="btn" to="/articles">Voir les articles</router-link>
      <router-link class="btn btn-outline" to="/ajouter">Ajouter un article</router-link>
    </div>
  </section>
</template>

<style scoped>
.links {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
}
</style>
