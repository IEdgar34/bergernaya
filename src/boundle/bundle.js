/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/createelem.js":
/*!**************************************!*\
  !*** ./src/js/modules/createelem.js ***!
  \**************************************/
/***/ ((module) => {

function createElem() {
    //add elemet in basket
    const cardList = document.querySelectorAll(".card");
    const basketWrap = document.querySelector(".basket__scroll");
    const basketCurent = document.querySelector(".basket__curent");
    const basketTotal = document.querySelector("[data-total]");
    /* const minus = document.querySelector("[data-minus]");
     const plus = document.querySelector("[data-plus]"); */
    const itemArr = [];

    cardList.forEach((item) => {
        item.addEventListener("click", (e) => {
            let price = item.querySelector(".card__item-price").innerText;
            let img = item.querySelector(".card__img").src;
            let descr = item.querySelector(".card__descr").innerText;
            let gramm = item.querySelector(".card__gramm").innerText;
            if (e.target && e.target.classList.contains("btn")) {
                class CreateElement {
                    constructor(clas) {
                        this.elem = document.createElement("div");
                        this.elem.classList.add(clas);
                        this.elem.innerHTML = ` 
                                <div class="basket__item-flex"> 
                                    <div class="basket__item_img-wrap">
                                        <img src="${img}" alt="" />
                                    </div>
                                    <div class="basket__item_descr">
                                        <p class="basket__item_descr">${descr}</p>
                                        <p class="basket__item_gramm">${gramm}</p>
                                        <p class="basket__item_price">${price}</p>
                                    </div>
                                </div>
                                <div class="basket__curent-wrap">
                                    <span data-minus>-</span><span class="bas">1</span><span data-plus>+</span>
                                </div>
                            `;

                        this.curent();
                        this.totalPrics();
                        this.plusItem();
                    }
                    curent() {
                        basketWrap.append(this.elem);
                        itemArr.push(this.elem);
                        basketCurent.innerText = itemArr.length;
                    }
                    totalPrics() {
                        let i;
                        let c = 0;
                        itemArr.forEach((item) => {
                            i = item.querySelector(".basket__item_price").innerText;
                            c += parseInt(i);
                            basketTotal.innerText = c + "₽";
                        });
                    }

                    plusItem() {
                        const minus = document.querySelectorAll("[data-minus]");
                        const plus = document.querySelectorAll("[data-plus]");
                        const curentWrap = document.querySelector(".basket__curent-wrap");

                        plus.forEach((item) => {
                            if (!item.dataset.clicked) {
                                item.addEventListener("click", (e) => {
                                    const elem = item.closest(".basket__item");
                                    const cur = elem.querySelector(".bas");
                                    itemArr.push(elem);
                                    let d = +cur.innerText;
                                    d += 1;
                                    cur.innerText = d;
                                    basketCurent.innerText = itemArr.length;
                                    this.totalPrics();
                                    item.dataset.clicked = true;
                                });
                            }
                        });
                        minus.forEach((item) => {
                            if (!item.dataset.clicked) {
                                item.addEventListener("click", (e) => {
                                    const elem = item.closest(".basket__item");
                                    const cur = elem.querySelector(".bas");
                                    let v = +cur.innerText;
                                    if (v === 1) {
                                        v = 1;
                                    } else {
                                        v -= 1;
                                        itemArr.pop(elem);
                                    }

                                    cur.innerText = v;
                                    basketCurent.innerText = itemArr.length;
                                    this.totalPrics();
                                    item.dataset.clicked = true;
                                });
                            }
                        });
                    }
                }

                new CreateElement("basket__item");
            }
        });
    });
}

module.exports = createElem;


/***/ }),

/***/ "./src/js/modules/showdescription.js":
/*!*******************************************!*\
  !*** ./src/js/modules/showdescription.js ***!
  \*******************************************/
/***/ ((module) => {

function showDescription() {
    const cards = document.querySelectorAll(".card");
    const modal = document.querySelector(".modal");
    function modalClose() {
        modal.addEventListener("click", (e) => {
            if (e.target.classList.contains("modal")) {
                modal.classList.remove("modal_active");
                document.body.style.overflow = "";
                document.body.style.display = "";
            }
        });
    }
    modalClose();
    class description {
        constructor(title, src, description, price, colories, comp1, comp2, comp3, comp4, comp5) {
            /* this.elem = document.createElement("div"); */
            this.comp1 = comp1;
            this.comp2 = comp2;
            this.comp3 = comp3;
            this.comp4 = comp4;
            this.comp5 = comp5;
            this.colories = colories;
            this.price = price;
            this.description = description;
            (this.src = src), (this.title = title), this.addElem();
            /* this.apend(); */
        }
        addElem() {
            modal.innerHTML = `
                    <div class="modal__item">
                        <h1 class="title">${this.title}</h1>
                        <div class="modal__descr-wrap">
                            <img src="${this.src}" alt="" />
                            <div class="modal__subdescr-wrap">
                                <h3 class="modal__item-descr">
                                ${this.description}
                                </h3>
                                <div>
                                    <ul>
                                        <li class="modal__list-title">Состав</li>
                                        <li class="modal__list-list">${this.comp1}</li>
                                        <li class="modal__list-list">${this.comp2}</li>
                                        <li class="modal__list-list">${this.comp3}</li>
                                        <li class="modal__list-list">${this.comp4}</li>
                                        <li class="modal__list-list">${this.comp5}</li>
                                        <li class="modal__list-list modal__list-cg"> ${this.colories}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="modal_df">
                            <div class="modal__btn-wrap">
                                <button class="basket__total_btn modal__btn">Оформить заказ</button>
                                <div class="basket__curent-wrap">
                                    <span data-minus>-</span><span class="bas">1</span><span data-plus>+</span>
                                </div>
                            </div>
                            <div class="modal__item-price">${this.price}₽</div>
                        </div>
                    </div>
            `;
        }

        /* apend() {
            modal.append(this.elem);
        } */
    }
    const url = " http://localhost:3000/menu";
    cards.forEach((itemm) => {
        itemm.addEventListener("click", (e) => {
            if (e.target.classList.contains("card__img")) {
                const descr = itemm.querySelector(".card__descr").innerText;
                const src = e.target.src;
                function openModal() {
                    modal.classList.add("modal_active");
                    document.body.style.overflow = "hidden";
                    document.body.style.display = "block";
                }

                async function get(url) {
                    const json = await fetch(url);
                    const date = await json.json();
                    return date;
                }
                get(url)
                    .then((date) => {
                        date.forEach((item) => {
                            if (item.name === descr) {
                                openModal();
                                /* let c = item.compound.split(" ");
                                console.log(c); */
                                new description(
                                    item.name,
                                    src,
                                    item.description,
                                    item.price,
                                    item.colories,
                                    item.comp1,
                                    item.comp2,
                                    item.comp3,
                                    item.comp4,
                                    item.comp5,
                                );
                            }
                        });
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            }
        });
    });
}

module.exports = showDescription;


/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((module) => {

function slider() {
    const prev = document.querySelector(".subheader__prev");
    const next = document.querySelector(".subheader__next");

    const slids = document.querySelector(".subheader__item-wrap");
    const wrap = window.getComputedStyle(slids).width;
    //touch slider
    let counter = 0;

    prev.addEventListener("click", (e) => {
        e.preventDefault();

        if (counter <= parseInt(wrap) - 150) {
            counter += 127;
            btnOpacity();
        }

        slids.style.transform = `translateX(-${counter}px)`;
    });
    next.addEventListener("click", (e) => {
        e.preventDefault();
        if (counter != 0) {
            counter -= 127;
            btnOpacity();
        }

        slids.style.transform = `translateX(-${counter}px)`;
    });

    function btnOpacity() {
        counter === 0 ? (next.style.opacity = "0.5") : (next.style.opacity = "1");
        counter > parseInt(wrap) - 150 ? (prev.style.opacity = "0.5") : (prev.style.opacity = "1");
    }
    btnOpacity();
}
module.exports = slider;


/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((module) => {

function tabs() {
    //menu tabs
    const menuList = document.querySelectorAll(".subheader__item-wrap_item");
    const menu = document.querySelectorAll(".menu");

    menuList.forEach((item, iindex, arr1) => {
        item.addEventListener("click", (e) => {
            menu.forEach((menuItem, index, arr2) => {
                if (iindex === index) {
                    clearClass();
                    item.classList.add("subheader__item-wrap_item_active");

                    menuItem.classList.add("menu_active");
                }
            });
        });
    });

    function clearClass() {
        menu.forEach((item) => {
            menuList.forEach((item) => {
                item.classList.remove("subheader__item-wrap_item_active");
            });
            item.classList.remove("menu_active");
        });
    }
}

module.exports = tabs;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener("DOMContentLoaded", () => {
    const slider = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
    const createelem = __webpack_require__(/*! ./modules/createelem */ "./src/js/modules/createelem.js");
    const tabs = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
    const showdescription = __webpack_require__(/*! ./modules/showdescription */ "./src/js/modules/showdescription.js");
    showdescription();
    tabs();
    createelem();
    slider();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map