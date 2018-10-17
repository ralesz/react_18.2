var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    src: './images/harry.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    src: './images/Kion.png'
  },
  {
    id: 3,
    title: 'Pulp fiction',
    desc: 'directed by Quentin Tarantino',
    src: './images/pulp.jpg'
  },
  {
    id: 4,
    title: 'Back to the future',
    desc: 'De Lorean DMC-12',
    src: './images/future.jpg'
  }
];
  
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img',{src: movie.src})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));

