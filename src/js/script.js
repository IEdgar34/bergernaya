window.addEventListener("DOMContentLoaded", () => {
    const slider = require("./modules/slider");
    const createelem = require("./modules/createelem");
    const tabs = require("./modules/tabs");
    const showdescription = require("./modules/showdescription");
    showdescription();
    tabs();
    createelem();
    slider();
});
