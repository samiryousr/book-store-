
/* ===== LOGIC FACTS ===== */

const books = [
  { id: "ai_intro", title: "AI Introduction", img: "https://covers.openlibrary.org/b/id/10958324-L.jpg" },
  { id: "data_structures", title: "Data Structures", img: "https://covers.openlibrary.org/b/id/10523364-L.jpg" },
  { id: "prolog_basics", title: "Prolog Basics", img: "https://covers.openlibrary.org/b/id/8231996-L.jpg" },
  { id: "web_dev", title: "Web Development", img: "https://covers.openlibrary.org/b/id/10909258-L.jpg" },
  { id: "machine_learning", title: "Machine Learning", img: "https://covers.openlibrary.org/b/id/10594703-L.jpg" },
  { id: "database_systems", title: "Database Systems", img: "https://covers.openlibrary.org/b/id/10448262-L.jpg" },
  { id: "algorithms", title: "Algorithms", img: "https://covers.openlibrary.org/b/id/240726-L.jpg" },
  { id: "operating_systems", title: "Operating Systems", img: "https://covers.openlibrary.org/b/id/8235116-L.jpg" },
  { id: "networking", title: "Computer Networks", img: "https://covers.openlibrary.org/b/id/8228691-L.jpg" },
  { id: "cyber_security", title: "Cyber Security", img: "https://covers.openlibrary.org/b/id/10508491-L.jpg" },
  { id: "software_eng", title: "Software Engineering", img: "https://covers.openlibrary.org/b/id/8274151-L.jpg" },
  { id: "cloud_computing", title: "Cloud Computing", img: "https://covers.openlibrary.org/b/id/10909241-L.jpg" },
  { id: "mobile_dev", title: "Mobile Development", img: "https://covers.openlibrary.org/b/id/10518918-L.jpg" },
  { id: "game_dev", title: "Game Development", img: "https://covers.openlibrary.org/b/id/10909259-L.jpg" },
  { id: "python", title: "Python Programming", img: "https://covers.openlibrary.org/b/id/6979861-L.jpg" },
  { id: "java", title: "Java Programming", img: "https://covers.openlibrary.org/b/id/8221251-L.jpg" },
  { id: "c_plus", title: "C++ Programming", img: "https://covers.openlibrary.org/b/id/8231991-L.jpg" },
  { id: "javascript", title: "JavaScript Guide", img: "https://covers.openlibrary.org/b/id/10523370-L.jpg" },
  { id: "logic_design", title: "Logic Design", img: "https://covers.openlibrary.org/b/id/8235113-L.jpg" },
  { id: "ai_advanced", title: "Advanced AI", img: "https://covers.openlibrary.org/b/id/10594706-L.jpg" }
];

const borrowed = {
  ai_intro: "Ali",
  data_structures: "Sara",
  machine_learning: "Omar",
  algorithms: "Mona",
  python: "Yousef",
  javascript: "Ahmed"
};

/* ===== LOGIC RULES ===== */

function isAvailable(id) {
  return !borrowed[id];
}

function borrowedBy(id) {
  return borrowed[id];
}

/* ===== RENDER ===== */

const bookList = document.getElementById("bookList");

books.forEach(book => {
  const li = document.createElement("li");
  const available = isAvailable(book.id);

  li.innerHTML = `
    <img src="${book.img}">
    <h3>${book.title}</h3>
    <div class="status ${available ? "available" : "borrowed"}">
      ${available ? "✅ Available" : "❌ Borrowed by " + borrowedBy(book.id)}
    </div>
  `;

  bookList.appendChild(li);
});