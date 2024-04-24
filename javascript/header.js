const sidebar = document.getElementById("sidebar");
const contentContainer = document.getElementById("content-container");
const headerLogo = document.getElementById("header-logo");
const headerToggleButton = document.getElementById("sidebar-toggle-btn");
const header = document.getElementById("header");
const contentBelowHeader = document.getElementById("content-below-header");
const pastTopImageTrigger = document.getElementById("past-top-image-trigger");
const viewLastElement = document.getElementById("last-element");

// Check if element contains specific classname
const elementContainsClassname = (element, className) => {
    return element.classList.contains(className);
};

const toggleElementClass = (element, className) => {
    element.classList.toggle(className);
    return true;
};

const setElementStaticWidth = (element) => {
    const elementStyles = window.getComputedStyle(element);
    const elementCurrentWidth = elementStyles.width;
    element.style.width = elementCurrentWidth;
};

const getElementWidth = (element) => {
    const elementStyling = window.getComputedStyle(element);
    return elementStyling.width;
};

const getElementHeight = (element) => {
    const elementStyling = window.getComputedStyle(element);
    return elementStyling.height;
};

const removeElementInlineStyling = (element) => {
    element.style.cssText = "";
};

// Return true if given element is shown in viewport (minus the height of the element from the top)
const ElementIsInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.bottom <= 0 || rect.top >= (window.innerHeight || document.documentElement.clientHeight)
}

// User interactions
const toggleSidebar = () => {
    if (sidebar) {
        setContentContainerMarginLeft();
        setMarginsWhenHeaderVisible();

        const sidebarIsShrunk = elementContainsClassname(sidebar, "sidebar-shrink");
        if (!sidebarIsShrunk) {
            setElementStaticWidth(sidebar);
        } else {
            removeElementInlineStyling(sidebar);
        }
        toggleElementClass(headerToggleButton, "dark");
        toggleElementClass(sidebar, "sidebar-shrink");

        if (headerLogo) {
            headerLogo.classList.toggle("header-logo-visible");
        }
        if (header) {
            header.classList.toggle("header-extended");
        }
    }
};

const setMarginsWhenHeaderVisible = () => {
    const headerHeight = header.offsetHeight;
    contentBelowHeader.style.marginTop = !sidebar.classList.contains("sidebar-shrink") ? "0px" : `-${headerHeight}px`;
    viewLastElement.style.paddingBottom = sidebar.classList.contains("sidebar-shrink") ? "0px" : `${headerHeight}px`;
};

const setContentContainerMarginLeft = () => {
    const shrunkSidebarWidth = getElementWidth(sidebar);
    contentContainer.style.marginLeft = sidebar.classList.contains("sidebar-shrink") ? "0" : `-${shrunkSidebarWidth}`;
};

// Eventlisteners
contentContainer.addEventListener("scroll", () => {
    if (sidebar.classList.contains("sidebar-shrink")) {
        return;
    }

    // The top background image is not visible anymore => turn the hamburger button dark
    const topImageNotVisible = ElementIsInViewport(pastTopImageTrigger);
    if (topImageNotVisible) {
        headerToggleButton.classList.add("dark");
    } else {
        headerToggleButton.classList.remove("dark");
    }
}, {
    passive: true
});

// Event listener for window resize
window.addEventListener("resize", () => {
    const headerHeight = header.offsetHeight;
    contentBelowHeader.style.marginTop = sidebar.classList.contains("sidebar-shrink") ? "0px" : `-${headerHeight}px`;
});

// Initial load
const initialLoad = () => {
    const headerHeight = header.offsetHeight;
    contentBelowHeader.style.marginTop = `-${headerHeight}px`;
};
initialLoad();