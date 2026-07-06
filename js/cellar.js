/*
 * js/cellar.js — localStorage 기반 CRUD 유틸 (내 셀러 · 시음 기록)
 * 서버 없이 브라우저에 영속. 새로고침해도 유지된다.
 * 스키마는 02_build_spec.md 3장 참조.
 */
(function () {
  var CELLAR_KEY = "wine_cellar";
  var TASTING_KEY = "wine_tastings";

  function load(key) {
    try {
      var raw = localStorage.getItem(key);
      var parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error("localStorage 읽기 실패:", key, e);
      return [];
    }
  }

  function save(key, arr) {
    try {
      localStorage.setItem(key, JSON.stringify(arr));
      return true;
    } catch (e) {
      console.error("localStorage 저장 실패:", key, e);
      return false;
    }
  }

  function makeId() {
    return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
  }

  var WineStorage = {};

  // ----- 내 셀러(wine_cellar) -----
  WineStorage.getCellar = function () {
    return load(CELLAR_KEY);
  };

  WineStorage.addCellarItem = function (item) {
    var list = load(CELLAR_KEY);
    var entry = {
      id: makeId(),
      wineName: item.wineName || "",
      type: item.type || "other",
      vintage: item.vintage || "",
      note: item.note || "",
      addedAt: new Date().toISOString()
    };
    list.push(entry);
    save(CELLAR_KEY, list);
    return entry;
  };

  WineStorage.updateCellarItem = function (id, patch) {
    var list = load(CELLAR_KEY);
    var idx = list.findIndex(function (x) { return x.id === id; });
    if (idx === -1) return null;
    list[idx] = Object.assign({}, list[idx], patch);
    save(CELLAR_KEY, list);
    return list[idx];
  };

  WineStorage.removeCellarItem = function (id) {
    var list = load(CELLAR_KEY).filter(function (x) { return x.id !== id; });
    save(CELLAR_KEY, list);
  };

  // ----- 시음 기록(wine_tastings) -----
  WineStorage.getTastings = function () {
    return load(TASTING_KEY);
  };

  WineStorage.addTasting = function (item) {
    var list = load(TASTING_KEY);
    var entry = {
      id: makeId(),
      wineName: item.wineName || "",
      rating: Number(item.rating) || 0,
      note: item.note || "",
      tastedAt: item.tastedAt || new Date().toISOString().slice(0, 10),
      reviewCardId: item.reviewCardId || null
    };
    list.push(entry);
    save(TASTING_KEY, list);
    return entry;
  };

  WineStorage.updateTasting = function (id, patch) {
    var list = load(TASTING_KEY);
    var idx = list.findIndex(function (x) { return x.id === id; });
    if (idx === -1) return null;
    list[idx] = Object.assign({}, list[idx], patch);
    save(TASTING_KEY, list);
    return list[idx];
  };

  WineStorage.removeTasting = function (id) {
    var list = load(TASTING_KEY).filter(function (x) { return x.id !== id; });
    save(TASTING_KEY, list);
  };

  // 특정 리뷰 카드(reviewCardId)에 대한 가장 최근 평점. 없으면 null.
  WineStorage.getTastingRating = function (reviewCardId) {
    if (!reviewCardId) return null;
    var list = load(TASTING_KEY).filter(function (x) { return x.reviewCardId === reviewCardId; });
    if (list.length === 0) return null;
    list.sort(function (a, b) { return new Date(b.tastedAt) - new Date(a.tastedAt); });
    return list[0].rating;
  };

  // reviews.html 별점 클릭 시 사용: 같은 reviewCardId가 있으면 rating만 갱신, 없으면 새로 추가
  WineStorage.upsertTasting = function (item) {
    var list = load(TASTING_KEY);
    var idx = list.findIndex(function (x) { return x.reviewCardId && x.reviewCardId === item.reviewCardId; });
    if (idx !== -1) {
      list[idx].rating = Number(item.rating) || 0;
      if (item.wineName) list[idx].wineName = item.wineName;
      list[idx].tastedAt = item.tastedAt || list[idx].tastedAt;
      save(TASTING_KEY, list);
      return list[idx];
    }
    var entry = {
      id: makeId(),
      wineName: item.wineName || "",
      rating: Number(item.rating) || 0,
      note: item.note || "",
      tastedAt: item.tastedAt || new Date().toISOString().slice(0, 10),
      reviewCardId: item.reviewCardId || null
    };
    list.push(entry);
    save(TASTING_KEY, list);
    return entry;
  };

  window.WineStorage = WineStorage;
})();
