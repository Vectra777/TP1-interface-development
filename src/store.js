import { reactive } from 'vue'

export const store = reactive({
  articles: [
    { id: 1, title: 'Clavier mécanique', category: 'Électronique', price: 59.9, description: "Clavier mécanique rétroéclairé, switches bleus.", image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=400&fit=crop' },
    { id: 2, title: 'Roman "Les Vagues"', category: 'Livre', price: 12.5, description: 'Roman de Virginia Woolf, édition poche.', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop' },
    { id: 3, title: 'Sweat à capuche', category: 'Vêtement', price: 34.0, description: 'Sweat gris chiné, coton bio, tailles S à XL.', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=400&fit=crop' },
    { id: 4, title: 'Ballon de basket', category: 'Sport', price: 22.9, description: 'Ballon taille 7, usage intérieur/extérieur.', image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&h=400&fit=crop' },
    { id: 5, title: 'Lampe de bureau', category: 'Maison', price: 27.0, description: 'Lampe LED avec variateur, port USB intégré.', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=400&fit=crop' },
    { id: 6, title: 'Casque audio', category: 'Électronique', price: 89.0, description: 'Casque sans fil, réduction de bruit active.', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop' },
  ],
  panier: [],
  user: null,
  nextId: 7,
})

export function addArticle(article) {
  store.articles.push({ id: store.nextId++, ...article })
}

export function removeArticle(id) {
  store.articles = store.articles.filter((a) => a.id !== id)
}

export function addToPanier(article) {
  store.panier.push(article)
}

export function removeFromPanier(index) {
  store.panier.splice(index, 1)
}

export function login(username) {
  store.user = username
}

export function logout() {
  store.user = null
}
