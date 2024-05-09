import { slider } from "./modules/slider";
import { createElem } from "./modules/createelem";
import { showDescription } from "./modules/showdescription";
import { tabs } from "./modules/tabs";
import { scroll } from "./modules/scroll";
window.addEventListener("DOMContentLoaded", () => {
    showDescription();
    tabs();
    createElem();
    slider();
    scroll();
});
