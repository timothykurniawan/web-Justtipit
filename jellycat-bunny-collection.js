(function () {
  const thumbCards = Array.from(document.querySelectorAll(".thumb-card"));
  const mainImage = document.getElementById("main-image");
  const selectedVariantLabel = document.getElementById("selected-variant-label");
  const selectedVariant = document.getElementById("selected-variant");
  const orderLink = document.getElementById("order-now");

  let currentVariant = "Variant 01";

  function updateOrderState() {
    if (selectedVariantLabel) selectedVariantLabel.textContent = currentVariant;
    if (selectedVariant) selectedVariant.textContent = "Variant: " + currentVariant;
    if (orderLink) {
      const message = "Hi! I want: Jellycat Bunny Collection - Variant: " + currentVariant;
      orderLink.href = "https://api.whatsapp.com/send?phone=6282111101329&text=" + encodeURIComponent(message);
    }
  }

  function selectVariant(nextVariant, nextImage) {
    currentVariant = nextVariant || currentVariant;
    thumbCards.forEach((item) => {
      const active = (item.getAttribute("data-variant") || "") === currentVariant;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", active ? "true" : "false");
    });
    if (mainImage && nextImage) {
      mainImage.src = nextImage;
      mainImage.alt = "Jellycat Bunny " + currentVariant;
    }
    updateOrderState();
  }

  thumbCards.forEach((card) => {
    card.addEventListener("click", function () {
      const nextVariant = card.getAttribute("data-variant") || currentVariant;
      const nextImage = card.getAttribute("data-image");
      selectVariant(nextVariant, nextImage || "");
    });
  });

  const initialThumb = thumbCards.find((card) => card.classList.contains("is-active")) || thumbCards[0];
  if (initialThumb) {
    selectVariant(initialThumb.getAttribute("data-variant") || "Variant 01", initialThumb.getAttribute("data-image") || "");
  } else {
    updateOrderState();
  }
})();
