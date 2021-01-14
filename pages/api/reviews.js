// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fakeData = [
  {
    name: 'Samya A.',
    message: 'Encore un grand merci pour ma commande, c\'était super bon.'
  },
  {
    name: 'Samya B.',
    message: 'Encore un grand merci pour ma commande, c\'était super bon.'
  },
  {
    name: 'Samya C.',
    message: 'Encore un grand merci pour ma commande, c\'était super bon.'
  }
]

export function getReviews(){
  return fakeData;
}

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(getReviews()));
}
