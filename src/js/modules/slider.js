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
export { slider };
/* module.exports = slider; */
