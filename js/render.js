/*
 * js/render.js — 페이지별 목록·상세·필터·정렬 렌더링
 * 각 페이지 하단 인라인 스크립트에서 Render.initXxx()를 호출해 사용한다.
 * 데이터는 window.WINE_DATA(js/data.js), 사용자 데이터는 window.WineStorage(js/cellar.js).
 */
(function () {
  var U = window.WineUtil;

  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  // 텍스트 안에 품종명이 포함돼 있으면 해당 품종 id를 반환(느슨한 매칭). 없으면 null.
  function findGrapeIdByText(text) {
    if (!text || !window.WINE_DATA) return null;
    var grapes = window.WINE_DATA.grapes;
    for (var i = 0; i < grapes.length; i++) {
      var g = grapes[i];
      if (text.indexOf(g.name) !== -1) return g.id;
    }
    return null;
  }

  /* =========================================================
   * 홈 (index.html)
   * ========================================================= */
  function initHome() {
    var mount = document.getElementById("today-wine");
    if (!mount) return;
    var reviews = (window.WINE_DATA && window.WINE_DATA.reviews) || [];
    if (reviews.length === 0) {
      mount.innerHTML = '<div class="placeholder-card">준비 중입니다.</div>';
      return;
    }
    var idx = U.dayOfYearIndex(reviews.length);
    var item = reviews[idx];
    // 오늘의 와인은 grape 텍스트를 GRAPES_DATA와 느슨하게 매칭해 이미지를 재사용한다(선택 사항).
    // 매칭 실패 시(또는 image 필드 없음) 기존처럼 이미지 없이 렌더링한다.
    var matchedGrapeId = findGrapeIdByText(item.grape);
    var grapesData = (window.WINE_DATA && window.WINE_DATA.grapes) || [];
    var matchedGrape = matchedGrapeId ? grapesData.find(function (x) { return x.id === matchedGrapeId; }) : null;
    var mediaBlock = (matchedGrape && matchedGrape.image) ? U.mediaHtml(matchedGrape.image, "") : "";
    mount.innerHTML =
      '<div class="wine-card" style="max-width:480px;">' +
      mediaBlock +
      '  <div class="card-top">' +
      '    <span class="badge ' + U.typeBadgeClass(item.type) + '">' + U.typeLabel(item.type) + '</span>' +
      '    <span class="badge ' + U.priceTierBadgeClass(item.priceTier) + '">' + U.priceTierLabel(item.priceTier) + '</span>' +
      '  </div>' +
      '  <h3 class="card-title">' + U.escapeHtml(item.wineName) + '</h3>' +
      '  <p class="card-sub">' + U.escapeHtml(item.grape) + ' · ' + U.escapeHtml(item.region) + '</p>' +
      (U.priceRangeKrw(item.priceTier) ? '  <p class="card-price">💰 국내 대략 ' + U.escapeHtml(U.priceRangeKrw(item.priceTier)) + '</p>' : '') +
      '  <p class="card-desc">' + U.escapeHtml(item.description) + '</p>' +
      '  <p><a class="btn btn-small" href="pages/reviews.html#review-' + U.escapeHtml(item.id) + '">리뷰·평점 페이지에서 더 보기 →</a></p>' +
      '</div>';
  }

  /* =========================================================
   * 품종 (pages/grapes.html)
   * ========================================================= */
  function initGrapes() {
    var grid = document.getElementById("grapes-grid");
    if (!grid) return;
    var detailMount = document.getElementById("grapes-detail");
    var searchInput = document.getElementById("grapes-search");
    var tabButtons = document.querySelectorAll("#grapes-color-tabs .tab-btn");
    var data = (window.WINE_DATA && window.WINE_DATA.grapes) || [];
    var state = { color: "all", q: "" };

    function matches(g) {
      if (state.color !== "all" && g.color !== state.color) return false;
      if (state.q) {
        var q = state.q.toLowerCase();
        if (g.name.toLowerCase().indexOf(q) === -1 && g.nameEn.toLowerCase().indexOf(q) === -1) return false;
      }
      return true;
    }

    function cardHtml(g) {
      var previewHtml = g.aromas.slice(0, 3).map(function (a) {
        return U.linkifyByDictionary(a, window.WINE_DATA.aromas, "aroma", "guide.html");
      }).join(", ");
      return '' +
        '<article class="wine-card" id="grape-' + g.id + '" data-id="' + g.id + '" tabindex="0" role="button" aria-expanded="false">' +
        U.mediaHtml(g.image, U.wineGlassSvg(g.color)) +
        '  <div class="card-top">' +
        '    <span class="badge ' + U.typeBadgeClass(g.color) + '">' + (g.color === "red" ? "레드" : "화이트") + '</span>' +
        '  </div>' +
        '  <h3 class="card-title">' + U.escapeHtml(g.name) + '</h3>' +
        '  <p class="card-sub">' + U.escapeHtml(g.nameEn) + ' · ' + U.linkifyByDictionary(g.body, window.WINE_DATA.body.levels, "body", "guide.html") + '</p>' +
        '  <p class="card-desc">대표 향미: ' + previewHtml + '</p>' +
        '</article>';
    }

    function renderGrid() {
      var filtered = data.filter(matches);
      if (filtered.length === 0) {
        grid.innerHTML = '<p class="text-muted">검색 결과가 없습니다.</p>';
        return;
      }
      grid.innerHTML = filtered.map(cardHtml).join("");
      grid.querySelectorAll(".wine-card").forEach(function (card) {
        card.addEventListener("click", function () {
          showDetail(card.getAttribute("data-id"));
        });
        card.addEventListener("keypress", function (e) {
          if (e.key === "Enter") showDetail(card.getAttribute("data-id"));
        });
      });
    }

    function showDetail(id) {
      var g = data.find(function (x) { return x.id === id; });
      if (!g || !detailMount) return;
      detailMount.innerHTML =
        '<div class="detail-panel">' +
        '  <button class="close-btn" type="button" aria-label="닫기">✕</button>' +
        U.mediaHtml(g.image, U.wineGlassSvg(g.color), { detail: true }) +
        '  <span class="badge ' + U.typeBadgeClass(g.color) + '">' + (g.color === "red" ? "레드" : "화이트") + '</span>' +
        '  <h2>' + U.escapeHtml(g.name) + ' <span class="text-muted" style="font-size:1rem;">(' + U.escapeHtml(g.nameEn) + ')</span></h2>' +
        '  <p><strong>바디:</strong> ' + U.linkifyByDictionary(g.body, window.WINE_DATA.body.levels, "body", "guide.html") + '</p>' +
        '  <p>' + U.escapeHtml(g.description) + '</p>' +
        '  <p><strong>대표 향미:</strong> ' + g.aromas.map(function (a) {
          return U.linkifyByDictionary(a, window.WINE_DATA.aromas, "aroma", "guide.html");
        }).join(", ") + '</p>' +
        '  <p><strong>주요 재배 지역:</strong> ' + U.mapLinkifyRegions(g.regions) + '</p>' +
        '  <p><strong>초심자 팁:</strong> ' + U.escapeHtml(g.beginnerTip) + '</p>' +
        '  <p>' + U.extLink(U.wikiUrl(g.name), '📖 위키백과에서 보기(사진·상세)') + '</p>' +
        '  <p class="source-note">출처: ' + U.refsHtml(g) + '</p>' +
        '</div>';
      detailMount.querySelector(".close-btn").addEventListener("click", function () {
        detailMount.innerHTML = "";
      });
      detailMount.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        state.q = searchInput.value.trim();
        renderGrid();
      });
    }
    tabButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        tabButtons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        state.color = btn.getAttribute("data-color");
        renderGrid();
      });
    });

    renderGrid();

    // 조사 공백 안내
    var gapMount = document.getElementById("grapes-gap-note");
    if (gapMount && window.WINE_DATA.researchGaps) {
      gapMount.innerHTML = '<div class="placeholder-card">' + U.escapeHtml(window.WINE_DATA.researchGaps.grapes) + '</div>';
    }

    // #grape-{id} 해시로 진입 시 자동으로 상세 열기
    if (window.location.hash.indexOf("#grape-") === 0) {
      var hashId = window.location.hash.replace("#grape-", "");
      showDetail(hashId);
    }
  }

  /* =========================================================
   * 산지 (pages/regions.html)
   * ========================================================= */
  function initRegions() {
    var grid = document.getElementById("regions-grid");
    if (!grid) return;
    var detailMount = document.getElementById("regions-detail");
    var tabButtons = document.querySelectorAll("#regions-world-tabs .tab-btn");
    var data = (window.WINE_DATA && window.WINE_DATA.regions) || [];
    var state = { world: "all" };

    function matches(r) {
      return state.world === "all" || r.world === state.world;
    }

    function cardHtml(r) {
      var preview = r.grapes.slice(0, 3).join(", ");
      return '' +
        '<article class="wine-card" id="region-' + r.id + '" data-id="' + r.id + '" tabindex="0" role="button">' +
        U.mediaHtml(r.image, U.wineGlassSvg("other")) +
        '  <div class="card-top">' +
        '    <span class="badge ' + U.worldBadgeClass(r.world) + '">' + U.worldLabel(r.world) + '</span>' +
        '  </div>' +
        '  <h3 class="card-title">' + U.escapeHtml(r.name) + '</h3>' +
        '  <p class="card-sub">' + U.escapeHtml(r.nameEn) + ' · ' + U.escapeHtml(r.country) + '</p>' +
        '  <p class="card-desc">대표 품종: ' + U.escapeHtml(preview) + '</p>' +
        '</article>';
    }

    function renderGrid() {
      var filtered = data.filter(matches);
      grid.innerHTML = filtered.map(cardHtml).join("");
      grid.querySelectorAll(".wine-card").forEach(function (card) {
        card.addEventListener("click", function () { showDetail(card.getAttribute("data-id")); });
        card.addEventListener("keypress", function (e) { if (e.key === "Enter") showDetail(card.getAttribute("data-id")); });
      });
    }

    function grapesWithLinks(list) {
      return list.map(function (g) {
        var gid = findGrapeIdByText(g);
        if (gid) return '<a href="grapes.html#grape-' + gid + '">' + U.escapeHtml(g) + '</a>';
        return U.escapeHtml(g);
      }).join(", ");
    }

    // 산지별 대표 생산자 섹션(_workspace/13_producers.md 기반, 02_build_spec.md §10).
    // 상표 주의: 이름·특징(note)·출처 텍스트만 렌더링한다(로고·라벨·병 이미지 금지).
    function producersHtml(r) {
      if (!r.producers || !r.producers.length) return "";
      var noteHtml = r.producersNote
        ? '<div class="notice-box">' + U.escapeHtml(r.producersNote) + '</div>'
        : "";
      var itemsHtml = r.producers.map(function (p) {
        var srcUrl = p.sourceUrl || U.wikiUrl(p.name);
        return '' +
          '<li class="producer-item">' +
          '<strong>' + U.escapeHtml(p.name) + '</strong> <span class="producer-name-orig">(' + U.escapeHtml(p.nameOrig) + ')</span>' +
          '<p>' + U.escapeHtml(p.note) + '</p>' +
          '<p class="source-note">' + U.extLink(srcUrl, '출처: ' + p.source) + '</p>' +
          '</li>';
      }).join("");
      return '' +
        '<div class="producers-section">' +
        '  <h4>대표 생산자</h4>' +
        noteHtml +
        '  <ul class="producer-list">' + itemsHtml + '</ul>' +
        '</div>';
    }

    function showDetail(id) {
      var r = data.find(function (x) { return x.id === id; });
      if (!r || !detailMount) return;
      detailMount.innerHTML =
        '<div class="detail-panel">' +
        '  <button class="close-btn" type="button" aria-label="닫기">✕</button>' +
        U.mediaHtml(r.image, U.wineGlassSvg("other"), { detail: true }) +
        '  <span class="badge ' + U.worldBadgeClass(r.world) + '">' + U.worldLabel(r.world) + '</span>' +
        '  <h2>' + U.escapeHtml(r.name) + ' <span class="text-muted" style="font-size:1rem;">(' + U.escapeHtml(r.nameEn) + ', ' + U.escapeHtml(r.country) + ')</span></h2>' +
        '  <p><strong>기후·테루아:</strong> ' + U.escapeHtml(r.climate) + '</p>' +
        '  <p><strong>대표 와인 스타일:</strong> ' + U.escapeHtml(r.styleNote) + '</p>' +
        '  <p><strong>대표 품종:</strong> ' + grapesWithLinks(r.grapes) + '</p>' +
        '  <p>' + U.extLink(U.wikiUrl(r.name), '📖 위키백과에서 보기(사진·상세)') +
        ' · ' + U.extLink(U.mapUrl(r.nameEn, r.country), '🗺️ 지도에서 위치 보기') + '</p>' +
        producersHtml(r) +
        '  <p class="source-note">출처: ' + U.refsHtml(r) + '</p>' +
        '</div>';
      detailMount.querySelector(".close-btn").addEventListener("click", function () { detailMount.innerHTML = ""; });
      detailMount.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    tabButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        tabButtons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        state.world = btn.getAttribute("data-world");
        renderGrid();
      });
    });

    renderGrid();

    var gapMount = document.getElementById("regions-gap-note");
    if (gapMount && window.WINE_DATA.researchGaps) {
      gapMount.innerHTML = '<div class="placeholder-card">' + U.escapeHtml(window.WINE_DATA.researchGaps.regions) + '</div>';
    }

    if (window.location.hash.indexOf("#region-") === 0) {
      showDetail(window.location.hash.replace("#region-", ""));
    }
  }

  /* =========================================================
   * 시장·트렌드 (pages/market.html)
   * ========================================================= */
  function initMarket() {
    var root = document.getElementById("market-root");
    if (!root) return;
    var m = window.WINE_DATA.market;

    // 1. 글로벌 시장 규모
    var estRows = m.marketSize.global.estimates.map(function (e) {
      return '<tr><td>' + U.extLink(e.url, e.source) + '</td><td>' + U.escapeHtml(e.value2025) + '</td><td>' + U.escapeHtml(e.forecast || "—") + '</td></tr>';
    }).join("");
    var globalHtml =
      '<h2>글로벌 시장 규모(2025년 추정)</h2>' +
      '<div class="table-wrap"><table class="price-table"><thead><tr><th>기관</th><th>2025년 추정 규모</th><th>전망</th></tr></thead><tbody>' + estRows + '</tbody></table></div>' +
      '<div class="notice-box">' + U.escapeHtml(m.marketSize.global.note) + '</div>';

    // 2. 생산·소비량(2024, OIV)
    var pc = m.marketSize.productionConsumption2024;
    var statsHtml =
      '<h2>생산·소비량 현황(2024, OIV)</h2>' +
      '<div class="stat-grid">' +
      '  <div class="stat-card"><div class="stat-value">' + pc.productionMhl + ' Mhl</div><div class="stat-change">' + pc.productionChangeYoY + '</div><div class="stat-label">생산량 — ' + U.escapeHtml(pc.productionNote) + '</div></div>' +
      '  <div class="stat-card"><div class="stat-value">' + pc.consumptionMhl + ' Mhl</div><div class="stat-change">' + pc.consumptionChangeYoY + '</div><div class="stat-label">소비량 — ' + U.escapeHtml(pc.consumptionNote) + '</div></div>' +
      '  <div class="stat-card"><div class="stat-value">' + (pc.vineyardAreaHa / 10000).toFixed(0) + '만 ha</div><div class="stat-change">' + pc.vineyardAreaChangeYoY + '</div><div class="stat-label">포도밭 면적 — ' + U.escapeHtml(pc.vineyardAreaNote) + '</div></div>' +
      '  <div class="stat-card"><div class="stat-value">' + pc.exportVolumeMhl + ' Mhl</div><div class="stat-label">수출량</div></div>' +
      '</div>' +
      '<p><strong>주요 원인:</strong> ' + pc.causes.map(U.escapeHtml).join(", ") + '</p>' +
      '<p class="source-note">출처: ' + U.refsHtml(pc) + '</p>';

    // 미국 시장 참고
    var us = m.marketSize.usMarket;
    var usHtml =
      '<div class="notice-box"><strong>참고 — 미국 시장(최대 단일 시장):</strong> ' + us.year + ' 물량 ' + U.escapeHtml(us.volumeChangeYoY) + ', 금액 전망 ' + U.escapeHtml(us.valueForecast2026) + ', 시장 규모 약 ' + U.escapeHtml(us.marketValueUSD) + '.' +
      '<div class="source-note" style="border:none;margin-top:6px;padding-top:0;">' + U.refsHtml(us) + '</div></div>';

    // 3. 트렌드 6가지
    var trendsHtml = '<h2>2024~2026 소비 트렌드</h2><div class="card-grid">' + m.trends.map(function (t) {
      return '<article class="wine-card"><h3 class="card-title">' + U.escapeHtml(t.name) + '</h3>' +
        '<p class="card-desc">' + U.escapeHtml(t.description) + '</p>' +
        '<p class="card-sub">기준연도: ' + U.escapeHtml(t.year) + '</p>' +
        '<p class="source-note">출처: ' + U.refsHtml(t) + '</p></article>';
    }).join("") + '</div>';

    // 4. 가격대 표
    var priceRows = m.priceRanges.map(function (p) {
      return '<tr><td>' + U.escapeHtml(p.tierLabel) + '</td><td>' + U.escapeHtml(p.usdRange) + '</td><td>' + U.escapeHtml(p.krwRangeKorea) + '</td><td>' + p.channelsKorea.map(U.escapeHtml).join(", ") + '</td><td>' + U.escapeHtml(p.note) + '</td></tr>';
    }).join("");
    var priceHtml =
      '<h2>가격대 가이드</h2>' +
      '<div class="table-wrap"><table class="price-table"><thead><tr><th>구간</th><th>미국 달러가</th><th>한국 원화가</th><th>구매채널(한국)</th><th>특징</th></tr></thead><tbody>' + priceRows + '</tbody></table></div>' +
      '<p class="source-note">' + U.escapeHtml(m.priceRangesCaveat) + '</p>';

    // 5. 한국 시장
    var k = m.korea;
    var koreaHtml =
      '<h2>한국 시장</h2>' +
      '<h3>수입 현황(' + k.year + ')</h3>' +
      '<div class="stat-grid">' +
      '  <div class="stat-card"><div class="stat-value">' + k.importVolumeHl2025.toLocaleString() + ' hl</div><div class="stat-change">' + U.escapeHtml(k.importVolumeChangeYoY2025) + '</div><div class="stat-label">수입량</div></div>' +
      '  <div class="stat-card"><div class="stat-value">' + U.escapeHtml(k.importValueUSD2025) + '</div><div class="stat-change">' + U.escapeHtml(k.importValueChangeYoY2025) + '</div><div class="stat-label">수입액</div></div>' +
      '</div>' +
      '<div class="notice-box">' + U.escapeHtml(k.importFiguresNote) + '</div>' +

      '<h3>수입 상위국</h3>' +
      '<p>물량 기준 1위: ' + k.topCountries.byVolume2025.map(function (c) { return U.escapeHtml(c.country) + '(' + c.share + ')'; }).join(", ") +
      ' · 금액 기준 1위: ' + k.topCountries.byValue2025.map(function (c) { return U.escapeHtml(c.country) + '(' + c.share + ')'; }).join(", ") + '</p>' +
      '<p class="text-muted">' + U.escapeHtml(k.topCountries.note) + '</p>' +
      '<p class="source-note">출처: ' + U.refsHtml(k.topCountries) + '</p>' +

      '<h3>품종·유형 비중(금액 기준)</h3>' +
      '<div class="table-wrap"><table class="price-table"><thead><tr><th>연도</th><th>레드</th><th>화이트</th><th>스파클링</th></tr></thead><tbody>' +
      '<tr><td>2024</td><td>' + k.typeShare["2024"].red + '</td><td>' + k.typeShare["2024"].white + '</td><td>' + k.typeShare["2024"].sparkling + '</td></tr>' +
      '<tr><td>2025</td><td>' + k.typeShare["2025"].red + '</td><td>' + k.typeShare["2025"].white + '</td><td>' + k.typeShare["2025"].sparkling + '</td></tr>' +
      '</tbody></table></div>' +
      '<p class="text-muted">' + U.escapeHtml(k.typeShare.note) + '</p>' +
      '<p class="source-note">출처: ' + U.refsHtml(k.typeShare) + '</p>' +

      '<h3>판매 채널</h3><ul>' + k.channels.map(function (c) {
        return '<li><strong>' + U.escapeHtml(c.name) + '</strong> — ' + U.escapeHtml(c.note) + '</li>';
      }).join("") + '</ul>' +
      '<p class="source-note">출처: ' + U.refsHtml({ source: k.channelsSource, refs: k.channelsRefs }) + '</p>' +

      '<h3>관련 규제</h3><p>' + U.escapeHtml(k.regulationNote) + '</p>' +
      '<p class="source-note">출처: ' + U.refsHtml({ source: k.regulationSource, refs: k.regulationRefs }) + '</p>' +

      '<h3>최근 국내 트렌드</h3><ul class="timeline">' + k.recentTrends.map(function (t) {
        return '<li><strong>' + U.escapeHtml(t.period) + '</strong> — ' + U.escapeHtml(t.description) + ' <span class="source-note" style="border:none;padding:0;">(' + U.refsHtml(t) + ')</span></li>';
      }).join("") + '</ul>';

    // 6. 조사 공백
    var gapsHtml = '<div class="notice-box"><strong>조사 공백 안내</strong><ul style="margin:8px 0 0;padding-left:18px;">' +
      m.researchGaps.map(function (g) { return '<li>' + U.escapeHtml(g) + '</li>'; }).join("") + '</ul></div>';

    root.innerHTML = globalHtml + statsHtml + usHtml + trendsHtml + priceHtml + koreaHtml + gapsHtml;
  }

  /* =========================================================
   * 테이스팅·페어링 (pages/guide.html)
   * ========================================================= */
  function initGuide() {
    var root = document.getElementById("guide-root");
    if (!root) return;
    var g = window.WINE_DATA.guide;

    var videoHtml = '<h2>영상으로 배우기</h2>' +
      U.youtubeEmbedHtml("CrYqBP3BFPg", "Wine Tasting 101 Beginner Guide", "My Wine Diary");

    var stepsHtml = '<h2>시음 4단계</h2><div class="step-list">' + g.tasting.order.map(function (s) {
      return '<div class="step-item"><h3 style="margin-bottom:4px;">' + U.escapeHtml(s.step) + '</h3><p class="card-desc">' + U.escapeHtml(s.description) + '</p></div>';
    }).join("") + '</div>';

    var axesHtml = '<h2>테이스팅 7축</h2><div class="card-grid">' + g.tasting.axes.map(function (a) {
      return '<article class="wine-card"><h3 class="card-title">' + U.escapeHtml(a.name) + '</h3><p class="card-desc">' + U.escapeHtml(a.meaning) + '</p></article>';
    }).join("") + '</div><p class="source-note">출처: ' + U.refsHtml(g.tasting) + '</p>';

    // ===== 바디 스펙트럼(3단계) — 02_data/body.json =====
    var bodyData = window.WINE_DATA.body;
    var bodySpectrumHtml = '<h2 id="body-spectrum-section">바디 스펙트럼</h2>' +
      '<p class="section-intro">품종 페이지의 "라이트바디·미디엄바디·풀바디" 표기가 실제로 어떤 무게감을 뜻하는지 정리했다.</p>' +
      '<div class="card-grid">' + bodyData.levels.map(function (lvl) {
        return '' +
          '<article class="wine-card" id="body-' + lvl.id + '">' +
          '  <h3 class="card-title">' + U.escapeHtml(lvl.label) + '</h3>' +
          '  <p class="card-sub">' + U.escapeHtml(lvl.labelEn) + '</p>' +
          '  <p class="card-desc">' + U.escapeHtml(lvl.definition) + '</p>' +
          '  <p class="term-analogy">💬 ' + U.escapeHtml(lvl.analogy) + '</p>' +
          '  <p class="card-desc"><strong>대표 예시:</strong> ' + lvl.examples.map(function (e) { return U.escapeHtml(e); }).join(", ") + '</p>' +
          '  <span class="badge badge-outline">ABV 힌트: ' + U.escapeHtml(lvl.abvHint) + '</span>' +
          '</article>';
      }).join("") + '</div>' +
      '<div class="notice-box">' + U.escapeHtml(bodyData.intermediateNote) + '</div>' +
      '<h3>바디를 가늠하는 빠른 팁</h3>' +
      '<ol class="quick-hints">' + bodyData.quickHints.map(function (h) {
        return '<li>' + U.escapeHtml(h) + '</li>';
      }).join("") + '</ol>' +
      '<p class="source-note">출처: ' + U.refsHtml(bodyData) + '</p>';

    // ===== 향미(아로마) 사전(7그룹 36개) — 02_data/aromas.json =====
    var AROMA_GROUP_ORDER = ["black-fruit", "red-fruit", "citrus-orchard", "floral", "spice-herb", "oak", "earth-mineral"];
    var aromasData = window.WINE_DATA.aromas || [];

    function aromaCardHtml(a) {
      var grapesHtml = (a.grapes || []).map(function (gname) {
        var gid = findGrapeIdByText(gname);
        return gid ? '<a href="grapes.html#grape-' + gid + '">' + U.escapeHtml(gname) + '</a>' : U.escapeHtml(gname);
      }).join(", ");
      return '' +
        '<article class="wine-card aroma-card" id="aroma-' + a.id + '">' +
        '  <h3 class="card-title">' + U.escapeHtml(a.term) + '</h3>' +
        '  <p class="card-sub">' + U.escapeHtml(a.termEn) + '</p>' +
        '  <p class="card-desc">' + U.escapeHtml(a.definition) + '</p>' +
        '  <p class="term-analogy">💬 ' + U.escapeHtml(a.analogy) + '</p>' +
        '  <p class="card-desc"><strong>유래:</strong> ' + U.escapeHtml(a.origin) + '</p>' +
        (grapesHtml ? '  <p class="card-desc"><strong>대표 품종:</strong> ' + grapesHtml + '</p>' : '') +
        '  <p class="source-note">출처: ' + U.refsHtml(a) + '</p>' +
        '</article>';
    }

    var aromaGroupsHtml = AROMA_GROUP_ORDER.map(function (groupId) {
      var items = aromasData.filter(function (a) { return a.group === groupId; });
      if (items.length === 0) return "";
      return '<h3 class="aroma-group-title">' + U.escapeHtml(items[0].groupLabel) + '</h3>' +
        '<div class="card-grid">' + items.map(aromaCardHtml).join("") + '</div>';
    }).join("");

    var aromaDictionaryHtml = '<h2 id="aroma-dictionary-section">향미(아로마) 사전</h2>' +
      '<div class="notice-box">💡 여기 소개하는 향은 실제로 그 재료가 와인에 들어갔다는 뜻이 아니다. 포도 품종·발효·숙성 과정에서 자연적으로 생기는 화합물이 사람 코에는 익숙한 과일·꽃·향신료 냄새와 비슷하게 느껴지는 것뿐이며, 이런 "향의 연상 표현"으로 와인의 향을 설명하는 것이 업계의 관습이다.</div>' +
      aromaGroupsHtml;

    var principlesHtml = '<h2>페어링 4원칙</h2><div class="card-grid">' + g.pairing.principles.map(function (p) {
      return '<article class="wine-card"><h3 class="card-title">' + U.escapeHtml(p.name) + '</h3><p class="card-desc">' + U.escapeHtml(p.description) + '</p></article>';
    }).join("") + '</div><p class="source-note">출처: ' + U.refsHtml({ source: g.pairing.principlesSource, refs: g.pairing.principlesRefs }) + '</p>';

    var examplesHtml = '<h2>페어링 예시</h2><div class="card-grid">' + g.pairing.examples.map(function (ex) {
      var gid = findGrapeIdByText(ex.wine);
      var wineHtml = gid ? '<a href="grapes.html#grape-' + gid + '">' + U.escapeHtml(ex.wine) + '</a>' : U.escapeHtml(ex.wine);
      return '<article class="wine-card">' +
        '<h3 class="card-title">' + U.escapeHtml(ex.food) + ' × ' + wineHtml + '</h3>' +
        '<details class="expand-card"><summary>왜 어울리나?</summary><p class="card-desc" style="margin-top:6px;">' + U.escapeHtml(ex.why) + '</p>' +
        '<p class="source-note">출처: ' + U.refsHtml(ex) + '</p></details>' +
        '</article>';
    }).join("") + '</div>';

    var gaps = window.WINE_DATA.researchGaps;
    var prepHtml =
      '<h2>준비 중</h2>' +
      '<div class="card-grid">' +
      '  <div class="placeholder-card">' + U.escapeHtml(gaps.pairing) + '</div>' +
      '  <div class="placeholder-card">' + U.escapeHtml(gaps.tastingAdvanced) + '</div>' +
      '</div>';

    root.innerHTML = videoHtml + stepsHtml + axesHtml + bodySpectrumHtml + aromaDictionaryHtml + principlesHtml + examplesHtml + prepHtml;
  }

  /* =========================================================
   * 리뷰·평점 (pages/reviews.html)
   * ========================================================= */
  function initReviews() {
    var grid = document.getElementById("reviews-grid");
    if (!grid) return;
    var data = (window.WINE_DATA && window.WINE_DATA.reviews) || [];
    var state = { type: "all", priceTier: "all", q: "", sort: "name" };

    var typeSel = document.getElementById("reviews-filter-type");
    var priceSel = document.getElementById("reviews-filter-price");
    var searchInput = document.getElementById("reviews-search");
    var sortSel = document.getElementById("reviews-sort");

    var TIER_ORDER = { daily: 0, mid: 1, premium: 2 };

    function matches(item) {
      if (state.type !== "all" && item.type !== state.type) return false;
      if (state.priceTier !== "all" && item.priceTier !== state.priceTier) return false;
      if (state.q) {
        var q = state.q.toLowerCase();
        var hay = (item.grape + " " + item.region + " " + item.wineName).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    }

    function sortList(list) {
      var copy = list.slice();
      if (state.sort === "name") {
        copy.sort(function (a, b) { return a.wineName.localeCompare(b.wineName, "ko"); });
      } else if (state.sort === "price") {
        copy.sort(function (a, b) { return TIER_ORDER[a.priceTier] - TIER_ORDER[b.priceTier]; });
      } else if (state.sort === "myrating") {
        copy.sort(function (a, b) {
          var ra = window.WineStorage.getTastingRating(a.id) || 0;
          var rb = window.WineStorage.getTastingRating(b.id) || 0;
          if (rb !== ra) return rb - ra;
          return a.wineName.localeCompare(b.wineName, "ko");
        });
      }
      return copy;
    }

    function starInputHtml(itemId, rating) {
      var buttons = "";
      for (var n = 1; n <= 5; n++) {
        buttons += '<button type="button" class="star-btn' + (n <= rating ? " filled" : "") + '" data-rating="' + n + '" aria-label="' + n + '점 주기">★</button>';
      }
      return '<div class="stars-input" data-item-id="' + itemId + '" role="group" aria-label="내 평점">' + buttons + '</div>';
    }

    function cardHtml(item) {
      var myRating = window.WineStorage.getTastingRating(item.id) || 0;
      return '' +
        '<article class="wine-card" id="review-' + item.id + '">' +
        '  <div class="card-media">' + U.wineGlassSvg(item.type) + '</div>' +
        '  <div class="card-top">' +
        '    <span class="badge ' + U.typeBadgeClass(item.type) + '">' + U.typeLabel(item.type) + '</span>' +
        '    <span class="badge ' + U.priceTierBadgeClass(item.priceTier) + '">' + U.priceTierLabel(item.priceTier) + '</span>' +
        '  </div>' +
        '  <h3 class="card-title">' + U.escapeHtml(item.wineName) + '</h3>' +
        '  <p class="card-sub">' + U.escapeHtml(item.grape) + ' · ' + U.escapeHtml(item.region) + '</p>' +
        (U.priceRangeKrw(item.priceTier) ? '  <p class="card-price">💰 국내 대략 ' + U.escapeHtml(U.priceRangeKrw(item.priceTier)) + '</p>' : '') +
        '  <p class="card-desc">' + U.escapeHtml(item.description) + '</p>' +
        '  <div>' + starInputHtml(item.id, myRating) + ' <span class="text-muted" style="font-size:0.8rem;">내 평점</span></div>' +
        '  <details class="expand-card"><summary>왜 이 스타일인가</summary>' +
        '    <p style="margin-top:6px;"><strong>페어링 힌트:</strong> ' + U.escapeHtml(item.pairingHint) + '</p>' +
        '    <p class="source-note">출처: ' + U.refsHtml(item) + '</p>' +
        '  </details>' +
        '</article>';
    }

    function render() {
      var list = sortList(data.filter(matches));
      if (list.length === 0) {
        grid.innerHTML = '<p class="text-muted">조건에 맞는 와인 스타일이 없습니다.</p>';
        return;
      }
      grid.innerHTML = list.map(cardHtml).join("");
      grid.querySelectorAll(".stars-input").forEach(function (starsEl) {
        var itemId = starsEl.getAttribute("data-item-id");
        var item = data.find(function (x) { return x.id === itemId; });
        starsEl.querySelectorAll(".star-btn").forEach(function (btn) {
          btn.addEventListener("click", function () {
            var rating = Number(btn.getAttribute("data-rating"));
            window.WineStorage.upsertTasting({
              wineName: item.wineName,
              rating: rating,
              reviewCardId: item.id,
              tastedAt: new Date().toISOString().slice(0, 10)
            });
            render();
          });
        });
      });
    }

    if (typeSel) typeSel.addEventListener("change", function () { state.type = typeSel.value; render(); });
    if (priceSel) priceSel.addEventListener("change", function () { state.priceTier = priceSel.value; render(); });
    if (searchInput) searchInput.addEventListener("input", function () { state.q = searchInput.value.trim(); render(); });
    if (sortSel) sortSel.addEventListener("change", function () { state.sort = sortSel.value; render(); });

    render();
  }

  /* =========================================================
   * 용어 사전 (pages/glossary.html)
   * ========================================================= */
  function initGlossary() {
    var grid = document.getElementById("glossary-grid");
    if (!grid) return;
    var searchInput = document.getElementById("glossary-search");
    var tabButtons = document.querySelectorAll("#glossary-cat-tabs .tab-btn");
    var data = (window.WINE_DATA && window.WINE_DATA.glossary) || [];
    var state = { category: "all", q: "" };

    function matches(t) {
      if (state.category !== "all" && t.category !== state.category) return false;
      if (state.q) {
        var q = state.q.toLowerCase();
        var hay = (t.term + " " + t.termEn).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    }

    function cardHtml(t) {
      return '' +
        '<article class="wine-card">' +
        '  <div class="card-top">' +
        '    <span class="badge ' + U.glossaryCategoryBadgeClass(t.category) + '">' + U.escapeHtml(t.category) + '</span>' +
        '  </div>' +
        '  <h3 class="card-title">' + U.escapeHtml(t.term) + ' <span class="term-en">(' + U.escapeHtml(t.termEn) + ')</span></h3>' +
        '  <p class="term-block"><strong>정의</strong> — ' + U.escapeHtml(t.definition) + '</p>' +
        '  <p class="term-block"><strong>비유</strong> — ' + U.escapeHtml(t.analogy) + '</p>' +
        '  <p class="term-block"><strong>실전 팁</strong> — ' + U.escapeHtml(t.tip) + '</p>' +
        (t.relatedGuideAnchor ? '<p><a href="guide.html#' + t.relatedGuideAnchor + '">→ 테이스팅·페어링 페이지에서 자세히 보기</a></p>' : '') +
        '  <p class="source-note">출처: ' + U.escapeHtml(t.source) + '</p>' +
        '</article>';
    }

    function render() {
      var filtered = data.filter(matches);
      if (filtered.length === 0) {
        grid.innerHTML = '<p class="text-muted">검색 결과가 없습니다.</p>';
        return;
      }
      grid.innerHTML = filtered.map(cardHtml).join("");
    }

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        state.q = searchInput.value.trim();
        render();
      });
    }
    tabButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        tabButtons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        state.category = btn.getAttribute("data-category");
        render();
      });
    });

    render();
  }

  /* =========================================================
   * 라벨 읽는 법 (pages/labels.html)
   * ========================================================= */

  // 가상의 샘플 라벨 SVG(구세계/신세계). 실제 브랜드가 아니며, 부위별 위치를 보여주기 위한 예시.
  // 번호 1~8은 L.anatomy 배열의 순서(생산자/원산지/품종/빈티지/등급/ABV/용량/병입정보)와 일치한다.
  function labelSvgMarkup(world) {
    var isOld = world === "old";
    var titleTxt = isOld
      ? "구세계 샘플 라벨 예시 — Château 예시, Bordeaux, France"
      : "신세계 샘플 라벨 예시 — 예시 Estate, Cabernet Sauvignon, Napa Valley";
    var descTxt = isOld
      ? "지역명 BORDEAUX가 가장 크게 적힌 구세계 스타일 가상 라벨. 번호 1~8은 각 부위를 가리킨다."
      : "품종명 CABERNET SAUVIGNON이 가장 크게 적힌 신세계 스타일 가상 라벨. 번호 1~8은 각 부위를 가리킨다.";

    var producer = isOld ? "CHÂTEAU 예시" : "예시 ESTATE";
    var regionMain = isOld ? "BORDEAUX" : "NAPA VALLEY";
    var regionSize = isOld ? 34 : 20;
    var regionWeight = isOld ? 700 : 600;
    var subLine = isOld ? "FRANCE" : "";
    var varietalMain = isOld ? "Cabernet Sauvignon · Merlot" : "CABERNET SAUVIGNON";
    var varietalSize = isOld ? 13 : 26;
    var varietalWeight = isOld ? 400 : 700;
    var gradeText = isOld ? "Appellation Bordeaux Contrôlée" : "Reserve";
    var vintageText = isOld ? "2019" : "2021";
    var abvText = isOld ? "13.5% Vol." : "14.5% Alc/Vol";
    var volumeText = isOld ? "750 ml" : "750 mL";
    var bottlerText = isOld ? "Mis en bouteille au Château" : "Estate Bottled";

    // 번호(anatomy 인덱스) → 뱃지·설명선 y좌표
    var yProducer = 95, yRegion = 195, yVarietal = 258, yVintage = 48,
      yGrade = 320, yAbv = 438, yVolume = 468, yBottler = 500;
    var callouts = [
      { n: 1, y: yProducer },
      { n: 2, y: yRegion },
      { n: 3, y: yVarietal },
      { n: 4, y: yVintage },
      { n: 5, y: yGrade },
      { n: 6, y: yAbv },
      { n: 7, y: yVolume },
      { n: 8, y: yBottler }
    ];
    var badgesSvg = callouts.map(function (c) {
      return '' +
        '<line class="label-svg-leader" x1="280" y1="' + c.y + '" x2="336" y2="' + c.y + '"/>' +
        '<g class="label-svg-badge">' +
        '  <circle cx="352" cy="' + c.y + '" r="13"/>' +
        '  <text x="352" y="' + c.y + '" dy=".35em">' + c.n + '</text>' +
        '</g>';
    }).join("");

    return '' +
      '<svg class="label-illustration" viewBox="0 0 420 560" role="img" aria-labelledby="lbl-' + world + '-title lbl-' + world + '-desc">' +
      '  <title id="lbl-' + world + '-title">' + titleTxt + '</title>' +
      '  <desc id="lbl-' + world + '-desc">' + descTxt + '</desc>' +
      '  <rect class="label-svg-box" x="20" y="20" width="260" height="500" rx="4"/>' +
      '  <text class="label-svg-vintage" x="255" y="' + (yVintage + 4) + '">' + U.escapeHtml(vintageText) + '</text>' +
      '  <text class="label-svg-producer" x="150" y="' + (yProducer + 6) + '">' + U.escapeHtml(producer) + '</text>' +
      '  <text x="150" y="' + (yRegion + 8) + '" style="font-size:' + regionSize + 'px;font-weight:' + regionWeight + ';font-family:var(--font-serif);fill:var(--color-burgundy-dark);text-anchor:middle;">' + U.escapeHtml(regionMain) + '</text>' +
      (subLine ? '<text class="label-svg-sub" x="150" y="' + (yRegion + 30) + '">' + U.escapeHtml(subLine) + '</text>' : '') +
      '  <text x="150" y="' + (yVarietal + 4) + '" style="font-size:' + varietalSize + 'px;font-weight:' + varietalWeight + ';font-family:var(--font-sans);fill:var(--color-charcoal);text-anchor:middle;">' + U.escapeHtml(varietalMain) + '</text>' +
      '  <text class="label-svg-grade" x="150" y="' + (yGrade + 4) + '">' + U.escapeHtml(gradeText) + '</text>' +
      '  <text class="label-svg-fine" x="150" y="' + (yAbv + 4) + '">' + U.escapeHtml(abvText) + '</text>' +
      '  <text class="label-svg-fine" x="150" y="' + (yVolume + 4) + '">' + U.escapeHtml(volumeText) + '</text>' +
      '  <text class="label-svg-fine" x="150" y="' + (yBottler + 4) + '">' + U.escapeHtml(bottlerText) + '</text>' +
      badgesSvg +
      '</svg>';
  }

  function initLabels() {
    var root = document.getElementById("labels-root");
    if (!root) return;
    var L = window.WINE_DATA.labels;
    if (!L) {
      root.innerHTML = '<div class="placeholder-card">준비 중입니다.</div>';
      return;
    }

    // 1. 샘플 라벨 SVG 비교(가상 라벨) + 번호별 범례
    var legendHtml = '<ol class="label-legend">' + L.anatomy.map(function (a, i) {
      return '<li><span class="legend-num">' + (i + 1) + '</span><span><strong>' + U.escapeHtml(a.part) + '</strong> — ' + U.escapeHtml(a.meaning) + '</span></li>';
    }).join("") + '</ol>';

    var anatomyHtml = '<h2>샘플 라벨로 보는 부위별 위치</h2>' +
      '<p class="section-intro">아래 두 라벨은 실제 브랜드가 아닌, 이해를 돕기 위해 만든 가상의 예시다. 같은 번호는 같은 부위를 가리키며, 구세계·신세계에서 무엇이 크게 적히는지 비교해보자.</p>' +
      '<div class="label-compare">' +
      '  <figure class="label-sample">' + labelSvgMarkup("old") + '<figcaption class="label-sample-caption">구세계 예시 — 지역명(BORDEAUX)이 가장 크다</figcaption></figure>' +
      '  <figure class="label-sample">' + labelSvgMarkup("new") + '<figcaption class="label-sample-caption">신세계 예시 — 품종명(CABERNET SAUVIGNON)이 가장 크다</figcaption></figure>' +
      '</div>' +
      legendHtml;

    // 2. 영상으로 배우기(검증된 실재 영상)
    var videoHtml = '<h2>영상으로 배우기</h2>' +
      U.youtubeEmbedHtml("1DSTNnSDNfE", "How To Read a Wine Label", "Wine Folly");

    // 3. 구세계 vs 신세계
    var ov = L.oldVsNew;
    function worldCardHtml(label, w) {
      return '' +
        '<article class="wine-card">' +
        '  <h3 class="card-title">' + U.escapeHtml(label) + '</h3>' +
        '  <p class="card-sub">' + w.regions.map(U.escapeHtml).join(", ") + '</p>' +
        '  <p class="card-desc"><strong>라벨 표기 방식:</strong> ' + U.escapeHtml(w.labelFocus) + '</p>' +
        '  <p class="card-desc"><strong>이유:</strong> ' + U.escapeHtml(w.why) + '</p>' +
        '  <p class="card-desc"><strong>예시:</strong> ' + U.escapeHtml(w.example) + '</p>' +
        '</article>';
    }
    var oldVsNewHtml = '<h2>구세계 vs 신세계 — 읽는 법이 다르다</h2>' +
      '<div class="card-grid grid-2">' + worldCardHtml("구세계", ov.old) + worldCardHtml("신세계", ov.new) + '</div>' +
      '<div class="rule-box"><strong>초보자 실전 규칙</strong><br>' + U.escapeHtml(ov.beginnerRule) + '</div>';

    // 4. 국가별 등급 표기표
    var gradingsHtml = '<h2>등급 표기표</h2>' + L.gradings.map(function (g) {
      var rows = g.terms.map(function (t) {
        return '<tr><td>' + U.escapeHtml(t.label) + '</td><td>' + U.escapeHtml(t.meaning) + '</td></tr>';
      }).join("");
      return '' +
        '<h3>' + U.escapeHtml(g.country) + ' — ' + U.escapeHtml(g.system) + '</h3>' +
        '<div class="table-wrap"><table class="price-table"><thead><tr><th>표기</th><th>초보자에게 주는 의미</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
        '<p class="text-muted">' + U.escapeHtml(g.note) + '</p>' +
        '<p class="source-note">출처: ' + U.escapeHtml(g.source) + '</p>';
    }).join("");

    // 5. 실전 팁
    var tipsHtml = '<h2>실전 라벨 읽기 팁</h2><div class="step-list">' + L.readingTips.map(function (tip) {
      return '<div class="step-item"><p class="card-desc" style="margin:0;">' + U.escapeHtml(tip) + '</p></div>';
    }).join("") + '</div>' +
      '<p class="source-note">출처: ' + U.escapeHtml(L.source) + '</p>';

    root.innerHTML = anatomyHtml + videoHtml + oldVsNewHtml + gradingsHtml + tipsHtml;
  }

  /* =========================================================
   * 내 셀러 (pages/cellar.html) — js/cellar.js의 WineStorage 사용
   * ========================================================= */
  function initCellar() {
    var cellarForm = document.getElementById("cellar-form");
    var cellarList = document.getElementById("cellar-list");
    var tastingForm = document.getElementById("tasting-form");
    var tastingList = document.getElementById("tasting-list");
    if (!cellarForm && !tastingForm) return;

    function renderCellar() {
      var items = window.WineStorage.getCellar();
      if (items.length === 0) {
        cellarList.innerHTML = '<div class="empty-state">아직 등록된 와인이 없어요. <a href="reviews.html">리뷰·평점 페이지</a>를 둘러보거나 위 폼으로 직접 추가해보세요.</div>';
        return;
      }
      cellarList.innerHTML = items.slice().reverse().map(function (it) {
        return '' +
          '<article class="wine-card" data-id="' + it.id + '">' +
          '  <div class="card-top">' +
          '    <span class="badge ' + U.typeBadgeClass(it.type) + '">' + U.typeLabel(it.type) + '</span>' +
          (it.vintage ? '<span class="badge badge-outline">' + U.escapeHtml(it.vintage) + '</span>' : '') +
          '  </div>' +
          '  <h3 class="card-title">' + U.escapeHtml(it.wineName) + '</h3>' +
          (it.note ? '<p class="card-desc">' + U.escapeHtml(it.note) + '</p>' : '') +
          '  <p class="card-sub">등록일: ' + U.formatDate(it.addedAt) + '</p>' +
          '  <div class="card-actions">' +
          '    <button type="button" class="btn btn-small cellar-remove-btn">삭제</button>' +
          '  </div>' +
          '</article>';
      }).join("");
      cellarList.querySelectorAll(".cellar-remove-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var card = btn.closest(".wine-card");
          if (confirm("이 셀러 항목을 삭제할까요?")) {
            window.WineStorage.removeCellarItem(card.getAttribute("data-id"));
            renderCellar();
          }
        });
      });
    }

    function renderTastings() {
      var items = window.WineStorage.getTastings();
      if (items.length === 0) {
        tastingList.innerHTML = '<div class="empty-state">아직 등록된 시음 기록이 없어요. <a href="reviews.html">리뷰·평점 페이지</a>를 둘러보거나 위 폼으로 직접 추가해보세요.</div>';
        return;
      }
      var sorted = items.slice().sort(function (a, b) { return new Date(b.tastedAt) - new Date(a.tastedAt); });
      tastingList.innerHTML = '<ul class="timeline">' + sorted.map(function (it) {
        var linkLabel = it.reviewCardId
          ? ' <a href="reviews.html#review-' + U.escapeHtml(it.reviewCardId) + '" style="font-size:0.78rem;">(리뷰·평점 페이지에서 매긴 평가 →)</a>'
          : '';
        return '' +
          '<li data-id="' + it.id + '">' +
          '  <strong>' + U.escapeHtml(it.wineName) + '</strong> ' + U.starHtml(it.rating) + linkLabel +
          '  <div class="card-sub">' + U.formatDate(it.tastedAt) + (it.note ? ' · ' + U.escapeHtml(it.note) : '') + '</div>' +
          '  <button type="button" class="btn btn-small tasting-remove-btn" style="margin-top:4px;">삭제</button>' +
          '</li>';
      }).join("") + '</ul>';
      tastingList.querySelectorAll(".tasting-remove-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var li = btn.closest("li");
          if (confirm("이 시음 기록을 삭제할까요?")) {
            window.WineStorage.removeTasting(li.getAttribute("data-id"));
            renderTastings();
          }
        });
      });
    }

    if (cellarForm) {
      cellarForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var fd = new FormData(cellarForm);
        var wineName = (fd.get("wineName") || "").toString().trim();
        if (!wineName) { alert("와인명을 입력해주세요."); return; }
        window.WineStorage.addCellarItem({
          wineName: wineName,
          type: fd.get("type"),
          vintage: (fd.get("vintage") || "").toString().trim(),
          note: (fd.get("note") || "").toString().trim()
        });
        cellarForm.reset();
        renderCellar();
      });
    }

    if (tastingForm) {
      tastingForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var fd = new FormData(tastingForm);
        var wineName = (fd.get("wineName") || "").toString().trim();
        if (!wineName) { alert("와인명을 입력해주세요."); return; }
        window.WineStorage.addTasting({
          wineName: wineName,
          rating: Number(fd.get("rating")) || 0,
          note: (fd.get("note") || "").toString().trim(),
          tastedAt: fd.get("tastedAt") || new Date().toISOString().slice(0, 10)
        });
        tastingForm.reset();
        var dateInput = tastingForm.querySelector('input[name="tastedAt"]');
        if (dateInput) dateInput.value = new Date().toISOString().slice(0, 10);
        setTastingFormRating(0);
        renderTastings();
      });
    }

    // 시음 기록 폼의 별점 입력(클릭형)
    var tastingRatingMount = document.getElementById("tasting-form-rating");
    var tastingRatingValue = 0;
    function setTastingFormRating(n) {
      tastingRatingValue = n;
      if (!tastingRatingMount) return;
      tastingRatingMount.querySelectorAll(".star-btn").forEach(function (btn) {
        var r = Number(btn.getAttribute("data-rating"));
        btn.classList.toggle("filled", r <= n);
      });
      var hidden = tastingForm.querySelector('input[name="rating"]');
      if (hidden) hidden.value = n;
    }
    if (tastingRatingMount) {
      var buttons = "";
      for (var n = 1; n <= 5; n++) {
        buttons += '<button type="button" class="star-btn" data-rating="' + n + '" aria-label="' + n + '점">★</button>';
      }
      tastingRatingMount.innerHTML = buttons;
      tastingRatingMount.querySelectorAll(".star-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          setTastingFormRating(Number(btn.getAttribute("data-rating")));
        });
      });
    }

    // 날짜 필드 기본값: 오늘
    var dateField = tastingForm && tastingForm.querySelector('input[name="tastedAt"]');
    if (dateField && !dateField.value) dateField.value = new Date().toISOString().slice(0, 10);

    renderCellar();
    renderTastings();
  }

  window.Render = {
    initHome: initHome,
    initGrapes: initGrapes,
    initRegions: initRegions,
    initMarket: initMarket,
    initGuide: initGuide,
    initGlossary: initGlossary,
    initLabels: initLabels,
    initReviews: initReviews,
    initCellar: initCellar
  };
})();
