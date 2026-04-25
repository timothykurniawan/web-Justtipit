/**
 * Justtip.it — shop / search results (UI only, mock data)
 */
(function () {
  const CATEGORY_LABELS = {
    skincare: "Skincare",
    makeup: "Makeup",
    snacks: "Snacks & food",
    cute: "Toys / Plushies",
    clothes: "Clothes",
  };

  const REGION_LABELS = {
    "imp-us": "🇺🇸 US",
    "imp-uk": "🇬🇧 UK",
    "imp-cn": "🇨🇳 China",
    "imp-jp": "🇯🇵 Japan",
    "imp-kr": "🇰🇷 Korea",
    "imp-au": "🇦🇺 Australia / NZ",
  };

  /** One region per product (matches filter `data-route`). */
  const MOCK_PRODUCTS = [
    { id: 1, name: "CeraVe Moisturizing Cream 340g", category: "skincare", region: "imp-us", priceUsd: 12.5, image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400&q=80", verified: true, extra: "popular", popularity: 98, createdAt: "2024-10-12" },
    { id: 2, name: "The Ordinary Niacinamide 10% + Zinc", category: "skincare", region: "imp-uk", priceUsd: 6.2, image: "https://images.unsplash.com/photo-1629198688008-7fc1e28c4333?w=400&q=80", verified: true, extra: "new", popularity: 92, createdAt: "2025-01-04" },
    { id: 3, name: "Laneige Water Sleeping Mask 70ml", category: "skincare", region: "imp-kr", priceUsd: 18, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4e521?w=400&q=80", verified: true, extra: null, popularity: 88, createdAt: "2024-11-20" },
    { id: 4, name: "Kiehl's Ultra Facial Cream 50ml", category: "skincare", region: "imp-us", priceUsd: 32, image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&q=80", verified: true, extra: "popular", popularity: 90, createdAt: "2024-09-01" },
    { id: 5, name: "Into You Shero Lip Mud 🇨🇳", category: "makeup", region: "imp-cn", priceUsd: 9.5, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80", verified: true, extra: "new", popularity: 76, createdAt: "2025-01-15" },
    { id: 6, name: "Fenty Beauty Gloss Bomb", category: "makeup", region: "imp-us", priceUsd: 22, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&q=80", verified: true, extra: "popular", popularity: 94, createdAt: "2024-12-10" },
    { id: 7, name: "Wardah Instaperfect Lip Cream", category: "makeup", region: "imp-cn", priceUsd: 4.2, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80", verified: true, extra: null, popularity: 72, createdAt: "2024-08-22" },
    { id: 8, name: "Indomie Goreng big box 🌏", category: "snacks", region: "imp-cn", priceUsd: 7.5, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80", verified: true, extra: "popular", popularity: 99, createdAt: "2024-07-11" },
    { id: 9, name: "Chitato + Garuda nuts set", category: "snacks", region: "imp-cn", priceUsd: 5.1, image: "https://images.unsplash.com/photo-1481391032119-d89fee407e44?w=400&q=80", verified: true, extra: null, popularity: 84, createdAt: "2024-10-30" },
    { id: 10, name: "Japan Pocky & KitKat Assortment", category: "snacks", region: "imp-jp", priceUsd: 11, image: "https://images.unsplash.com/photo-1514516345957-556ca7b32e58?w=400&q=80", verified: true, extra: "new", popularity: 87, createdAt: "2024-12-22" },
    { id: 11, name: "Beng Beng Maxx box 🌏", category: "snacks", region: "imp-cn", priceUsd: 3.5, image: "https://images.unsplash.com/photo-1606312619070-09c01c665d6e?w=400&q=80", verified: false, extra: null, popularity: 65, createdAt: "2024-06-15" },
    { id: 12, name: "Jellycat Bashful Bunny Medium (UK)", category: "cute", region: "imp-uk", priceUsd: 28, image: "https://images.unsplash.com/photo-1530610476181-d83430b00fdf?w=400&q=80", verified: true, extra: "popular", popularity: 91, createdAt: "2024-11-05" },
    { id: 13, name: "BT21 Plush Keychain (KR)", category: "cute", region: "imp-kr", priceUsd: 8.8, image: "https://images.unsplash.com/photo-1559190394-df5a28aab5c5?w=400&q=80", verified: true, extra: "new", popularity: 80, createdAt: "2025-01-08" },
    { id: 14, name: "Sanrio Cinnamoroll Pouch (JP)", category: "cute", region: "imp-jp", priceUsd: 14, image: "https://images.unsplash.com/photo-1566576912321-58a6e64c52e5?w=400&q=80", verified: true, extra: null, popularity: 78, createdAt: "2024-09-19" },
    { id: 15, name: "Smiski Glow (JP blind box)", category: "cute", region: "imp-jp", priceUsd: 10.5, image: "https://images.unsplash.com/photo-1515488042361-ee00e0d45a10?w=400&q=80", verified: true, extra: "popular", popularity: 83, createdAt: "2024-12-01" },
    { id: 16, name: "Y.O.U. Radiance Face Wash", category: "skincare", region: "imp-cn", priceUsd: 3.2, image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400&q=80", verified: true, extra: "popular", popularity: 86, createdAt: "2024-10-18" },
    { id: 17, name: "Somethinc Hylapot", category: "skincare", region: "imp-cn", priceUsd: 6, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80", verified: true, extra: "new", popularity: 79, createdAt: "2025-01-02" },
    { id: 18, name: "Rollover Reaction Cushion", category: "makeup", region: "imp-cn", priceUsd: 9.2, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80", verified: true, extra: null, popularity: 74, createdAt: "2024-11-28" },
    { id: 19, name: "Rilakkuma Plush S (JP)", category: "cute", region: "imp-jp", priceUsd: 15, image: "https://images.unsplash.com/photo-1530610476181-d83430b00fdf?w=400&q=80", verified: true, extra: "popular", popularity: 77, createdAt: "2024-08-30" },
    { id: 20, name: "DHC Deep Cleansing Oil 200ml (JP)", category: "skincare", region: "imp-jp", priceUsd: 11, image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&q=80", verified: true, extra: "popular", popularity: 89, createdAt: "2024-10-01" },
    { id: 21, name: "Cosrx Snail 96 Essence 100ml (KR)", category: "skincare", region: "imp-kr", priceUsd: 13, image: "https://images.unsplash.com/photo-1611930022073-7de4907f7f0d?w=400&q=80", verified: true, extra: "new", popularity: 96, createdAt: "2024-12-12" },
    { id: 22, name: "Elmer's Slime + Stickers (US) bundle", category: "cute", region: "imp-us", priceUsd: 7.2, image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80", verified: false, extra: null, popularity: 58, createdAt: "2024-12-20" },
    { id: 23, name: "Emina Lip Cushion", category: "makeup", region: "imp-cn", priceUsd: 2.4, image: "https://images.unsplash.com/photo-1522338256747-0e32d0f6e7d5?w=400&q=80", verified: true, extra: "popular", popularity: 81, createdAt: "2024-10-10" },
    { id: 24, name: "Kopiko + Torabika coffee mix 🇮🇩☕", category: "snacks", region: "imp-au", priceUsd: 2.1, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80", verified: true, extra: "popular", popularity: 95, createdAt: "2024-10-20" },
    { id: 25, name: "Uniqlo AIRism Tee (JP)", category: "clothes", region: "imp-jp", priceUsd: 14, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80", verified: true, extra: "new", popularity: 82, createdAt: "2025-02-01" },
    { id: 26, name: "Baseball Varsity Jacket (KR)", category: "clothes", region: "imp-kr", priceUsd: 29, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80", verified: true, extra: null, popularity: 75, createdAt: "2025-01-18" },
    { id: 27, name: "Casual Linen Shirt (CN)", category: "clothes", region: "imp-cn", priceUsd: 18, image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&q=80", verified: true, extra: "popular", popularity: 85, createdAt: "2025-02-08" },
  ];

  const state = {
    categories: new Set(),
    priceBand: "all",
    verified: false,
    routes: new Set(),
    searchQuery: "",
    sort: "popular",
  };

  const grid = document.getElementById("shop-grid");
  const resultCount = document.getElementById("shop-result-count");
  const empty = document.getElementById("shop-empty");
  const pageTitle = document.getElementById("shop-page-title");
  const topSearch = document.getElementById("shop-top-search");
  const sortSelect = document.getElementById("shop-sort");
  const searchForm = document.getElementById("shop-search-form");
  const backdrop = document.getElementById("shop-backdrop");
  const drawer = document.getElementById("shop-drawer");
  const openFilterBtn = document.getElementById("shop-open-filters");
  const closeFilterBtn = document.getElementById("shop-close-filters");
  const applyFilterBtn = document.getElementById("shop-apply-filters");

  function formatPrice(n) {
    return "$" + n.toFixed(2);
  }

  function matchesPrice(USD) {
    if (state.priceBand === "all") return true;
    if (state.priceBand === "lt10") return USD < 10;
    if (state.priceBand === "10-30") return USD >= 10 && USD <= 30;
    if (state.priceBand === "gt30") return USD > 30;
    return true;
  }

  function matchesSearch(p) {
    const q = state.searchQuery.trim().toLowerCase();
    if (!q) return true;
    if (p.name.toLowerCase().includes(q)) return true;
    if (CATEGORY_LABELS[p.category] && CATEGORY_LABELS[p.category].toLowerCase().includes(q)) return true;
    if (p.category.toLowerCase().includes(q)) return true;
    const rLabel = (REGION_LABELS[p.region] || "").toLowerCase();
    if (rLabel && rLabel.includes(q)) return true;
    return false;
  }

  function filterProducts(list) {
    return list.filter((p) => {
      if (state.categories.size > 0 && !state.categories.has(p.category)) return false;
      if (!matchesPrice(p.priceUsd)) return false;
      if (state.verified && !p.verified) return false;
      if (state.routes.size > 0 && !state.routes.has(p.region)) return false;
      if (!matchesSearch(p)) return false;
      return true;
    });
  }

  function sortProducts(list) {
    const out = list.slice();
    if (state.sort === "popular") {
      out.sort((a, b) => b.popularity - a.popularity);
    } else if (state.sort === "newest") {
      out.sort((a, b) => (b.createdAt > a.createdAt ? 1 : b.createdAt < a.createdAt ? -1 : 0));
    } else if (state.sort === "price-asc") {
      out.sort((a, b) => a.priceUsd - b.priceUsd);
    } else if (state.sort === "price-desc") {
      out.sort((a, b) => b.priceUsd - a.priceUsd);
    }
    return out;
  }

  function waUrl(text) {
    return (
      "https://api.whatsapp.com/send?phone=6282111101329&text=" + encodeURIComponent("Hi! I want: " + text)
    );
  }

  function render() {
    if (!grid) return;
    const filtered = sortProducts(filterProducts(MOCK_PRODUCTS));
    grid.classList.add("shop-grid--transition");
    grid.innerHTML = "";
    if (resultCount) {
      const n = filtered.length;
      resultCount.innerHTML = "Showing <strong>" + n + "</strong> " + (n === 1 ? "product" : "products");
    }
    if (empty) empty.hidden = filtered.length > 0;
    if (filtered.length === 0) {
      setTimeout(function () { grid.classList.remove("shop-grid--transition"); }, 250);
      return;
    }
    const frag = document.createDocumentFragment();
    filtered.forEach((p) => {
      const art = document.createElement("article");
      art.className = "shop-card";
      art.setAttribute("role", "listitem");
      const badges = [];
      if (p.verified) badges.push('<span class="shop-badge shop-badge--verified">Verified</span>');
      if (p.extra === "popular") badges.push('<span class="shop-badge shop-badge--popular">Popular</span>');
      if (p.extra === "new") badges.push('<span class="shop-badge shop-badge--new">New</span>');
      art.innerHTML = [
        '<div class="shop-card__media">',
        '  ' + (badges.length ? '<div class="shop-card__badges">' + badges.join("") + "</div>" : ""),
        '  <img src="' + p.image + '" alt="" loading="lazy" width="200" height="200" />',
        "</div>",
        '<div class="shop-card__body">',
        "  <h3 class=\"shop-card__name\">" + escapeHtml(p.name) + "</h3>",
        "  <p class=\"shop-card__region\">" + escapeHtml(REGION_LABELS[p.region] || p.region) + "</p>",
        "  <p class=\"shop-card__price\">" + formatPrice(p.priceUsd) + "</p>",
        "  <p class=\"shop-card__meta\">" + escapeHtml(CATEGORY_LABELS[p.category] || p.category) + "</p>",
        "</div>",
        '<a class="shop-card__btn" href="' + waUrl(p.name) + '" target="_blank" rel="noreferrer">Order</a>',
      ].join("");
      frag.appendChild(art);
    });
    grid.appendChild(frag);
    requestAnimationFrame(function () {
      grid.classList.remove("shop-grid--transition");
    });
  }

  function escapeHtml(s) {
    const d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function readDesktopIntoState() {
    const allCatD = document.getElementById("filter-cat-all-d");
    if (allCatD && allCatD.checked) {
      state.categories.clear();
    } else {
      state.categories.clear();
      document.querySelectorAll(".shop-filters--desktop .js-filter-cat:checked").forEach(function (el) {
        state.categories.add(el.dataset.cat);
      });
    }
    if (allCatD && !allCatD.checked && state.categories.size === 0) {
      allCatD.checked = true;
    }
    const priceD = document.querySelector('.shop-filters--desktop input[name="price_d"]:checked');
    state.priceBand = priceD ? priceD.value : "all";
    const tvd = document.getElementById("toggle-ver-d");
    state.verified = tvd && tvd.getAttribute("aria-pressed") === "true";
    const allRegD = document.getElementById("filter-region-all-d");
    if (allRegD && allRegD.checked) {
      state.routes.clear();
    } else {
      state.routes.clear();
      document.querySelectorAll(".shop-filters--desktop .js-filter-route:checked").forEach(function (el) {
        state.routes.add(el.dataset.route);
      });
    }
    if (allRegD && !allRegD.checked && state.routes.size === 0) {
      allRegD.checked = true;
    }
  }

  function readMobileIntoState() {
    const allCatM = document.getElementById("filter-cat-all-m");
    if (allCatM && allCatM.checked) {
      state.categories.clear();
    } else {
      state.categories.clear();
      document.querySelectorAll(".js-filter-cat-m:checked").forEach(function (el) {
        state.categories.add(el.dataset.cat);
      });
    }
    if (allCatM && !allCatM.checked && state.categories.size === 0) {
      allCatM.checked = true;
    }
    const pr = document.querySelector('.shop-filters--drawer input[name="price_m"]:checked');
    state.priceBand = pr ? pr.value : "all";
    const tvm = document.getElementById("toggle-ver-m");
    state.verified = tvm && tvm.getAttribute("aria-pressed") === "true";
    const allRegM = document.getElementById("filter-region-all-m");
    if (allRegM && allRegM.checked) {
      state.routes.clear();
    } else {
      state.routes.clear();
      document.querySelectorAll(".js-filter-route-m:checked").forEach(function (el) {
        state.routes.add(el.dataset.route);
      });
    }
    if (allRegM && !allRegM.checked && state.routes.size === 0) {
      allRegM.checked = true;
    }
  }

  function writeStateToDom(isMobile) {
    if (isMobile) {
      const allCM = document.getElementById("filter-cat-all-m");
      if (allCM) {
        allCM.checked = state.categories.size === 0;
      }
      document.querySelectorAll(".js-filter-cat-m").forEach(function (el) {
        el.checked = state.categories.size > 0 && state.categories.has(el.dataset.cat);
      });
      document.querySelectorAll('.shop-filters--drawer input[name="price_m"]').forEach(function (el) {
        el.checked = el.value === state.priceBand;
      });
      setToggle("#toggle-ver-m", state.verified);
      const allRM = document.getElementById("filter-region-all-m");
      if (allRM) {
        allRM.checked = state.routes.size === 0;
      }
      document.querySelectorAll(".js-filter-route-m").forEach(function (el) {
        el.checked = state.routes.size > 0 && state.routes.has(el.dataset.route);
      });
    } else {
      const allCD = document.getElementById("filter-cat-all-d");
      if (allCD) {
        allCD.checked = state.categories.size === 0;
      }
      document.querySelectorAll(".shop-filters--desktop .js-filter-cat").forEach(function (el) {
        el.checked = state.categories.size > 0 && state.categories.has(el.dataset.cat);
      });
      document.querySelectorAll('.shop-filters--desktop input[name="price_d"]').forEach(function (el) {
        el.checked = el.value === state.priceBand;
      });
      setToggle("#toggle-ver-d", state.verified);
      const allRD = document.getElementById("filter-region-all-d");
      if (allRD) {
        allRD.checked = state.routes.size === 0;
      }
      document.querySelectorAll(".shop-filters--desktop .js-filter-route").forEach(function (el) {
        el.checked = state.routes.size > 0 && state.routes.has(el.dataset.route);
      });
    }
  }

  function syncMobileFromDesktop() {
    writeStateToDom(true);
  }

  function syncDesktopFromMobile() {
    writeStateToDom(false);
  }

  function setToggle(selector, on) {
    const el = document.querySelector(selector);
    if (el) {
      el.setAttribute("aria-pressed", on ? "true" : "false");
    }
  }

  function setPageTitle() {
    if (!pageTitle) return;
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    const cat = params.get("cat");
    if (q) {
      pageTitle.innerHTML = 'Search results for <em>“' + escapeHtml(q) + '”</em>';
    } else if (cat) {
      if (CATEGORY_LABELS[cat]) {
        pageTitle.textContent = "Shop · " + CATEGORY_LABELS[cat];
      } else {
        pageTitle.textContent = "Browse all products";
      }
    } else {
      pageTitle.textContent = "Browse all products";
    }
  }

  function initFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    const cat = params.get("cat");
    if (q && topSearch) {
      topSearch.value = q;
      state.searchQuery = q;
    }
    if (cat) {
      if (CATEGORY_LABELS[cat]) {
        state.categories = new Set([cat]);
      }
    }
  }

  function openDrawer() {
    readDesktopIntoState();
    if (sortSelect) state.sort = sortSelect.value;
    writeStateToDom(true);
    if (drawer) drawer.classList.add("is-open");
    if (backdrop) {
      backdrop.classList.add("is-open");
      backdrop.setAttribute("aria-hidden", "false");
    }
    if (drawer) drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("shop-no-scroll");
    if (openFilterBtn) {
      const bar = openFilterBtn.closest(".shop-mobile-filters");
      if (bar) bar.setAttribute("aria-hidden", "true");
    }
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove("is-open");
    if (backdrop) {
      backdrop.classList.remove("is-open");
      backdrop.setAttribute("aria-hidden", "true");
    }
    if (drawer) drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("shop-no-scroll");
    if (openFilterBtn) {
      const bar = openFilterBtn.closest(".shop-mobile-filters");
      if (bar) bar.setAttribute("aria-hidden", "false");
    }
  }

  function onApplyMobile() {
    readMobileIntoState();
    syncDesktopFromMobile();
    state.sort = sortSelect ? sortSelect.value : "popular";
    render();
    closeDrawer();
  }

  // Toggle: desktop applies immediately; mobile only updates the paired control until Apply
  document.querySelectorAll(".js-toggle-ver").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const on = btn.getAttribute("aria-pressed") !== "true";
      if (btn.id === "toggle-ver-d") {
        setToggle("#toggle-ver-d", on);
        setToggle("#toggle-ver-m", on);
        readDesktopIntoState();
        if (sortSelect) state.sort = sortSelect.value;
        render();
      } else {
        setToggle("#toggle-ver-m", on);
        setToggle("#toggle-ver-d", on);
      }
    });
  });

  if (searchForm && topSearch) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const next = new URLSearchParams();
      if (topSearch.value.trim()) next.set("q", topSearch.value.trim());
      const current = new URLSearchParams(window.location.search);
      const cat = current.get("cat");
      if (cat) next.set("cat", cat);
      const qs = next.toString();
      const base = "shop.html";
      window.location.href = qs ? base + "?" + qs : base;
    });
  }

  if (openFilterBtn) openFilterBtn.addEventListener("click", openDrawer);
  if (closeFilterBtn) closeFilterBtn.addEventListener("click", closeDrawer);
  if (applyFilterBtn) applyFilterBtn.addEventListener("click", onApplyMobile);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  const filterDesktop = document.querySelector(".shop-filters--desktop");
  if (filterDesktop) {
    filterDesktop.addEventListener("change", function (e) {
      const t = e.target;
      if (t && t.id === "filter-cat-all-d" && t.checked) {
        document.querySelectorAll(".shop-filters--desktop .js-filter-cat").forEach(function (c) {
          c.checked = false;
        });
      } else if (t && t.classList && t.classList.contains("js-filter-cat") && t.checked) {
        const a = document.getElementById("filter-cat-all-d");
        if (a) a.checked = false;
      } else if (t && t.id === "filter-region-all-d" && t.checked) {
        document.querySelectorAll(".shop-filters--desktop .js-filter-route").forEach(function (c) {
          c.checked = false;
        });
      } else if (t && t.classList && t.classList.contains("js-filter-route") && t.checked) {
        const a = document.getElementById("filter-region-all-d");
        if (a) a.checked = false;
      }
      readDesktopIntoState();
      if (sortSelect) state.sort = sortSelect.value;
      render();
    });
  }

  const filterDrawer = document.getElementById("filter-drawer-inner");
  if (filterDrawer) {
    filterDrawer.addEventListener("change", function (e) {
      const t = e.target;
      if (t && t.id === "filter-cat-all-m" && t.checked) {
        document.querySelectorAll(".js-filter-cat-m").forEach(function (c) {
          c.checked = false;
        });
      } else if (t && t.classList && t.classList.contains("js-filter-cat-m") && t.checked) {
        const a = document.getElementById("filter-cat-all-m");
        if (a) a.checked = false;
      } else if (t && t.id === "filter-region-all-m" && t.checked) {
        document.querySelectorAll(".js-filter-route-m").forEach(function (c) {
          c.checked = false;
        });
      } else if (t && t.classList && t.classList.contains("js-filter-route-m") && t.checked) {
        const a = document.getElementById("filter-region-all-m");
        if (a) a.checked = false;
      }
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", function () {
      state.sort = sortSelect.value;
      readDesktopIntoState();
      render();
    });
  }

  initFromUrl();
  setPageTitle();
  if (sortSelect) state.sort = sortSelect.value;
  writeStateToDom(false);
  writeStateToDom(true);
  readDesktopIntoState();
  if (topSearch) state.searchQuery = topSearch.value || state.searchQuery;
  if (sortSelect) state.sort = sortSelect.value;
  render();
})();
