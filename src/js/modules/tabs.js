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
