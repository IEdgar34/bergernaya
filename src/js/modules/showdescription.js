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
