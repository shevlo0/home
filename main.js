/* ============================
   DATAww
   ============================ */
const SECTIONS = {
  notice:    { label: '공지사항',   desc: '관리자가 작성하는 중요 공지를 확인하세요.' },
  update:    { label: '업데이트',   desc: '서비스 업데이트 내역을 확인하세요.' },
  showcase:  { label: '게임 소개',  desc: '내가 만든 게임을 소개하고 피드백 받아보세요.' },
  review:    { label: '리뷰 / 평가', desc: '게임에 대한 솔직한 리뷰를 남겨보세요.' },
  recommend: { label: '추천 요청',  desc: '하고 싶은 장르나 스타일을 말하면 추천해드려요.' },
  general:   { label: '자유 게시판', desc: '로블록스와 관련된 무엇이든 자유롭게 이야기하세요.' },
  qna:       { label: '질문 / 답변', desc: '궁금한 점을 질문하고 답변해보세요.' },
  tip:       { label: '팁 & 공략',  desc: '유용한 팁과 공략을 공유해보세요.' },
  devlog:    { label: '개발 일지',  desc: '게임 개발 과정을 기록하고 공유해보세요.' },
  recruit:   { label: '팀원 모집',  desc: '같이 게임 만들 팀원을 모집해보세요.' },
  asset:     { label: '에셋 공유',  desc: '무료 에셋을 공유하거나 찾아보세요.' },
};

const BADGE_MAP = {
  admin:  { label: '관리자', cls: 'badge-admin' },
  mod:    { label: '모더레이터', cls: 'badge-mod' },
  pro:    { label: '판린',   cls: 'badge-pro' },
  active: { label: '활동자', cls: 'badge-active' },
  new:    { label: '신규',   cls: 'badge-new' },
};

const SAMPLE_POSTS = [
  {
    id: 1, section: 'notice', title: 'RobloxBoard 서비스 오픈 안내',
    content: 'RobloxBoard가 정식 오픈했습니다. 로블록스 게임을 공유하고 커뮤니티와 소통해보세요.\n\n이 플랫폼에서는 게임 소개, 리뷰, 개발 일지, 팁 등 다양한 콘텐츠를 공유할 수 있습니다.',
    author: { name: 'Admin', role: 'admin', id: 'admin1' },
    likes: 24, comments: 8, date: '2025.04.28', pinned: true, gameId: null,
  },
  {
    id: 2, section: 'showcase', title: '제가 6개월 동안 만든 타워 디펜스 게임 소개합니다',
    content: '안녕하세요! 혼자서 6개월간 만든 타워 디펜스 게임을 소개합니다.\n\n총 20개 스테이지, 15종 타워, 유니크한 보스몬스터가 있습니다. 많이 플레이해주세요!',
    author: { name: 'TowerKing', role: 'active', id: 'u2' },
    likes: 87, comments: 23, date: '2025.04.27', pinned: false,
    gameId: '292439477', gameThumb: 'https://tr.rbxcdn.com/53eb9b17fe1432a809c73a13889b5006/768/432/Image/Png',
    gameName: 'Tower Defense Simulator',
  },
  {
    id: 3, section: 'qna', title: '로블록스 스튜디오에서 파트 레이캐스트 사용법 좀 알려주세요',
    content: '레이캐스트를 이용해 총알 판정을 구현하려고 하는데, 예제 코드나 튜토리얼 링크 알고 계신 분 있나요?',
    author: { name: 'NewDev99', role: 'new', id: 'u3' },
    likes: 5, comments: 12, date: '2025.04.27', pinned: false, gameId: null,
  },
  {
    id: 4, section: 'tip', title: '렉 없는 서버 스크립트 최적화 팁 모음 (실전)',
    content: '1. 반복 루프 안에서 wait() 대신 task.wait() 사용하기\n2. RemoteEvent 남용 금지\n3. 인스턴스 생성은 최소화\n4. CollectionService로 태그 관리...',
    author: { name: 'ScriptPro', role: 'pro', id: 'u4' },
    likes: 142, comments: 31, date: '2025.04.26', pinned: false, gameId: null,
  },
  {
    id: 5, section: 'general', title: '요즘 로블록스 트렌드가 레이싱 게임인가요?',
    content: '최근 인기 목록 보면 레이싱 게임이 많이 보이더라고요. 다들 어떤 장르 즐기시나요?',
    author: { name: 'RblxFan', role: 'new', id: 'u5' },
    likes: 18, comments: 44, date: '2025.04.25', pinned: false, gameId: null,
  },
  {
    id: 6, section: 'devlog', title: '[개발일지 #7] 보스 AI 패턴 구현 완료!',
    content: '드디어 보스 AI 3가지 패턴을 모두 구현했습니다.\n\n- 패턴 1: 레이저 회전 공격\n- 패턴 2: 범위 폭발\n- 패턴 3: 소환 몬스터\n\n다음 일지는 UI 디자인 개편 예정입니다.',
    author: { name: 'DevLogger', role: 'active', id: 'u6' },
    likes: 63, comments: 17, date: '2025.04.24', pinned: false, gameId: null,
  },
  {
    id: 7, section: 'recruit', title: '2인 팀 스크립터 구합니다 (모바일 RPG 개발 중)',
    content: '현재 맵 디자이너 1명, 기획 1명이 있고 스크립터 1명을 추가로 모집합니다.\n\n요구 스펙: Lua 기초 이상, Discord 소통 가능, 주 10시간 이상 투자 가능',
    author: { name: 'RPGBuilder', role: 'active', id: 'u7' },
    likes: 9, comments: 6, date: '2025.04.23', pinned: false, gameId: null,
  },
];

const SAMPLE_COMMENTS = {
  1: [
    { author: 'CoolPlayer', role: 'new',    text: '오픈 축하드립니다! 좋은 플랫폼이 될 것 같아요.',   date: '2025.04.28' },
    { author: 'Admin',      role: 'admin',  text: '감사합니다! 앞으로 더 좋은 서비스로 발전하겠습니다.', date: '2025.04.28' },
  ],
  2: [
    { author: 'GameFan',    role: 'active', text: '진짜 완성도 높네요. 플레이 해봤는데 재밌어요!',   date: '2025.04.27' },
    { author: 'NewDev99',   role: 'new',    text: '6개월 혼자 만드셨다고요? 대단하시네요.',         date: '2025.04.27' },
    { author: 'ScriptPro',  role: 'pro',    text: '코드 최적화 잘 되어 있나요? 렉은 없던데요.',      date: '2025.04.27' },
  ],
};

/* ============================
   STATE
   ============================ */
let state = {
  currentSection: 'notice',
  sortBy: 'latest',    // 'latest' | 'popular'
  lang: 'ko',
  loggedIn: false,
  currentUser: null,
  posts: JSON.parse(JSON.stringify(SAMPLE_POSTS)),
  imgFiles: [],
};

/* ============================
   i18n (한/영)
   ============================ */
const i18n = {
  ko: {
    searchPlaceholder: '게임, 게시물 검색...',
    latest: '최신순', popular: '인기순',
    login: '로그인', write: '글쓰기',
    loadMore: '더 보기',
    loginTitle: '로그인', registerTitle: '회원가입',
    pinned: '고정된 게시물',
    noPost: '아직 게시물이 없어요. 첫 번째 글을 작성해보세요!',
  },
  en: {
    searchPlaceholder: 'Search games, posts...',
    latest: 'Latest', popular: 'Popular',
    login: 'Login', write: 'Post',
    loadMore: 'Load more',
    loginTitle: 'Login', registerTitle: 'Register',
    pinned: 'Pinned Post',
    noPost: 'No posts yet. Be the first to write!',
  },
};
const t = (key) => (i18n[state.lang] || i18n.ko)[key] || key;

/* ============================
   HELPERS
   ============================ */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function avatarColor(name) {
  let h = 0;
  for (let c of name) h = (h * 31 + c.charCodeAt(0)) % 8;
  return `av-${h}`;
}

function renderBadge(role) {
  const b = BADGE_MAP[role];
  if (!b) return '';
  return `<span class="badge ${b.cls}">${b.label}</span>`;
}

function formatDate(d) { return d || '—'; }

/* ============================
   RENDER POSTS
   ============================ */
function getPostsForSection(section) {
  let posts = state.posts.filter(p => p.section === section && !p.pinned);
  if (state.sortBy === 'popular') {
    posts = [...posts].sort((a, b) => b.likes - a.likes);
  } else {
    posts = [...posts].sort((a, b) => b.id - a.id);
  }
  return posts;
}

function renderPostCard(post) {
  const initials = post.author.name.charAt(0).toUpperCase();
  const avCls = avatarColor(post.author.name);
  const hasThumb = post.gameThumb;

  const innerHtml = hasThumb ? `
    <div class="post-with-thumb">
      <img class="post-game-thumb" src="${post.gameThumb}" alt="${post.gameName}" onerror="this.style.display='none'">
      <div class="post-thumb-info">
        <h3 class="post-title">${escHtml(post.title)}</h3>
        <p class="post-preview">${escHtml(post.content.substring(0, 120))}...</p>
      </div>
    </div>` : `
    <h3 class="post-title">${escHtml(post.title)}</h3>
    <p class="post-preview">${escHtml(post.content.substring(0, 160))}...</p>`;

  return `
  <div class="post-card" data-post-id="${post.id}">
    <div class="post-card-inner">
      <div class="post-meta-top">
        <div class="post-author">
          <div class="avatar ${avCls}">${initials}</div>
          <span class="author-name">${escHtml(post.author.name)}</span>
          ${renderBadge(post.author.role)}
        </div>
        <span class="post-date">${formatDate(post.date)}</span>
      </div>
      ${innerHtml}
      <div class="post-footer">
        <span class="post-stat">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M8 2.748-.717.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 3.485L8 2.748z" stroke="currentColor" stroke-width="1.2"/></svg>
          ${post.likes}
        </span>
        <span class="post-stat">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" stroke="currentColor" stroke-width="1.2"/></svg>
          ${post.comments}
        </span>
        <span style="margin-left:auto;font-size:11px;color:var(--text-muted);font-family:'Source Code Pro',monospace;"># ${SECTIONS[post.section]?.label || post.section}</span>
      </div>
    </div>
  </div>`;
}

function renderFeed() {
  const section = state.currentSection;
  const info = SECTIONS[section] || { label: section, desc: '' };

  $('#feedTitle').innerHTML = `<span class="feed-hash">#</span> ${info.label}`;
  $('#feedDesc').textContent = info.desc;

  const posts = getPostsForSection(section);
  const listEl = $('#postsList');

  if (posts.length === 0) {
    listEl.innerHTML = `<div style="text-align:center;padding:48px 0;color:var(--text-muted);font-size:13px;">${t('noPost')}</div>`;
  } else {
    listEl.innerHTML = posts.map(renderPostCard).join('');
  }

  // Attach click handlers
  $$('#postsList .post-card').forEach(card => {
    card.addEventListener('click', () => openPostModal(parseInt(card.dataset.postId)));
  });
}

/* ============================
   POST MODAL
   ============================ */
function openPostModal(postId) {
  const post = state.posts.find(p => p.id === postId);
  if (!post) return;

  const initials = post.author.name.charAt(0).toUpperCase();
  const avCls = avatarColor(post.author.name);
  const comments = SAMPLE_COMMENTS[post.id] || [];

  const thumbHtml = post.gameThumb ? `
    <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--bg-light);border:1px solid var(--border);border-radius:var(--radius-md);margin-bottom:14px;">
      <img src="${post.gameThumb}" style="width:52px;height:52px;border-radius:6px;object-fit:cover;" onerror="this.style.display='none'">
      <div>
        <div style="font-size:13px;font-weight:700;">${escHtml(post.gameName || '')}</div>
        <div style="font-size:11px;color:var(--text-muted);font-family:'Source Code Pro',monospace;">ID: ${post.gameId}</div>
      </div>
    </div>` : '';

  const commentsHtml = comments.map(c => {
    const ci = c.author.charAt(0).toUpperCase();
    const cCls = avatarColor(c.author);
    return `
    <div class="comment-item">
      <div class="avatar ${cCls}" style="width:28px;height:28px;font-size:11px;flex-shrink:0;">${ci}</div>
      <div class="comment-body">
        <div class="comment-author">${escHtml(c.author)} ${renderBadge(c.role)} <span class="comment-date">${c.date}</span></div>
        <div class="comment-text">${escHtml(c.text)}</div>
      </div>
    </div>`;
  }).join('');

  $('#postModalContent').innerHTML = `
    <div class="post-detail-header">
      <h2 class="post-detail-title">${escHtml(post.title)}</h2>
      <div class="post-detail-meta">
        <div class="avatar ${avCls}" style="width:22px;height:22px;font-size:10px;">${initials}</div>
        <strong>${escHtml(post.author.name)}</strong>
        ${renderBadge(post.author.role)}
        <span>${formatDate(post.date)}</span>
        <span style="font-family:'Source Code Pro',monospace;font-size:11px;"># ${SECTIONS[post.section]?.label || post.section}</span>
      </div>
    </div>
    ${thumbHtml}
    <div class="post-detail-body">${escHtml(post.content)}</div>
    <div class="post-actions-row">
      <button class="like-btn" id="likeBtn" data-id="${post.id}">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2.748-.717.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 3.485L8 2.748z" stroke="currentColor" stroke-width="1.3"/></svg>
        좋아요 <span id="likeCount">${post.likes}</span>
      </button>
      <button class="report-btn">신고</button>
    </div>
    <div>
      <div class="comments-section-title">댓글 ${comments.length}개</div>
      <div id="commentsContainer">${commentsHtml}</div>
      <div class="comment-input-row">
        <input type="text" placeholder="${state.loggedIn ? '댓글을 입력하세요...' : '로그인 후 댓글을 달 수 있습니다.'}" id="commentInput" ${state.loggedIn ? '' : 'disabled'} />
        <button class="comment-submit" id="commentSubmit">등록</button>
      </div>
    </div>
  `;

  openModal('postModal');

  $('#likeBtn')?.addEventListener('click', () => {
    const p = state.posts.find(x => x.id === postId);
    if (!p) return;
    p.likes++;
    $('#likeCount').textContent = p.likes;
    $('#likeBtn').classList.add('liked');
    renderFeed();
  });

  $('#commentSubmit')?.addEventListener('click', () => {
    if (!state.loggedIn) { openModal('loginModal'); closeModal('postModal'); return; }
    const input = $('#commentInput');
    const text = input.value.trim();
    if (!text) return;
    if (!SAMPLE_COMMENTS[postId]) SAMPLE_COMMENTS[postId] = [];
    SAMPLE_COMMENTS[postId].push({
      author: state.currentUser.name,
      role: 'new',
      text,
      date: new Date().toLocaleDateString('ko-KR').replace(/\. /g, '.').replace('.', ''),
    });
    input.value = '';
    const p = state.posts.find(x => x.id === postId);
    if (p) p.comments++;
    openPostModal(postId); // re-render
  });
}

/* ============================
   MODAL HELPERS
   ============================ */
function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}

/* ============================
   SIDEBAR SECTION SELECT
   ============================ */
function initSidebar() {
  $$('.section-item').forEach(item => {
    item.addEventListener('click', () => {
      $$('.section-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      state.currentSection = item.dataset.section;
      renderFeed();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

/* ============================
   NAVBAR
   ============================ */
function initNavbar() {
  // Login
  $('#loginBtn').addEventListener('click', () => {
    if (state.loggedIn) {
      state.loggedIn = false;
      state.currentUser = null;
      updateAuthUI();
    } else {
      openModal('loginModal');
    }
  });

  // Write
  $('#writeBtn').addEventListener('click', () => {
    if (!state.loggedIn) { openModal('loginModal'); return; }
    openModal('writeModal');
  });

  // Sort
  $('#sortBtn').addEventListener('click', () => {
    state.sortBy = state.sortBy === 'latest' ? 'popular' : 'latest';
    $('#sortLabel').textContent = t(state.sortBy);
    renderFeed();
  });

  // Lang
  $('#langBtn').addEventListener('click', () => {
    state.lang = state.lang === 'ko' ? 'en' : 'ko';
    $('#langBtn').textContent = state.lang.toUpperCase();
    applyLang();
  });

  // Search
  let searchTimer;
  $('#searchInput').addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => handleSearch(e.target.value), 280);
  });
}

function handleSearch(q) {
  q = q.trim().toLowerCase();
  if (!q) { renderFeed(); return; }
  const results = state.posts.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.content.toLowerCase().includes(q) ||
    p.author.name.toLowerCase().includes(q)
  );
  const listEl = $('#postsList');
  $('#feedTitle').innerHTML = `<span class="feed-hash">#</span> 검색: ${escHtml(q)}`;
  $('#feedDesc').textContent = `${results.length}개의 결과`;
  if (results.length === 0) {
    listEl.innerHTML = `<div style="text-align:center;padding:48px 0;color:var(--text-muted);font-size:13px;">검색 결과가 없어요.</div>`;
  } else {
    listEl.innerHTML = results.map(renderPostCard).join('');
    $$('#postsList .post-card').forEach(card => {
      card.addEventListener('click', () => openPostModal(parseInt(card.dataset.postId)));
    });
  }
}

function applyLang() {
  $('#searchInput').placeholder = t('searchPlaceholder');
  $('#sortLabel').textContent = t(state.sortBy);
  if (!state.loggedIn) $('#loginBtn').textContent = t('login');
}

function updateAuthUI() {
  if (state.loggedIn) {
    const u = state.currentUser;
    const initials = u.name.charAt(0).toUpperCase();
    const avCls = avatarColor(u.name);
    $('#loginBtn').innerHTML = `<div class="avatar ${avCls}" style="width:22px;height:22px;font-size:10px;margin-right:4px;">${initials}</div>${u.name}`;
  } else {
    $('#loginBtn').innerHTML = t('login');
  }
}

/* ============================
   LOGIN MODAL
   ============================ */
function initLoginModal() {
  // Close
  $('#closeLoginModal').addEventListener('click', () => closeModal('loginModal'));
  $('#loginModal').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeModal('loginModal'); });

  // Tabs
  $$('.modal-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.modal-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      $('#formLogin').classList.toggle('hidden', tab.dataset.tab !== 'login');
      $('#formRegister').classList.toggle('hidden', tab.dataset.tab !== 'register');
    });
  });

  // Submit login (demo)
  $('#formLogin .form-submit').addEventListener('click', () => {
    const email = $('#formLogin input[type="email"]').value.trim();
    const name = email.split('@')[0] || 'User';
    if (!email) { alert('이메일을 입력해주세요.'); return; }
    state.loggedIn = true;
    state.currentUser = { name, role: 'new', email };
    closeModal('loginModal');
    updateAuthUI();
  });

  // Submit register (demo)
  $('#formRegister .form-submit').addEventListener('click', () => {
    const nick = $('#formRegister input[type="text"]').value.trim();
    const email = $('#formRegister input[type="email"]').value.trim();
    if (!nick || !email) { alert('닉네임과 이메일을 입력해주세요.'); return; }
    state.loggedIn = true;
    state.currentUser = { name: nick, role: 'new', email };
    closeModal('loginModal');
    updateAuthUI();
  });
}

/* ============================
   WRITE MODAL
   ============================ */
function initWriteModal() {
  $('#closeWriteModal').addEventListener('click', () => closeModal('writeModal'));
  $('#cancelWrite').addEventListener('click', () => closeModal('writeModal'));
  $('#writeModal').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeModal('writeModal'); });

  // Image upload
  $('#imageInput').addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    const remaining = 5 - state.imgFiles.length;
    const toAdd = files.slice(0, remaining);
    state.imgFiles = [...state.imgFiles, ...toAdd];
    renderImgPreviews();
    e.target.value = '';
  });

  // Fetch game
  $('#fetchGameBtn').addEventListener('click', fetchGameInfo);
  $('#gameIdInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') fetchGameInfo(); });

  // Submit
  $('#submitPost').addEventListener('click', submitPost);
}

function renderImgPreviews() {
  const row = $('#imgPreviewRow');
  $('#imgCount').textContent = `${state.imgFiles.length}/5`;
  row.innerHTML = state.imgFiles.map((f, i) => {
    const url = URL.createObjectURL(f);
    return `<div class="img-preview-item">
      <img src="${url}" />
      <button class="remove-img" data-index="${i}">x</button>
    </div>`;
  }).join('');
  row.querySelectorAll('.remove-img').forEach(btn => {
    btn.addEventListener('click', () => {
      state.imgFiles.splice(parseInt(btn.dataset.index), 1);
      renderImgPreviews();
    });
  });
}

function fetchGameInfo() {
  const gameId = $('#gameIdInput').value.trim();
  if (!gameId) return;
  const preview = $('#gamePreview');
  const thumb = $('#gameThumb');
  const nameEl = $('#gameNamePreview');
  const idEl = $('#gameIdPreview');

  // Demo: show placeholder (real = Roblox API proxy)
  preview.classList.remove('hidden');
  thumb.innerHTML = `<img src="https://tr.rbxcdn.com/53eb9b17fe1432a809c73a13889b5006/768/432/Image/Png" style="width:100%;height:100%;object-fit:cover;" onerror="this.parentElement.style.background='#ddd'" />`;
  nameEl.textContent = `Game ID: ${gameId}`;
  idEl.textContent = `ID: ${gameId}`;
}

function submitPost() {
  if (!state.loggedIn) { openModal('loginModal'); return; }
  const title = $('#writeTitle').value.trim();
  const content = $('#editorTextarea').value.trim();
  const section = $('#writeSectionSelect').value;

  if (!title) { alert('제목을 입력해주세요.'); return; }
  if (!content) { alert('내용을 입력해주세요.'); return; }

  const gameId = $('#gameIdInput').value.trim();
  const newPost = {
    id: state.posts.length + 1,
    section,
    title,
    content,
    author: state.currentUser,
    likes: 0,
    comments: 0,
    date: new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\. /g, '.').replace(/\.$/, ''),
    pinned: false,
    gameId: gameId || null,
  };

  state.posts.unshift(newPost);
  state.imgFiles = [];
  renderImgPreviews();
  $('#writeTitle').value = '';
  $('#editorTextarea').value = '';
  $('#gameIdInput').value = '';
  $('#gamePreview').classList.add('hidden');

  closeModal('writeModal');
  state.currentSection = section;
  $$('.section-item').forEach(i => {
    i.classList.toggle('active', i.dataset.section === section);
  });
  renderFeed();
}

/* ============================
   POST MODAL CLOSE
   ============================ */
function initPostModal() {
  $('#closePostModal').addEventListener('click', () => closeModal('postModal'));
  $('#postModal').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeModal('postModal'); });
}

/* ============================
   EDITOR HELPER
   ============================ */
function insertMd(before, after) {
  const ta = $('#editorTextarea');
  const start = ta.selectionStart;
  const end = ta.selectionEnd;
  const sel = ta.value.substring(start, end);
  const replacement = before + (sel || 'text') + after;
  ta.value = ta.value.substring(0, start) + replacement + ta.value.substring(end);
  ta.focus();
  ta.selectionStart = start + before.length;
  ta.selectionEnd = start + before.length + (sel || 'text').length;
}

/* ============================
   LOAD MORE (demo)
   ============================ */
function initLoadMore() {
  $('#loadMoreBtn').addEventListener('click', () => {
    const btn = $('#loadMoreBtn');
    btn.textContent = '불러오는 중...';
    setTimeout(() => { btn.textContent = t('loadMore'); }, 1200);
  });
}

/* ============================
   XSS ESCAPE
   ============================ */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ============================
   INIT
   ============================ */
document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initNavbar();
  initLoginModal();
  initWriteModal();
  initPostModal();
  initLoadMore();
  renderFeed();
});
