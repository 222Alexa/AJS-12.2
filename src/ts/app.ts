import Cart from './Cart';
import Movie from './Movie';


const movie = new Movie(
1,
'The Avengers',
true,
    'Мстители',
    2012,
    'США',
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    137,
    1000,
    'avengers.png',
);
const cart = new Cart();

cart.add(movie);
cart.getAll();