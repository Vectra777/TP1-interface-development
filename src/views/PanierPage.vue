<script setup>
import { store, removeFromPanier } from '../store'
import Panier from '../components/Panier.vue'
</script>

<template>
  <section>
    <h1>Panier</h1>
    <Panier :items="store.panier" @retirer="removeFromPanier" />
  </section>
</template>
