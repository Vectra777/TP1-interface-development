# TP1 Mini boutique Vue.js

Petite application Vue 3 + Vue Router : liste d'articles, recherche, panier,
ajout/suppression d'articles, page admin protégée.

## Lancer le projet

```sh
npm install
npm run dev
```

## Pages

- `/`  Accueil
- `/articles`  Liste des articles (recherche, filtre catégorie, pagination)
- `/article/:id`  Détail d'un article
- `/ajouter`  Formulaire d'ajout
- `/panier`  Panier
- `/login`  Connexion (aucune authentification réelle, tout nom d'utilisateur fonctionne)
- `/admin`  Liste des articles avec suppression (accès redirigé vers `/login` si non connecté)

Les articles sont stockés en mémoire (`src/store.js`), pas de base de données ni d'API.
