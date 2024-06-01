const sidebar = document.getElementById("sidebar");
const contentContainer = document.getElementById("content-container");
const headerLogo = document.getElementById("header-logo");
const headerToggleButton = document.getElementById("sidebar-toggle-btn");
const header = document.getElementById("header");
const contentBelowHeader = document.getElementById("content-below-header");
const listBtnTrigger = document.getElementById("list-btn-class-trigger");
const viewLastElement = document.getElementById("last-element");
const contentBgFilter = document.getElementById("content-filter");

const LOW_RES = 1050; // The same as in header.js mediaquery

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
};

// Toggle the header/sidebar.
const toggleSidebar = () => {
    if (sidebar) {
        if (window.innerWidth >= LOW_RES) {
            // setContentContainerMarginLeft();
        }
        setMarginsWhenHeaderVisible();

        const sidebarIsShrunk = elementContainsClassname(sidebar, "sidebar-shrink");
        // if (!sidebarIsShrunk) {
        //     // setElementStaticWidth(sidebar);
        // } else {
        //     removeElementInlineStyling(sidebar);
        // }
        
        if (!header.classList.contains("header-extended")) {
            headerToggleButton.classList.add("dark");
        } else {
            const topImageNotVisible = ElementIsInViewport(listBtnTrigger);
            if (topImageNotVisible) {
                headerToggleButton.classList.add("dark");
            } else {
                headerToggleButton.classList.remove("dark");
            }
        }

        if (window.innerWidth < LOW_RES && sidebarIsShrunk) {
            contentBgFilter.classList.add("content-filter-visible");
        } else {
            contentBgFilter.classList.remove("content-filter-visible");
        }

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
    contentBelowHeader.style.marginTop = sidebar.classList.contains("sidebar-shrink") ? "0px" : `${headerHeight}px`;
};

const setContentContainerMarginLeft = () => {
    const shrunkSidebarWidth = getElementWidth(sidebar);
    contentContainer.style.marginLeft = sidebar.classList.contains("sidebar-shrink") ? "0" : `-${shrunkSidebarWidth}`;
};

// Event listener for scroll
contentBelowHeader.addEventListener("scroll", () => {
    // The top background image is not visible anymore => turn the hamburger button dark
    if (!header.classList.contains("header-extended")) {
        const topImageNotVisible = ElementIsInViewport(listBtnTrigger);
        if (topImageNotVisible) {
            headerToggleButton.classList.add("dark");
        } else {
            headerToggleButton.classList.remove("dark");
        }
    }
}, {
    passive: true
});

// Event listener for window resize
window.addEventListener("resize", () => {
    if (window.innerWidth <= LOW_RES) {
        sidebar.classList.add("sidebar-low-res");
        if (!elementContainsClassname(sidebar, "sidebar-shrink")) {
            contentBgFilter.classList.add("content-filter-visible");
        }
    } else {
        sidebar.classList.remove("sidebar-low-res");
        if (!elementContainsClassname(sidebar, "sidebar-shrink")) {
            contentBgFilter.classList.remove("content-filter-visible");
        }
    }

    const headerHeight = header.offsetHeight;
    contentBelowHeader.style.marginTop = !sidebar.classList.contains("sidebar-shrink") ? "0px" : `${headerHeight}px`;
}, {
    passive: true
});

// Initial load
const initialLoad = () => {
    if (window.innerWidth <= LOW_RES) {
        sidebar.classList.add("sidebar-low-res");
        toggleSidebar();
    } else {
        sidebar.classList.remove("sidebar-low-res");
    }
};
initialLoad();