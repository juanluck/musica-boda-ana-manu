(() => {
  const cfg = window.WEDDING_MUSIC_CONFIG;

  document.getElementById('couple').textContent = cfg.couple;
  document.getElementById('date').textContent = cfg.date;
  document.getElementById('time').textContent = cfg.time;
  document.getElementById('church').textContent = cfg.church;
  document.getElementById('place').textContent = cfg.place;

  const quartet = document.getElementById('quartet');
  quartet.href = cfg.quartet.url;
  quartet.textContent = cfg.quartet.name;

  const footerQuartet = document.getElementById('footerQuartet');
  footerQuartet.href = cfg.quartet.url;
  footerQuartet.textContent = cfg.quartet.name;

  const program = document.getElementById('timeline');

  cfg.pieces.forEach((piece, index) => {
    const article = document.createElement('article');
    article.className = `piece piece--${index % 2 === 0 ? 'odd' : 'even'}`;

    const note = cfg.showDescriptions
      ? `<p class="piece-note">${piece.note}</p>`
      : '';

    const thumb = `https://i.ytimg.com/vi/${encodeURIComponent(piece.videoId)}/hqdefault.jpg`;

    article.innerHTML = `
      <div class="piece-copy">
        <p class="piece-moment">${piece.moment}</p>
        <h3>${piece.title}</h3>
        <p class="piece-author">${piece.author}</p>
        ${note}
        <a class="youtube-link" href="${piece.youtube}" target="_blank" rel="noopener noreferrer">Abrir en YouTube ↗</a>
      </div>
      <div class="video-shell">
        <button class="video-poster" type="button" aria-label="Reproducir ${piece.title}" data-id="${piece.videoId}" data-start="${piece.start || ''}" style="--thumb:url('${thumb}')">
          <span class="play-button" aria-hidden="true">▶</span>
          <span class="video-caption">Reproducir</span>
        </button>
      </div>
    `;

    program.appendChild(article);
  });

  program.addEventListener('click', (event) => {
    const button = event.target.closest('.video-poster');
    if (!button) return;

    const id = button.dataset.id;
    const start = button.dataset.start ? `&start=${button.dataset.start}` : '';
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0${start}`;
    iframe.title = button.getAttribute('aria-label').replace('Reproducir ', 'Vídeo: ');
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.loading = 'lazy';
    iframe.allowFullscreen = true;
    button.replaceWith(iframe);
  });
})();
