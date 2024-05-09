const elem = document.createElement("div");
elem.style.cssText = `
        border-radius: 10px;
        width: 50px;
        height: 50px;
        justify-content: center;
        align-items: center;
        background-color: #ff7020;
        display: none;
        position: fixed;
        bottom: 50px;
        right: 26px;
        z-index: 1000;
        cursor: pointer;
     `;
elem.innerHTML = ` <div>&#128070;</div>`;
document.body.append(elem);
function scroll() {
    window.addEventListener("scroll", (e) => {
        if (window.scrollY > 600) {
            elem.style.display = "flex";
            if (!elem.getAttribute("data-click")) {
                elem.addEventListener("click", (e) => {
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                });
                elem.setAttribute("data-click", true);
            }
        } else {
            elem.style.display = "none";
        }
    });
}

export { scroll };
