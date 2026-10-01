const filmek = [
  {
    "title": "Ratatouille",
    "year": 2007,
    "genre": "Animation",
    "rating": 5
  },
  {
    "title": "Kung Fu Panda",
    "year": 2008,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Up",
    "year": 2009,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Toy Story 3",
    "year": 2010,
    "genre": "Animation",
    "rating": 1
  },
  {
    "title": "Frozen",
    "year": 2013,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Inside Out",
    "year": 2015,
    "genre": "Animation",
    "rating": 5
  },
  {
    "title": "Zootopia",
    "year": 2016,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Coco",
    "year": 2017,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "genre": "Animation",
    "rating": 3
  },
  {
    "title": "Joker",
    "year": 2019,
    "genre": "Drama",
    "rating": 4
  },
  {
    "title": "Parasite",
    "year": 2019,
    "genre": "Thriller",
    "rating": 4
  },
  {
    "title": "Encanto",
    "year": 2021,
    "genre": "Animation",
    "rating": 2
  },
  {
    "title": "Everything Everywhere All at Once",
    "year": 2022,
    "genre": "Action",
    "rating": 3
  },
  {
    "title": "The Super Mario Bros. Movie",
    "year": 2023,
    "genre": "Animation",
    "rating": 2
  },
  {
    "title": "Inside Out 2",
    "year": 2024,
    "genre": "Animation",
    "rating": 5
  }
];


const table = document.getElementById("tartalom");

for (const film of filmek) {

  const sor = document.createElement("tr");

  const titleCell = document.createElement("td");
  titleCell.textContent = film.title;
  sor.appendChild(titleCell);

  const yearCell = document.createElement("td");
  yearCell.textContent = film.year;
  sor.appendChild(yearCell);

  const genreCell = document.createElement("td");
  genreCell.textContent = film.genre;
  sor.appendChild(genreCell);

  const ratingCell = document.createElement("td");
  const stars = "⭐".repeat(film.rating);
  ratingCell.textContent = stars;

  if (film.rating < 3) {
    sor.classList.add("low-rating");
  }

  sor.appendChild(ratingCell);

  table.appendChild(sor);
}


function Add() {

  let title = document.getElementById("title").value;
  let year = document.getElementById("year").value;
  let genre = document.getElementById("genre").value;
  let rating = document.getElementById("rating").value;

  if (validate(true)) {
    let film = {
      title: title,
      year: year,
      genre: genre,
      rating: Number(rating)
    };

    // Hozzáadjuk a meglévő filmek listájához
    filmek.push(film);

    // Új sor létrehozása
    const sor = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = film.title;
    sor.appendChild(titleCell);

    const yearCell = document.createElement("td");
    yearCell.textContent = film.year;
    sor.appendChild(yearCell);

    const genreCell = document.createElement("td");
    genreCell.textContent = film.genre;
    sor.appendChild(genreCell);

    const ratingCell = document.createElement("td");
    ratingCell.textContent = "⭐".repeat(film.rating);

    if (film.rating < 3) {
      sor.classList.add("low-rating");
    }

    sor.appendChild(ratingCell);

    // Az új sor bekerül a meglévő táblázatba
    table.appendChild(sor);

    // Mezők törlése
    document.getElementById("title").value = "";
    document.getElementById("year").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("rating").value = "";
  }

  
}

const form = document.getElementById("filmForm");
const fields = ['title', 'year', 'genre', 'rating'];

fields.forEach(id => {
  const element = document.getElementById(id);
  element.dataset.touched = 'false';

  element.addEventListener('input', () => {
    element.dataset.touched = 'true';
    validate();
  });

  element.addEventListener('change', () => {
    element.dataset.touched = 'true';
    validate();
  });
});

function setMsg(id, text, ok = false) {
  const span = document.getElementById(id + 'Msg');
  span.textContent = text;
  span.className = 'msg ' + (ok ? 'success' : 'error');
}

function validate(submit = false) {
  const data = new FormData(form);
  const title = data.get('title').trim();
  const year = data.get('year').trim();
  const genre = data.get('genre');
  const rating = data.get('rating');
  let valid = true;
  if (submit || document.getElementById('title').dataset.touched === 'true') {
    if (title.length < 3 || title.length > 100 ) {
      setMsg('title', 'A címnek legalább 3 karakter hosszú és legfeljebb 100 karakter hosszú lehet!');
      valid = false;
    } else {
      setMsg('title', '✔', true);
    }
  }
  if (submit || document.getElementById('year').dataset.touched === 'true') {
    if (year < 1 || year > 2026) {
      setMsg('year', 'A évnek kötelező megadni 1 és 2026 között!');
      valid = false;
    } else {
      setMsg('year', '✔', true);
    }
  }
  if (submit || document.getElementById('genre').dataset.touched === 'true') {
    if (genre.length < 3 || genre.length > 100) {
      setMsg('genre', 'A műfajt kötelező megadni 3 és 100 karakter között!');
      valid = false;
    } else {
      setMsg('genre', '✔', true);
    }
  }
  if (submit || document.getElementById('rating').dataset.touched === 'true') {
    if (rating < 1 || rating > 5) {
      setMsg('rating', 'A értékelést kötelező megadni 1 és 5 között!   ');
      valid = false;
    } else {
      setMsg('rating', '✔', true);
    } 
  }
  return valid;
}



