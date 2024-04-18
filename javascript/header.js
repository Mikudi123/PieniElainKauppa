const sidebar = document.getElementById("sidebar");
const contentContainer = document.getElementById("content-container");
const headerLogo = document.getElementById("header-logo");
const header = document.getElementById("header");

// Check if element contains specific classname
const elementContainsClassname = async (element, className) => {
    return element.classList.contains(className);
};

const toggleElementClass = async (element, className) => {
    element.classList.toggle(className);
    return true;
};

const setElementStaticWidth = async (element) => {
    const elementStyles = window.getComputedStyle(element);
    const elementCurrentWidth = elementStyles.width;
    element.style.width = elementCurrentWidth;
};

const getElementWidth = async (element) => {
    const elementStyling = window.getComputedStyle(element);
    return elementStyling.width;
};

const removeElementInlineStyling = async (element) => {
    element.style.cssText = "";
};

// Resizing
// var onresize = function () {
//     let width = window.innerWidth;
//     let height = window.innerHeight;
// };

// User interactions
const toggleSidebar = async () => {
    if (sidebar) {
        await setContentContainerMarginLeft();
        const sidebarIsShrunk = await elementContainsClassname(sidebar, "sidebar-shrink");
        if (!sidebarIsShrunk) {
            await setElementStaticWidth(sidebar);
        } else {
            await removeElementInlineStyling(sidebar);
        }
        await toggleElementClass(sidebar, "sidebar-shrink");
        
        if (headerLogo) {
            headerLogo.classList.toggle("header-logo-visible");
        }
        if (header) {
            header.classList.toggle("header-extended");
        }
    }
};

const setContentContainerMarginLeft = async () => {
    const shrunkSidebarWidth = await getElementWidth(sidebar);
    contentContainer.style.marginLeft = sidebar.classList.contains("sidebar-shrink") ? "0" : `-${shrunkSidebarWidth}`;
};

// Eventlisteners
// window.addEventListener("resize", onresize);