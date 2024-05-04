import { slider } from "./modules/slider";
import { createElem } from "./modules/createelem";
import { showDescription } from "./modules/showdescription";
import { tabs } from "./modules/tabs";
window.addEventListener("DOMContentLoaded", () => {
    showDescription();
    tabs();
    createElem();
    slider();
});
