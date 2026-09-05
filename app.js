// 기본 게임 데이터 목록
const initialGames = [
  {
    title: "은찬이의 장애물 피하기",
    thumb: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300",
    url: "games/game1.html"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const gameListContainer = document.getElementById("game-list");
  const adminToggleBtn = document.getElementById("admin-toggle-btn");
  const adminPanel = document.getElementById("admin-panel");
  const gameForm = document.getElementById("game-form");

  // 로컬스토리지에서 게임 불러오기
  function getGames() {
    const saved = localStorage.getItem("eunchan_games");
    return saved ? JSON.parse(saved) : initialGames;
  }

  // 화면에 게임 리스트 출력
  function renderGames() {
    const games = getGames();
    gameListContainer.innerHTML = games.map(game => `
      <a href="${game.url}" class="game-card">
        <img src="${game.thumb}" alt="${game.title}" class="game-thumb" onerror="this.src='https://via.placeholder.com/70'">
        <div class="game-info">
          <div class="game-title">${game.title}</div>
          <div class="play-btn">지금 플레이하기 ▶</div>
        </div>
      </a>
    `).join('');
  }

  // 관리자 패널 토글
  adminToggleBtn.addEventListener("click", () => {
    adminPanel.classList.toggle("hidden");
  });

  // 새 게임 추가 이벤트
  gameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("game-title").value;
    const thumb = document.getElementById("game-thumb").value;
    const url = document.getElementById("game-url").value;

    const games = getGames();
    games.unshift({ title, thumb, url }); // 최신 게임이 맨 위로
    localStorage.setItem("eunchan_games", JSON.stringify(games));

    renderGames();
    gameForm.reset();
    adminPanel.classList.add("hidden");
  });

  renderGames();
});