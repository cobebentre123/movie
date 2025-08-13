// js/app.js

const movies = [
  {
    id: "m1",
    title: "Chị Chị Em Em 2",
    year: 2023,
    genres: ["tâm lý", "chính kịch"],
    director: "Vũ Ngọc Đãng",
    actors: ["Minh Hằng", "Ngọc Trinh", "Cao Thiên Kha"],
    poster: "images/chi-chi-em-em-2.jpg",
    description: "Lấy cảm hứng từ giai thoại về hai mỹ nhân Ba Trà và Tư Nhị, phim kể về cuộc đối đầu giữa hai người phụ nữ với tham vọng và sự ganh đua không khoan nhượng tại Sài Gòn xưa."
  },
  {
    id: "m2",
    title: "Đất Rừng Phương Nam",
    year: 2023,
    genres: ["lịch sử", "phiêu lưu"],
    director: "Nguyễn Quang Dũng",
    actors: ["Mai Tài Phến", "Hồng Ánh", "Tuấn Trần"],
    poster: "images/dat-rung-phuong-nam.jpg",
    description: "Dựa trên tiểu thuyết cùng tên của nhà văn Đoàn Giỏi, bộ phim kể về cuộc sống và hành trình lưu lạc của cậu bé An cùng những con người miền Nam trong bối cảnh kháng chiến chống Pháp."
  },
  {
    id: "m3",
    title: "Lật Mặt 6: Tấm Vé Định Mệnh",
    year: 2023,
    genres: ["hành động", "hài"],
    director: "Lý Hải",
    actors: ["Trung Dũng", "Quốc Cường", "Thanh Thức"],
    poster: "images/lat-mat-6.jpg",
    description: "Khi một nhóm bạn tìm thấy tấm vé số trúng độc đắc, họ phải đối mặt với lòng tham, sự phản bội và những hiểm nguy rình rập để bảo vệ số tiền lớn đó."
  },
  {
    id: "m4",
    title: "Nhà Bà Nữ",
    year: 2023,
    genres: ["hài", "gia đình", "tâm lý"],
    director: "Trấn Thành",
    actors: ["Uyển Ân", "Song Luân", "Lê Giang"],
    poster: "images/nha-ba-nu.jpg",
    description: "Câu chuyện hài hước nhưng cũng đầy sâu lắng về một gia đình ba thế hệ phụ nữ, khắc họa những mâu thuẫn, tình yêu và sự hy sinh trong cuộc sống hàng ngày."
  },
  {
    id: "m5",
    title: "Bố Già",
    year: 2021,
    genres: ["tâm lý", "gia đình"],
    director: "Trấn Thành",
    actors: ["Trấn Thành", "Tuấn Trần", "Lê Giang"],
    poster: "images/bo-gia.jpg",
    description: "Bộ phim xoay quanh ông Ba Sang và cuộc sống mưu sinh vất vả, đầy trắc trở, đồng thời khắc họa tình cảm cha con sâu sắc, thiêng liêng và những mâu thuẫn thế hệ."
  },
  {
    id: "m6",
    title: "Hai Phượng",
    year: 2019,
    genres: ["hành động", "võ thuật"],
    director: "Lê Văn Kiệt",
    actors: ["Ngô Thanh Vân", "Phan Thanh Nhiên", "Mai Cát Vi"],
    poster: "images/hai-phuong.jpg",
    description: "Khi con gái của Hai Phượng bị bắt cóc, cô buộc phải trở lại thế giới ngầm mà mình từng chối bỏ để truy đuổi băng đảng tội phạm và giành lại con."
  },
  {
    id: "m7",
    title: "Mắt Biếc",
    year: 2019,
    genres: ["lãng mạn", "chính kịch"],
    director: "Victor Vũ",
    actors: ["Trần Nghĩa", "Trúc Anh", "Khánh Vân"],
    poster: "images/mat-biec.jpg",
    description: "Chuyển thể từ tiểu thuyết của Nguyễn Nhật Ánh, phim là câu chuyện tình yêu đơn phương, đầy day dứt của chàng trai Ngạn dành cho cô bạn thanh mai trúc mã có đôi mắt biếc."
  },
  {
    id: "m8",
    title: "Ký Sinh Trùng",
    year: 2019,
    genres: ["chính kịch", "hài đen"],
    director: "Bong Joon-ho",
    actors: ["Song Kang-ho", "Choi Woo-shik", "Park So-dam"],
    poster: "images/ky-sinh-trung.jpg",
    description: "Bộ phim đoạt giải Oscar kể về gia đình nhà Ki nghèo khó tìm cách đột nhập vào cuộc sống của gia đình nhà Park giàu có, tạo nên những tình huống trớ trêu và bi kịch."
  },
  {
    id: "m9",
    title: "Avengers: Endgame",
    year: 2019,
    genres: ["hành động", "khoa học viễn tưởng"],
    director: "Anthony Russo",
    actors: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    poster: "images/avengers-endgame.jpg",
    description: "Sau sự kiện diệt vong của Thanos, các siêu anh hùng còn lại phải tìm cách đảo ngược tình thế và giải cứu vũ trụ khỏi hiểm họa diệt vong."
  },
  {
    id: "m10",
    title: "Avatar",
    year: 2009,
    genres: ["khoa học viễn tưởng", "hành động"],
    director: "James Cameron",
    actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    poster: "images/avatar.jpg",
    description: "Trên hành tinh Pandora, một cựu lính thủy đánh bộ bị liệt chân tham gia chương trình Avatar để khám phá thế giới này và phải đối mặt với lựa chọn giữa nhiệm vụ và tình yêu."
  },
  {
    id: "m11",
    title: "Doctor Strange in the Multiverse of Madness",
    year: 2022,
    genres: ["hành động", "khoa học viễn tưởng", "kinh dị"],
    director: "Sam Raimi",
    actors: ["Benedict Cumberbatch", "Elizabeth Olsen", "Xochitl Gomez"],
    poster: "images/doctor-strange-in-the-multiverse-of-madness.jpg",
    description: "Doctor Strange khám phá sự phức tạp của Đa vũ trụ và phải đối mặt với một kẻ thù mới bí ẩn để bảo vệ thực tại."
  },
  {
    id: "m12",
    title: "Dune",
    year: 2021,
    genres: ["khoa học viễn tưởng", "phiêu lưu", "chính kịch"],
    director: "Denis Villeneuve",
    actors: ["Timothée Chalamet", "Rebecca Ferguson", "Zendaya"],
    poster: "images/dune.jpg",
    description: "Một câu chuyện về cuộc hành trình của Paul Atreides, một quý tộc trẻ tuổi, đến hành tinh sa mạc nguy hiểm nhất vũ trụ để bảo vệ gia đình và dân tộc của mình."
  },
  {
    id: "m13",
    title: "The Batman",
    year: 2022,
    genres: ["hành động", "tội phạm", "bí ẩn"],
    director: "Matt Reeves",
    actors: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano"],
    poster: "images/the-batman.jpg",
    description: "Trong năm thứ hai chiến đấu với tội phạm, Batman khám phá ra một mạng lưới tham nhũng ở thành phố Gotham sau khi một kẻ giết người hàng loạt bí ẩn xuất hiện."
  },
  {
    id: "m14",
    title: "Top Gun: Maverick",
    year: 2022,
    genres: ["hành động", "chính kịch"],
    director: "Joseph Kosinski",
    actors: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"],
    poster: "images/top-gun-maverick.jpg",
    description: "Sau hơn ba mươi năm phục vụ, Pete 'Maverick' Mitchell huấn luyện một nhóm học viên tốt nghiệp cho một nhiệm vụ chuyên biệt."
  }
];

// ------- Helper Utilities ----------
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => Array.from(root.querySelectorAll(s));

function debounce(fn, wait=400){
  let t;
  return function(...args){
    clearTimeout(t);
    t = setTimeout(()=>fn.apply(this,args), wait);
  }
}

// ------- DOM refs ----------
const moviesGrid = $('#movies-grid');
const genresContainer = $('#genres-container');
const searchInput = $('#search-input');
const modal = $('#modal');
const modalBody = $('#modal-body');
const modalClose = $('#modal-close');
const modalBackdrop = $('#modal-backdrop');
const themeToggle = $('#theme-toggle');

// State
let selectedGenres = new Set();
let searchTerm = "";

function renderMovies(list){
  moviesGrid.innerHTML = '';
  if(list.length === 0){
    moviesGrid.innerHTML = `<p style="grid-column:1/-1;color:var(--muted)">Không có phim phù hợp.</p>`;
    return;
  }
  list.forEach(movie=>{
    const card = document.createElement('article');
    card.className = 'movie-card';
    card.tabIndex = 0;
    card.dataset.id = movie.id;
    card.innerHTML = `
      <img class="poster" src="${movie.poster}" alt="${escapeHtml(movie.title)} poster" />
      <div class="movie-info">
        <h4 class="movie-title">${escapeHtml(movie.title)}</h4>
        <div class="movie-year">${movie.year} • ${movie.genres.join(', ')}</div>
      </div>
    `;
    card.addEventListener('click', ()=>openModal(movie.id));
    card.addEventListener('keypress', (e)=> {
      if(e.key === 'Enter') openModal(movie.id);
    });
    moviesGrid.appendChild(card);
  });
}

function generateGenreFilters(data){
  const genreSet = new Set();
  data.forEach(m => m.genres.forEach(g => genreSet.add(g)));
  const genres = Array.from(genreSet).sort();
  genresContainer.innerHTML = '';
  genres.forEach(g=>{
    const id = `genre-${g.replace(/\s+/g,'-')}`;
    const wrap = document.createElement('label');
    wrap.className = 'genre-item';
    wrap.innerHTML = `
      <input type="checkbox" id="${id}" name="genre" value="${g}" />
      <span>${g}</span>
    `;
    const checkbox = wrap.querySelector('input');
    checkbox.addEventListener('change', (e)=>{
      if(e.target.checked) selectedGenres.add(e.target.value);
      else selectedGenres.delete(e.target.value);
      applyFilters();
    });
    genresContainer.appendChild(wrap);
  });
}

function applyFilters(){
  const term = searchTerm.trim().toLowerCase();
  const genres = Array.from(selectedGenres);
  const filtered = movies.filter(m => {
    const genreMatch = genres.length === 0 ? true : genres.some(g => m.genres.includes(g));
    const namePass = term === '' ? true : m.title.toLowerCase().includes(term);
    return genreMatch && namePass;
  });
  renderMovies(filtered);
}

function escapeHtml(text){
  return text.replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

function openModal(id){
  const movie = movies.find(m => m.id === id);
  if(!movie) return;
  modal.setAttribute('aria-hidden','false');
  const actors = movie.actors.join(', ');
  modalBody.innerHTML = `
    <div class="modal-poster-wrap">
      <img class="modal-poster" src="${movie.poster}" alt="${escapeHtml(movie.title)} poster" />
    </div>
    <div>
      <h2 id="modal-title" class="modal-title">${escapeHtml(movie.title)} (${movie.year})</h2>
      <div class="meta">Đạo diễn: ${escapeHtml(movie.director)} • Diễn viên: ${escapeHtml(actors)}</div>
      <div class="description">${escapeHtml(movie.description)}</div>
      <div style="margin-top:0.8rem;color:var(--muted)"><strong>Thể loại:</strong> ${movie.genres.join(', ')}</div>
    </div>
  `;
  modalClose.focus();
}
function closeModal(){
  modal.setAttribute('aria-hidden','true');
  modalBody.innerHTML = '';
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
});

const debouncedSearch = debounce((value)=>{
  searchTerm = value;
  applyFilters();
}, 400);

searchInput.addEventListener('input', (e)=>{
  debouncedSearch(e.target.value);
});

function applySavedTheme(){
  const saved = localStorage.getItem('movie_theme');
  if(saved === 'dark'){
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
    themeToggle.setAttribute('aria-pressed','true');
  } else {
    document.body.classList.remove('dark-mode');
    themeToggle.textContent = '🌙';
    themeToggle.setAttribute('aria-pressed','false');
  }
}
themeToggle.addEventListener('click', ()=>{
  const isDark = document.body.classList.toggle('dark-mode');
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('movie_theme', isDark ? 'dark' : 'light');
});

function init(){
  generateGenreFilters(movies);
  renderMovies(movies);
  applySavedTheme();
}
init();