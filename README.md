# Foodie — Simple Food Delivery Landing

Small responsive Food Delivery website built with plain HTML, CSS and vanilla JavaScript. The app loads menu items from `products.json`, renders product cards, and provides a slide-out shopping cart with quantity controls and live totals. Font Awesome is used for icons and Swiper for the testimonial carousel (both loaded via CDN).

## Features
- Responsive layout (desktop / mobile)
- Menu loaded from `products.json`
- Add to cart, increment/decrement quantity
- Slide-out cart with live total and item count
- Testimonial slider using Swiper

## Quick start
1. Open `index.html` in a browser (no build step required).
2. Ensure internet access for CDN resources:
   - Font Awesome
   - Swiper
3. Edit `products.json` to add/remove menu items.
4. Place product images in the `Images/` folder referenced by `products.json`.

## Project structure
- index.html — main UI
- styles.css — styling
- script.js — interactivity (cart, menu rendering, swiper)
- products.json — product data
- Images/ — product and UI images

## Development notes
- script.js: fetches `products.json`, renders product cards and manages cart state in-memory.
- styles.css: contains responsive rules including `.mobile-menu-active` to toggle the mobile menu.
- Swiper is initialized in `script.js` for the testimonial section.

## Known issues / TODO
- Currency formatting in the cart total can be improved (currently shows numbers without a leading `$` in some places).
- Cart state is not persisted across reloads (consider localStorage).
- Improve accessibility (focus management when opening cart/mobile menu).

## Contribution
Modify files directly in the project folder and reload `index.html` to test changes. Pull requests or issues can be used to track enhancements.
