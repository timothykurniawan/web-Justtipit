(function () {
  const colorChips = Array.from(document.querySelectorAll(".color-chip"));
  const thumbCards = Array.from(document.querySelectorAll(".thumb-card"));
  const sizeChips = Array.from(document.querySelectorAll(".size-chip"));
  const mainImage = document.getElementById("main-image");
  const selectedColorLabel = document.getElementById("selected-color-label");
  const selectedSizeLabel = document.getElementById("selected-size-label");
  const variantText = document.getElementById("selected-variant");
  const orderLink = document.getElementById("order-now");

  let selectedColor = "Oatmeal Yellow";
  let selectedSize = "";
  const colorToImage = {
    "Oatmeal Yellow": "./assets/adidas-cheongsam-sand-gold.png",
    "Dark Grey": "./assets/adidas-cheongsam-slate-blue.png",
    Red: "./assets/adidas-cheongsam-burgundy.png",
    "Focus Olive": "./assets/adidas-cheongsam-olive-green.png",
    "Light Grey Blue": "./assets/adidas-cheongsam-ice-blue-v3.png",
  };

  function updateOrderState() {
    if (!variantText || !orderLink) return;
    const sizeLabel = selectedSize || "not selected";
    variantText.textContent = "Color: " + selectedColor + " · Size: " + sizeLabel;
    if (selectedColorLabel) selectedColorLabel.textContent = selectedColor;
    if (selectedSizeLabel) selectedSizeLabel.textContent = sizeLabel;

    const resolvedSize = selectedSize || "Please confirm available sizes";
    const message =
      "Hi! I want: Adidas Cheongsam Jacket - Color: " +
      selectedColor +
      ", Size: " +
      resolvedSize;
    orderLink.href =
      "https://api.whatsapp.com/send?phone=6282111101329&text=" + encodeURIComponent(message);
  }

  function selectColor(nextColor) {
    selectedColor = nextColor || selectedColor;
    colorChips.forEach((item) => {
      const active = (item.getAttribute("data-color") || "") === selectedColor;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", active ? "true" : "false");
    });
    thumbCards.forEach((item) => {
      const active = (item.getAttribute("data-color") || "") === selectedColor;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", active ? "true" : "false");
    });
    if (mainImage && colorToImage[selectedColor]) {
      mainImage.src = colorToImage[selectedColor];
      mainImage.alt = "Adidas Cheongsam Jacket in " + selectedColor;
    }
    updateOrderState();
  }

  colorChips.forEach((chip) => {
    chip.addEventListener("click", function () {
      selectColor(chip.getAttribute("data-color") || selectedColor);
    });
  });

  thumbCards.forEach((card) => {
    card.addEventListener("click", function () {
      selectColor(card.getAttribute("data-color") || selectedColor);
    });
  });

  sizeChips.forEach((chip) => {
    chip.addEventListener("click", function () {
      selectedSize = chip.getAttribute("data-size") || "";
      sizeChips.forEach((item) => {
        const isSelected = (item.getAttribute("data-size") || "") === selectedSize;
        item.classList.toggle("is-active", isSelected);
        item.setAttribute("aria-pressed", isSelected ? "true" : "false");
      });
      updateOrderState();
    });
  });

  selectColor(selectedColor);
})();
