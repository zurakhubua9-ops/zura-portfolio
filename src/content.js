// Edit titles, image paths, and real project links here.
export const email = 'zurakhubua9@gmail.com'
export const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const artworks = [
  { id: '01', image: 'designs/burger.png', title: 'Burger' },
  { id: '02', image: 'designs/colors.png', title: 'Colors' },
  { id: '03', image: 'designs/design-03.png', title: 'Design 03' },
  { id: '04', image: 'designs/DYSON.png', title: 'Dyson' },
  { id: '05', image: 'designs/JACKET.png', title: 'Jacket' },
  { id: '06', image: 'designs/menu.png', title: 'Menu' },
  { id: '07', image: 'designs/design-07.png', title: 'Mint & Chocolate' },
  { id: '08', image: 'designs/Msuit.png', title: 'Suit' },
  { id: '09', image: 'designs/orange.png', title: 'Orange' },
  { id: '10', image: 'designs/PORSCHE 911.png', title: 'Porsche 911' },
]

export const projects = [
  {
    id: 'playzone', title: 'PLAYZONE', category: 'Entertainment website',
    image: null, theme: 'playzone',
    description: 'A website project for an entertainment destination.',
    sourceUrl: 'https://github.com/zurakhubua9-ops/playzone', liveUrl: null,
  },
  {
    id: 'brew', title: 'BREWCOFFEESHOP', category: 'Coffee shop website',
    image: null, theme: 'brew',
    description: 'A website project for a coffee shop.',
    sourceUrl: 'https://github.com/zurakhubua9-ops/BREWCOFFEESHOP', liveUrl: null,
  },
  {
    id: 'fashion', title: 'FASHION', category: 'Fashion website',
    image: null, theme: 'fashion',
    description: 'A website project for fashion and clothing.',
    sourceUrl: null, liveUrl: null,
  },
]
