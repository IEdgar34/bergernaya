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
export { createElem };
