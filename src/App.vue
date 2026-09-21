<script setup>
import { store } from './store'
</script>

<template>
  <header class="site-header">
    <nav class="container">
      <router-link to="/" class="brand">Boutique</router-link>
      <div class="nav-links">
        <router-link to="/articles">Articles</router-link>
        <router-link to="/ajouter">Ajouter</router-link>
        <router-link to="/panier">Panier ({{ store.panier.length }})</router-link>
        <router-link v-if="store.user" to="/admin">Admin</router-link>
        <router-link v-if="!store.user" to="/login">Connexion</router-link>
        <span v-else class="user">{{ store.user }}</span>
      </div>
    </nav>
  </header>
  <main class="container">
    <router-view />
  </main>
</template>

<style scoped>
.site-header {
  background: var(--primary);
  color: #fff;
}
.site-header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
}
.brand {
  font-weight: 700;
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
}
.nav-links {
  display: flex;
  gap: 1.25rem;
  align-items: center;
}
.nav-links a {
  color: #fff;
  text-decoration: none;
  opacity: 0.9;
}
.nav-links a.router-link-exact-active {
  opacity: 1;
  font-weight: 600;
  border-bottom: 2px solid #fff;
}
.user {
  font-style: italic;
}
main {
  padding: 2rem 1.5rem;
}
</style>
