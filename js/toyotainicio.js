let slide_index = 0;
let slide_play = true;
let slides = document.querySelectorAll(".slide");

hideAllSlide = () => {
    slides.forEach((e) => {
        e.classList.remove("active");
    });
};

showSlide = () => {
    hideAllSlide();
    slides[slide_index].classList.add("active");
};

nextSlide = () =>
    (slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1);

prevSlide = () =>
    (slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1);

// pause slide when hover slider

document
    .querySelector(".slider")
    .addEventListener("mouseover", () => (slide_play = false));

// enable slide when mouse leave out slider
document
    .querySelector(".slider")
    .addEventListener("mouseleave", () => (slide_play = true));

// slider controll

document.querySelector(".slide-next").addEventListener("click", () => {
    nextSlide();
    showSlide();
});

document.querySelector(".slide-prev").addEventListener("click", () => {
    prevSlide();
    showSlide();
});

showSlide();

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products

let products = [{
        name: "Pantalla aplicación directa",
        image1: "./images/toyota/hilux/camarareversa/4877-tm_thickbox_default.jpg",
        image2: "./images/toyota/hilux/camarareversa/D_NQ_NP_698884-MLM45483064009_042021-O.jpg",
        old_price: "$4000",
        curr_price: "$3000",
    },
    {
        name: "Manija con cámara de retroceso",
        image1: "./images/toyota/hilux/camarareversa/WhatsApp-Image-2020-11-13-at-20.57.23.jpeg",
        image2: "./images/toyota/hilux/camarareversa/WhatsApp-Image-2020-11-13-at-20.57.24.jpeg",
        old_price: "$400",
        curr_price: "$300",
    },
    {
        name: "Pantalla cabecera desmontable 10'",
        image1: "./images/toyota/sienna/pantalla/D_NQ_NP_623732-MLM31232168115_062019-O.jpg",
        image2: "./images/toyota/sienna/pantalla/D_NQ_NP_726040-MLM31232794639_062019-O.webp",
        old_price: "$4500",
        curr_price: "$3500",
    },
];

let product_list = document.querySelector("#latest-products");
let best_product_list = document.querySelector("#best-products");

products.forEach((e) => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">Comprar Ahora</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    product_list.insertAdjacentHTML("beforeend", prod);
    best_product_list.insertAdjacentHTML("afterbegin", prod);
});