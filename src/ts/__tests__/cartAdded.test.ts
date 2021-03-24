import MusicAlbum from '../Music';
import Book from '../Book';
import Cart from '../Cart';
import Movie from '../Movie';

 
const album = new MusicAlbum(11, 'Meteora', 'Linkin park', 1500, );
   
const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 1500, 1225)

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
    'avengers_img.png',
);
test('фильм добавляется в корзину', () => {
 
  const cart = new Cart();
  cart.add(movie);
  expect(cart.getAll().includes(movie)).toBeTruthy();
});


test('корректный расчет стоимости корзины', () => {
    const cart = new Cart();
    cart.add(album);
    cart.add(book);
  expect(cart.getTotalPrice()).toBe(3000);
});



test('корректный расчет стоимости корзины со скидкой', () => {

    const cart = new Cart();
    cart.add(album);
    cart.add(book);
    cart.getTotalPrice();
  expect(cart.getDiscountlPrice(15)).toBe(2550);
});

test('deleteItems() удаляет товары из корзины по индексу', () => {
    const cart = new Cart();
    cart.add(album);
    cart.add(book);
     expect(cart.deleteItems(1)).toBeTruthy;
});
