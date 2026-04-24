const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

const searchInput = document.querySelector("#product-search");
const productGrid = document.querySelector("#product-grid");
const searchHint = document.querySelector("#search-hint");
const countryFilter = document.querySelector("#country-filters");

const productCards = productGrid
  ? Array.from(productGrid.querySelectorAll(".product-card[data-country]"))
  : [];

let selectedCountry = "";

function applyProductFilters() {
  if (!productGrid) return;
  const q = searchInput ? searchInput.value.trim().toLowerCase() : "";
  let visible = 0;

  productCards.forEach((card) => {
    const name = (card.getAttribute("data-product-name") || "").toLowerCase();
    const cat = (card.getAttribute("data-category") || "").toLowerCase();
    const country = (card.getAttribute("data-country") || "").toLowerCase();

    const matchesSearch = !q || name.includes(q) || cat.includes(q);
    const matchesCountry = !selectedCountry || country === selectedCountry;
    const match = matchesSearch && matchesCountry;

    card.classList.toggle("product-card--hidden", !match);
    if (match) visible += 1;
  });

  if (searchHint) {
    searchHint.hidden = visible !== 0;
  }
}

if (searchInput) {
  searchInput.addEventListener("input", applyProductFilters);
}

if (countryFilter) {
  countryFilter.querySelectorAll(".country-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      selectedCountry = chip.getAttribute("data-country") || "";
      countryFilter.querySelectorAll(".country-chip").forEach((c) => {
        const isActive = c === chip;
        c.classList.toggle("is-active", isActive);
        c.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
      applyProductFilters();
    });
  });
}

const sellerForm = document.querySelector("#seller-form");
const sellerFormSuccess = document.querySelector("#seller-form-success");

const countrySelect = document.querySelector('select[name="country"]');
const countryOtherWrap = document.querySelector("#seller-country-other-wrap");
const countryOtherInput = document.querySelector('input[name="countryOther"]');

function syncSellerCountryOther() {
  if (!countrySelect || !countryOtherWrap) return;
  const isOther = countrySelect.value === "other";
  countryOtherWrap.hidden = !isOther;
  if (countryOtherInput) {
    countryOtherInput.required = isOther;
    if (!isOther) countryOtherInput.value = "";
  }
}

if (countrySelect) {
  countrySelect.addEventListener("change", syncSellerCountryOther);
  syncSellerCountryOther();
}

if (sellerForm && sellerFormSuccess) {
  sellerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    sellerFormSuccess.textContent = "Thanks — we received your application and will be in touch soon.";
    sellerForm.reset();
    syncSellerCountryOther();
  });
}
