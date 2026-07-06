/*
 * js/common.js — 전 페이지 공통 헤더/네비/푸터 주입 + 공통 유틸리티
 * 각 HTML 페이지는 <body> 시작 부분에 <div id="site-header"></div>,
 * 끝 부분에 <div id="site-footer"></div> 를 두고, 이 스크립트 로드 전에
 * window.SITE_ROOT ("" 또는 "../")를 설정해야 한다.
 */
(function () {
  var ROOT = typeof window.SITE_ROOT === "string" ? window.SITE_ROOT : "";

  var NAV_ITEMS = [
    { href: "index.html", label: "홈", file: "index.html" },
    { href: "pages/grapes.html", label: "품종", file: "grapes.html" },
    { href: "pages/regions.html", label: "산지", file: "regions.html" },
    { href: "pages/market.html", label: "시장·트렌드", file: "market.html" },
    { href: "pages/guide.html", label: "테이스팅·페어링", file: "guide.html" },
    { href: "pages/glossary.html", label: "용어 사전", file: "glossary.html" },
    { href: "pages/labels.html", label: "라벨 읽는 법", file: "labels.html" },
    { href: "pages/reviews.html", label: "리뷰·평점", file: "reviews.html" },
    { href: "pages/cellar.html", label: "내 셀러", file: "cellar.html" }
  ];

  function currentFile() {
    var path = window.location.pathname.replace(/\\/g, "/");
    var last = path.split("/").pop();
    return last === "" ? "index.html" : last;
  }

  function resolveHref(href) {
    // href는 site/ 루트 기준 경로. ROOT("" 또는 "../")를 붙여 실제 경로로 변환.
    // pages/*.html 안에서 다른 pages/*.html로 갈 때는 파일명만 사용.
    if (ROOT === "" ) return href; // index.html에서: "pages/grapes.html" 그대로
    // pages/*.html 안에서: "pages/grapes.html" -> "grapes.html", "index.html" -> "../index.html"
    if (href.indexOf("pages/") === 0) return href.replace("pages/", "");
    return ROOT + href;
  }

  function renderHeader() {
    var mount = document.getElementById("site-header");
    if (!mount) return;
    var cur = currentFile();
    var links = NAV_ITEMS.map(function (item) {
      var isCurrent = item.file === cur;
      return '<a href="' + resolveHref(item.href) + '"' +
        (isCurrent ? ' aria-current="page"' : '') + '>' + item.label + '</a>';
    }).join("");

    mount.innerHTML =
      '<header class="site-header">' +
      '  <div class="container">' +
      '    <a class="brand" href="' + resolveHref("index.html") + '">🍷 와인 포털</a>' +
      '    <button class="nav-toggle" type="button" aria-label="메뉴 열기" aria-expanded="false">☰ 메뉴</button>' +
      '    <nav class="main-nav" aria-label="주요 메뉴">' + links + '</nav>' +
      '  </div>' +
      '</header>';

    var toggle = mount.querySelector(".nav-toggle");
    var nav = mount.querySelector(".main-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
  }

  function renderFooter() {
    var mount = document.getElementById("site-footer");
    if (!mount) return;
    mount.innerHTML =
      '<footer class="site-footer">' +
      '  <div class="container">' +
      '    <p style="margin:0 0 6px;">콘텐츠는 웹 공개 자료를 조사해 정리했으며 각 페이지에 출처를 표기합니다.</p>' +
      '    <p style="margin:0;">내 셀러·시음 기록은 이 브라우저(기기)에만 저장됩니다. &copy; 와인 포털</p>' +
      '  </div>' +
      '</footer>';
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderHeader();
    renderFooter();
  });

  // ===== 공통 유틸 =====
  var WineUtil = {};

  WineUtil.escapeHtml = function (str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  // 별점 표시(읽기 전용). rating이 없으면 "아직 평가 없음"에 준하는 빈 별.
  WineUtil.starHtml = function (rating) {
    var r = Math.round(Number(rating) || 0);
    var full = "★".repeat(Math.max(0, Math.min(5, r)));
    var empty = "☆".repeat(5 - Math.max(0, Math.min(5, r)));
    return '<span class="stars" aria-label="' + r + '점">' + full + empty + '</span>';
  };

  WineUtil.priceTierLabel = function (tier) {
    var map = { daily: "데일리", mid: "미들", premium: "프리미엄" };
    return map[tier] || tier || "미상";
  };

  WineUtil.typeLabel = function (type) {
    var map = { red: "레드", white: "화이트", other: "기타" };
    return map[type] || type || "미상";
  };

  WineUtil.typeBadgeClass = function (type) {
    var map = { red: "badge-red", white: "badge-white" };
    return map[type] || "badge-other";
  };

  // 가격대(tier)에 대응하는 국내 대략 가격범위(₩). market.priceRanges에서 조회.
  WineUtil.priceRangeKrw = function (tier) {
    var ranges = (window.WINE_DATA && window.WINE_DATA.market && window.WINE_DATA.market.priceRanges) || [];
    for (var i = 0; i < ranges.length; i++) {
      if (ranges[i].tier === tier) {
        // 카드 표시용으로 핵심 범위만 간결하게(부연 설명·괄호 제거).
        return String(ranges[i].krwRangeKorea || "").split("(")[0].split(",")[0].trim();
      }
    }
    return "";
  };

  WineUtil.priceTierBadgeClass = function (tier) {
    var map = { daily: "badge-daily", mid: "badge-mid", premium: "badge-premium" };
    return map[tier] || "badge-outline";
  };

  WineUtil.glossaryCategoryBadgeClass = function (category) {
    var map = {
      "맛·감각": "badge-cat-taste",
      "양조·스타일": "badge-cat-style",
      "원산지·등급": "badge-cat-origin",
      "서빙·실전": "badge-cat-serving"
    };
    return map[category] || "badge-outline";
  };

  WineUtil.worldLabel = function (world) {
    return world === "old" ? "구세계" : world === "new" ? "신세계" : "미상";
  };

  WineUtil.worldBadgeClass = function (world) {
    return world === "old" ? "badge-old" : world === "new" ? "badge-new" : "badge-outline";
  };

  // 오늘 날짜 기준 결정적 인덱스(day-of-year % length)
  WineUtil.dayOfYearIndex = function (length) {
    if (!length) return 0;
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var dayOfYear = Math.floor(diff / oneDay);
    return dayOfYear % length;
  };

  WineUtil.formatDate = function (isoOrDateStr) {
    if (!isoOrDateStr) return "";
    var d = new Date(isoOrDateStr);
    if (isNaN(d.getTime())) return String(isoOrDateStr).slice(0, 10);
    return d.getFullYear() + "." + String(d.getMonth() + 1).padStart(2, "0") + "." + String(d.getDate()).padStart(2, "0");
  };

  // 와인 타입별 잔 일러스트(인라인 SVG). grapes.color, reviews.type에서 재사용.
  // 외부 이미지 없이 SVG로 직접 그려 file://에서도, 저작권 걱정 없이 동작한다.
  WineUtil.wineGlassSvg = function (type, opts) {
    opts = opts || {};
    var size = opts.size || 44;
    var fills = {
      red: "#6b1f3a",
      white: "#ecdfa0",
      sparkling: "#e9c866",
      rose: "#e8a3b4",
      other: "#cfcac0"
    };
    var labels = {
      red: "레드 와인 잔",
      white: "화이트 와인 잔",
      sparkling: "스파클링 와인 잔",
      rose: "로제 와인 잔",
      other: "와인 잔"
    };
    var fill = fills[type] || fills.other;
    var label = labels[type] || labels.other;
    var bubbles = type === "sparkling"
      ? '<circle cx="19" cy="19" r="1.1" fill="#fffbe8" opacity="0.85"/>' +
        '<circle cx="25" cy="15" r="0.9" fill="#fffbe8" opacity="0.75"/>' +
        '<circle cx="22" cy="24" r="0.8" fill="#fffbe8" opacity="0.75"/>'
      : "";
    var height = Math.round(size * 64 / 44);
    return '' +
      '<svg class="wine-glass-icon" viewBox="0 0 44 64" width="' + size + '" height="' + height + '" role="img" aria-label="' + label + '">' +
      '  <title>' + label + '</title>' +
      '  <path d="M10 4 C10 20 14 28 22 30 C30 28 34 20 34 4 Z" fill="none" stroke="#8a3556" stroke-width="1.5"/>' +
      '  <path d="M11.5 16 C12.5 24 16 28.5 22 29.5 C28 28.5 31.5 24 32.5 16 C29 19 25 20.5 22 20.5 C19 20.5 15 19 11.5 16 Z" fill="' + fill + '"/>' +
      bubbles +
      '  <line x1="22" y1="30" x2="22" y2="52" stroke="#8a3556" stroke-width="1.5"/>' +
      '  <ellipse cx="22" cy="56" rx="10" ry="2.6" fill="none" stroke="#8a3556" stroke-width="1.5"/>' +
      '</svg>';
  };

  // ===== 외부 링크 헬퍼(출처 클릭·위키백과·지도) =====
  // url이 있으면 새 탭 링크, 없으면 label을 텍스트로만 반환(깨진 링크 금지).
  WineUtil.extLink = function (url, label) {
    var safeLabel = WineUtil.escapeHtml(label);
    if (!url) return safeLabel;
    return '<a href="' + WineUtil.escapeHtml(url) + '" target="_blank" rel="noopener noreferrer" class="ext-link">' + safeLabel + ' ↗</a>';
  };

  // 이름 기반 한국어 위키백과 링크. 검색-바로가기 엔드포인트를 써서
  // 표제어가 정확히 일치하면 문서로 자동 이동하고, 아니면 검색 결과(썸네일 포함)를
  // 보여준다. 병기명("시라 / 쉬라즈")·괄호는 앞부분만 사용해 404를 방지한다.
  WineUtil.wikiUrl = function (name) {
    var q = String(name).split("/")[0].split("(")[0].trim();
    return "https://ko.wikipedia.org/w/index.php?search=" + encodeURIComponent(q);
  };

  // 이름 기반 구글 지도 검색 링크(임베드 아님 — 새 탭 링크만).
  WineUtil.mapUrl = function (nameEn, country) {
    var q = (nameEn || "") + " wine region " + (country || "");
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q.trim());
  };

  // 출처 표기를 클릭 가능한 링크로 렌더링한다.
  // item.refs([{label,url}])가 있으면 각각 링크로, item.sourceUrl이 있으면 item.source를 그 링크로,
  // 둘 다 없으면 item.source를 텍스트만(링크 없음) 반환한다.
  WineUtil.refsHtml = function (item) {
    if (!item) return "";
    if (Array.isArray(item.refs) && item.refs.length > 0) {
      return item.refs.map(function (r) {
        return WineUtil.extLink(r.url, r.label);
      }).join(", ");
    }
    if (item.sourceUrl) {
      return WineUtil.extLink(item.sourceUrl, item.source || item.sourceUrl);
    }
    return WineUtil.escapeHtml(item.source || "");
  };

  // 유튜브 임베드(반응형 16:9) — 검증된 videoId만 호출부에서 사용해야 한다.
  WineUtil.youtubeEmbedHtml = function (videoId, title, channel) {
    var watchUrl = "https://www.youtube.com/watch?v=" + videoId;
    var safeTitle = WineUtil.escapeHtml(title);
    return '' +
      '<div class="video-embed">' +
      '  <div class="video-embed-frame">' +
      '    <iframe src="https://www.youtube-nocookie.com/embed/' + videoId + '" title="' + safeTitle + '" loading="lazy" allowfullscreen></iframe>' +
      '  </div>' +
      '  <p class="video-embed-caption">' + safeTitle + ' · ' + WineUtil.escapeHtml(channel) + '<br>' +
      '    영상 재생에는 인터넷 연결이 필요합니다. 재생되지 않으면 ' +
      '    <a href="' + watchUrl + '" target="_blank" rel="noopener">유튜브에서 바로 보기 →</a>' +
      '  </p>' +
      '</div>';
  };

  // ===== 향(아로마)·바디 용어 링크화 =====
  // text(원본 문자열) 안에서 dictEntries[].matches[]에 등록된 표현을 찾아
  // guide.html의 사전 항목(#aroma-{id} / #body-{id})으로 가는 <a> 링크로 감싼다.
  // 가장 긴 매칭을 우선하는 greedy longest-match, 좌→우 스캔 알고리즘.
  // 매칭 실패 구간은 escapeHtml만 적용된 일반 텍스트로 남는다(구두점·수식어 등).
  WineUtil.linkifyByDictionary = function (text, dictEntries, anchorPrefix, hrefBase) {
    if (!text) return "";
    var str = String(text);
    var candidates = [];
    (dictEntries || []).forEach(function (entry) {
      (entry.matches || []).forEach(function (m) {
        if (m) candidates.push({ text: m, id: entry.id });
      });
    });
    // 긴 매칭 우선(내림차순 정렬) — "블랙체리"가 "체리"로 쪼개지지 않도록.
    candidates.sort(function (a, b) { return b.text.length - a.text.length; });

    var out = "";
    var plainBuf = "";
    var pos = 0;

    function flushPlain() {
      if (plainBuf) {
        out += WineUtil.escapeHtml(plainBuf);
        plainBuf = "";
      }
    }

    while (pos < str.length) {
      var found = null;
      for (var i = 0; i < candidates.length; i++) {
        if (str.startsWith(candidates[i].text, pos)) {
          found = candidates[i];
          break;
        }
      }
      if (found) {
        flushPlain();
        out += '<a class="term-link" href="' + hrefBase + '#' + anchorPrefix + '-' + found.id + '">' +
          WineUtil.escapeHtml(found.text) + '</a>';
        pos += found.text.length;
      } else {
        plainBuf += str[pos];
        pos += 1;
      }
    }
    flushPlain();
    return out;
  };

  // ===== 품종·산지 이미지 경로 & 크레딧(법적 표기) =====
  // image.src는 site/ 루트 기준 상대경로(예: "images/grapes/xxx.jpg")로 저장돼 있다.
  // pages/ 아래(grapes.html, regions.html 등)에서는 "../" 접두가 필요하고,
  // site/index.html(루트)에서는 접두 없이 그대로 사용한다.
  WineUtil._inPagesDir = function () {
    return window.location.pathname.replace(/\\/g, "/").indexOf("/pages/") !== -1;
  };

  WineUtil.imgSrc = function (path) {
    if (!path) return path;
    return WineUtil._inPagesDir() ? "../" + path : path;
  };

  // 크레딧 캡션: 📷 저작자 · 라이선스 · 출처 — 저작권 표기 의무이므로 항상 렌더링한다(숨김 금지).
  // compact:true면 카드 썸네일용 축약 캡션("📷 출처" 링크만)을 반환한다.
  WineUtil.imageCreditHtml = function (credit, opts) {
    if (!credit) return "";
    opts = opts || {};
    var sourcePart = credit.sourceUrl
      ? '<a href="' + WineUtil.escapeHtml(credit.sourceUrl) + '" target="_blank" rel="noopener noreferrer">출처</a>'
      : "출처";
    if (opts.compact) {
      return '<p class="image-credit image-credit-compact">📷 ' + sourcePart + '</p>';
    }
    var licensePart = credit.licenseUrl
      ? '<a href="' + WineUtil.escapeHtml(credit.licenseUrl) + '" target="_blank" rel="noopener noreferrer">' + WineUtil.escapeHtml(credit.license) + '</a>'
      : WineUtil.escapeHtml(credit.license || "");
    return '<p class="image-credit">📷 ' + WineUtil.escapeHtml(credit.author || "") + ' · ' + licensePart + ' · ' + sourcePart + '</p>';
  };

  // 품종·산지 카드/상세 공통: image가 있으면 사진+크레딧, 없으면 기존 SVG 폴백(양자택일).
  // opts.detail=true면 상세 패널용(큰 이미지 + 전체 캡션), 기본은 카드 그리드용(썸네일 + 축약 캡션).
  WineUtil.mediaHtml = function (image, fallbackSvgHtml, opts) {
    opts = opts || {};
    if (image && image.src) {
      var sizeClass = opts.detail ? "card-photo-detail" : "card-photo";
      return '' +
        '<div class="' + sizeClass + '-wrap">' +
        '  <img class="' + sizeClass + '" src="' + WineUtil.escapeHtml(WineUtil.imgSrc(image.src)) + '" alt="' + WineUtil.escapeHtml(image.alt || "") + '" loading="lazy">' +
        '</div>' +
        WineUtil.imageCreditHtml(image.credit, opts.detail ? {} : { compact: true });
    }
    return '<div class="card-media">' + fallbackSvgHtml + '</div>';
  };

  window.WineUtil = WineUtil;
})();
