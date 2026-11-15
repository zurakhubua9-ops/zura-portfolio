// Edit titles, image paths, and real project links here.
export const email = 'zurakhubua9@gmail.com'
export const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const artworks = [
  { id: '01', image: 'designs/burger.png', title: 'Burger' },
  { id: '02', image: 'designs/colors.png', title: 'Colors' },
  { id: '03', image: 'designs/design-03.png', title: 'Don’t Just Dream' },
  { id: '04', image: 'designs/DYSON.png', title: 'Dyson' },
  { id: '05', image: 'designs/JACKET.png', title: 'Jacket' },
  { id: '06', image: 'designs/menu.png', title: 'Menu' },
  { id: '07', image: 'designs/design-07.png', title: 'Mint & Chocolate' },
  { id: '08', image: 'designs/Msuit.png', title: 'Suit' },
  { id: '09', image: 'designs/orange.png', title: 'Orange' },
  { id: '10', image: 'designs/PORSCHE 911.png', title: 'Porsche 911' },
]

export const previewUrl = (path) => assetUrl(path.replace('designs/', 'previews/').replace(/\.png$/i, '.jpg'))

export const projects = [
  {
    id: 'playzone', title: 'PLAYZONE', category: 'Entertainment website',
    image: 'projects/playzone.jpg', theme: 'playzone',
    description: 'An entertainment concept bringing bowling, VR and karting into one energetic experience. Visitors can explore activities, apply offers and save a visit plan on their device. This is a portfolio demo, with no real reservations or payments.',
    sourceUrl: 'https://github.com/zurakhubua9-ops/playzone', liveUrl: 'https://zurakhubua9-ops.github.io/playzone/',
  },
  {
    id: 'brew', title: 'BREWCOFFEESHOP', category: 'Coffee shop website',
    image: 'projects/brew.jpg', theme: 'brew',
    description: 'A coffee-house brand concept built around warm imagery and expressive typography. A searchable menu, category filters, size options and product details help visitors explore the selection. Presented as a portfolio concept.',
    sourceUrl: 'https://github.com/zurakhubua9-ops/BREWCOFFEESHOP', liveUrl: 'https://zurakhubua9-ops.github.io/BREWCOFFEESHOP/',
  },
  {
    id: 'fashion', title: 'ONEMODE', category: 'Fashion website',
    image: 'projects/fashion.jpg', theme: 'fashion',
    description: 'A fashion discovery concept with curated collections, brand browsing, product pages and saved favourites. Editorial imagery and a bold layout bring the catalogue together. An independent portfolio demo with no real purchases.',
    sourceUrl: 'https://github.com/zurakhubua9-ops/onemode', liveUrl: 'https://zurakhubua9-ops.github.io/onemode/',
  },
]

