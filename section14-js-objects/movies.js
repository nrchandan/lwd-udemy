const movies = [
  {
    title: 'Schindler\'s list',
    rating: 5,
    watched: true
  },
  {
    title: '102 Not Out',
    rating: 4.5,
    watched: true
  },
  {
    title: 'Gulabo Sitabo',
    rating: 4,
    watched: false
  },
  {
    title: 'Moana',
    rating: 4,
    watched: true
  }
]

movies.forEach((movie) => {
  const watched = movie.watched === true ? 'watched' : 'not seen'
  console.log('You have ' + watched + ' "' + movie.title + '" - ' + movie.rating + ' stars')
})
