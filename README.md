# Justtip.it
A chat-first shop for products that are easy to find overseas and hard to get in Indonesia. Browse like a store, then order on WhatsApp — no cart.
Built by five Indonesian students studying abroad.
## How it works
1. **Choose a product** on the homepage or in the shop.
2. **Chat on WhatsApp** to confirm the source, options, and shipping.
3. **We handle the rest** — sourcing, shipping, and updates.
Custom requests and seller applications also go through WhatsApp.
## Pages
| Page | What it is |
| --- | --- |
| [`index.html`](./index.html) | Homepage: categories, featured products, seller form, about, contact |
| [`shop.html`](./shop.html) | Catalog with search, filters (category, region, price, verified), and sort |
| [`adidas-cheongsam-jacket.html`](./adidas-cheongsam-jacket.html) | Jacket listing with color and size options |
| [`jellycat-bunny-collection.html`](./jellycat-bunny-collection.html) | Bunny listing with variant thumbnails |
Orders open WhatsApp with the selected product and options already filled in.
## Run locally
This is a static site. There is no build step, package manager, or backend.
Open `index.html` in a browser, or serve the folder:
```bash
npx serve .
```
Then visit the URL printed in the terminal (usually `http://localhost:3000`).
## Project layout
```
index.html / styles.css / script.js     Homepage
shop.html / shop.css / shop.js          Shop catalog (products live in shop.js)
adidas-cheongsam-jacket.*               Jacket product page
jellycat-bunny-collection.*             Bunny product page
assets/                                 Product images
```
Shop catalog data is the `MOCK_PRODUCTS` array in `shop.js`. Homepage featured cards are hardcoded in `index.html`. Dedicated product pages need matching HTML, CSS, JS, and images in `assets/`.
## Contact
- Instagram: [justtip.it](https://www.instagram.com/justtip.it/)
- WhatsApp: [+62 821-1110-1329](https://api.whatsapp.com/send?phone=6282111101329)
