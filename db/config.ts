export const artworks = [
  {
    id: 'willow',
    title: 'Willow',
    image: '/src/artworks/willow.png',
    date: '2025-04-01',
    hoursWorked: 15,
    style: 'Oil painting',
    material: 'Oil on canvas',
    explanation: 'A moody piece inspired '<br> 'by rainy spring days.'
  },
  {
    id: 'anniversary',
    title: 'Anniversary',
    image: '/artworks/anniversary.png',
    date: '2024-11-05',
    hoursWorked: 20,
    style: 'Acrylic',
    material: 'Acrylic on wood panel',
    explanation: 'A celebration of love and memory.'
  }
];
export function getStaticPaths() {
  return artworks.map((art) => ({
    params: { id: art.id }
  }));
}