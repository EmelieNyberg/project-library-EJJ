/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/

const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
    rating: 4.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    image: './books-images/the-great-gatsby.jpg'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    rating: 4.5,
    description:
      'Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.',
    image: './books-images/to-kill-a-mockingbird.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Science Fiction',
    rating: 4.4,
    description:
      'A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.',
    image: './books-images/1984.jpg'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.',
    image: './books-images/pride-and-prejudice.jpg'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    rating: 4,
    description:
      'Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    rating: 4.6,
    description:
      'A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.',
    image: './books-images/the-hobbit.jpg'
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    rating: 4.7,
    description:
      'The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.',
    image: "./books-images/harry-potter-and-the-sorcerer.jpg"
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    rating: 4.1,
    description:
      'An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.',
    image: './books-images/moby-dick.jpg'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    rating: 4.55,
    description:
      'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
    image: './books-images/the-lord-of-the-rings.jpg'
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    year: 1977,
    genre: 'Horror',
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    year: 1950,
    genre: 'Fantasy',
    rating: 4.15,
    description:
      'The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.',
    image: './books-images/the-chronicles-of-narnia.jpg'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    genre: 'Mystery',
    rating: 3.8,
    description:
      'A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
    genre: 'Science Fiction',
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    year: 2005,
    genre: 'Mystery',
    rating: 4.1,
    description:
      'A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    year: 2006,
    genre: 'Dystopian',
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: './books-images/unknown.jpg'
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    year: 1979,
    genre: 'Science Fiction',
    rating: 4.35,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Giver',
    author: 'Lois Lowry',
    year: 1993,
    genre: 'Dystopian',
    rating: 4.12,
    description:
      'A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.',
    image: './books-images/unknown.jpg'
  }
]


const buttonShuffle = document.getElementById('buttonShuffle');
const bookContainer = document.getElementById('bookContainer');
const genreFilter = document.getElementById('genreFilter');
const buttonPopular = document.getElementById('buttonPopular');
const buttonLatest = document.getElementById('buttonLatest');
const buttons = document.querySelectorAll('button');

const getRandomBook = () => {
  // We want to get a random book
  const randomIndex = Math.floor(Math.random() * books.length);
  const book = books[randomIndex];

  bookContainer.innerHTML = `
   <div class="card">
      <img src="${book.image}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>Year: ${book.year}</p>
      <p>${book.genre}</p>
      <p>⭐️ ${book.rating}</p>
      <p>${book.description}</p>
    </div>
  `;
};


const displayBooks = (bookArray) => {
  bookContainer.innerHTML = '';
  bookArray.forEach(book => {
    bookContainer.innerHTML += `
      <div class="card">
          <img src="${book.image}" alt="${book.title}">
          <h3>${book.title}</h3>
          <p>${book.author}</p>
          <p>Year: ${book.year}</p>
          <p>${book.genre}</p>
          <p>⭐️ ${book.rating}</p>
          <p>${book.description}</p>
      </div>
      `;
  });
};

const filterGenre = () => {
  // 1. get the value from the select
  const value = genreFilter.value;
  console.log('the user selected:', value)

  if (value === 'all') {
    // get all the dogs
    displayBooks(books);
  } else {
    // filter the dogs
    const filteredList = books.filter(book => book.genre.toLowerCase() === value.toLowerCase());
    console.log('filtered list:', filteredList)
    displayBooks(filteredList);
  }
}

const filterPopular = () => {
  const sortedRating = books.sort((a, b) => b.rating - a.rating);
  // Visa de sorterande böckerna (populäraste först)
  console.log(sortedRating);
  // Alternativt kan du visa böckerna direkt på sidan
  displayBooks(sortedRating);
}

const filterLatest = () => {
  const sortedYear = books.sort((a, b) => b.year - a.year);
  console.log(sortedYear);
  displayBooks(sortedYear);
}

const handleButtonClick = (event) => {
  buttons.forEach(button => button.classList.remove('active'));
  event.target.classList.add('active');
};

// Lägger till event listeners för alla knappar
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

// Funktion för att hantera när en genre väljs
const handleDropdownSelection = () => {
  const selectedValue = genreFilter.value;

  // Om ett värde är valt, gör dropdown aktiv
  if (selectedValue) {
    genreFilter.classList.add('active');
  } else {
    genreFilter.classList.remove('active');
  }
};

// Lägg till event listener på dropdown-menyn för att lyssna på val
genreFilter.addEventListener('change', handleDropdownSelection);

buttonShuffle.addEventListener("click", getRandomBook);
genreFilter.addEventListener("change", filterGenre);
buttonPopular.addEventListener("click", filterPopular);
buttonLatest.addEventListener("click", filterLatest);

// Anropar funktionen
displayBooks(books);


