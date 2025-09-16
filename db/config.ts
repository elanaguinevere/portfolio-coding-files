export const artworks = [
  {
    id: 'willow',
    title: 'Willow',
    image: '/artworks/willow.png',
    date: '2025-04-01',
    hoursWorked: 15,
    style: 'Oil painting',
    material: 'Oil on canvas',
    explanation: 'A moody piece inspired by rainy spring days.'
  },
  {
    id: 'anniversary',
    title: 'Anniversary',
    image: '/artworks/anniversary.png',
    date: '2024-11-05',
    hoursWorked: 20,
    style: 'acrylic',
    material: 'Acrylic on canvas',
    explanation: 'For the 50th anniversary of my grandparents’ marriage I decided to paint them something connected to gold roses. It was the first time I painted hands and used a photo reference.'
  }
  {
    id: 'dagger',
    title: 'Hand With Dagger',
    image: '/artworks/anniversary.png',
    date: '2025-04-05',
    hoursWorked: 24,
    style: 'oil',
    material: 'oil on canvas',
    explanation: 'It was my first time painting with oil paint and trying to paint a hand and arm that looked kind of realistic. I loved painting this at the atelier of Lut, my mentor.'
  }
];
export function getStaticPaths() {
  return artworks.map((art) => ({
    params: { id: art.id }
  }));
}