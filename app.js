document.addEventListener("DOMContentLoaded", () => {
  const gameListContainer = document.getElementById("game-list");

  // data.json 파일 읽어오기
  async function loadGames() {
    try {
      // 캐시 방지를 위해 타임스탬프 추가
      const response = await fetch(`data.json?t=${new Date().getTime()}`);
      if (!response.ok) throw new Error('네트워크 응답 실패');
      const games = await response.json();
      renderGames(games);
    } catch (error) {
      console.error("게임을 불러오는 데 실패했습니다:", error);
      gameListContainer.innerHTML = "<p style='color:#94a3b8; text-align:center;'>게임을 불러올 수 없습니다.</p>";
    }
  }

  // 화면에 게임 리스트 렌더링
  function renderGames(games) {
    if (!games || games.length === 0) {
      gameListContainer.innerHTML = "<p style='color:#94a3b8; text-align:center;'>등록된 게임이 없습니다.</p>";
      return;
    }

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

  loadGames();
});
