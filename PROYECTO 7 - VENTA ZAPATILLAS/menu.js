// menu.js
const menuInput = document.getElementById('menu-input');
const menuItems = document.querySelectorAll('.nav__item');

menuInput.addEventListener('change', () => {
    if (menuInput.checked) {
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show');
            }, index * 100);
        });
    } else {
        menuItems.forEach(item => item.classList.remove('show'));
    }
});

// product-grid.js
const productCardColorOptionsInputs = document.querySelectorAll('.product-card .color-options input');
const productCardImages = document.querySelectorAll('.product-card .product-images img');

productCardColorOptionsInputs.forEach((option) => {
    option.addEventListener('change', (event) => {
        const selectedColor = event.target.value;

        // Ocultar todas las imágenes de la tarjeta de producto actual
        const currentCard = option.closest('.product-card');
        const currentImages = currentCard.querySelectorAll('.product-images img');
        currentImages.forEach((image) => {
            image.classList.remove('active');
        });

        // Mostrar la imagen seleccionada dentro de la tarjeta de producto actual
        const selectedImage = currentCard.querySelector(`.product-images img.${selectedColor}`);
        if (selectedImage) {
            selectedImage.classList.add('active');
        }
    });
});

// tarjeta-producto.js (para tarjeta-hombre y tarjeta-mujer)
const tarjetaProductoOptions = document.querySelectorAll('.card-container .color .color-option');

tarjetaProductoOptions.forEach(color => {
    color.addEventListener('click', () => {
        const currentImg = color.closest('.card-container').querySelector('.product-image img');
        const productElement = color.closest('.card-container').querySelector('.product-image');

        const selectedImgSrc = color.getAttribute('data-img');
        currentImg.src = selectedImgSrc;

        const selectedColor = color.getAttribute('data-color');
        if (selectedColor !== 'gradient') {
            productElement.style.setProperty('--after-bg', selectedColor);
        } else {
            productElement.style.setProperty('--after-bg', '#1a64c5');
        }
        // animation
        productElement.style.setProperty('--anim', 'scale');
        currentImg.style.setProperty('--anim', 'scale');
        removeAn(productElement, currentImg);
    });
});

function removeAn(productElement, imgElement) {
    setTimeout(() => {
        productElement.style.removeProperty('--anim');
        imgElement.style.removeProperty('--anim');
    }, 500);
}
