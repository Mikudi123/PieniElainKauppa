const sidebar = document.getElementById("sidebar");
const contentContainer = document.getElementById("content-container");
const headerLogo = document.getElementById("header-logo");
const headerToggleButton = document.getElementById("sidebar-toggle-btn");
const header = document.getElementById("header");
const contentBelowHeader = document.getElementById("content-below-header");
const pastTopImageTrigger = document.getElementById("past-top-image-trigger");
const viewLastElement = document.getElementById("last-element");

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

const getElementHeight = async (element) => {
    const elementStyling = window.getComputedStyle(element);
    return elementStyling.height;
};

const removeElementInlineStyling = async (element) => {
    element.style.cssText = "";
};

// Return true if given element is shown in viewport (minus the height of the element from the top)
const ElementIsInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.bottom <= 0 || rect.top >= (window.innerHeight || document.documentElement.clientHeight)
}

// User interactions
const toggleSidebar = async () => {
    if (sidebar) {
        await setContentContainerMarginLeft();
        await setMarginsWhenHeaderVisible();

        const sidebarIsShrunk = await elementContainsClassname(sidebar, "sidebar-shrink");
        if (!sidebarIsShrunk) {
            await setElementStaticWidth(sidebar);
        } else {
            await removeElementInlineStyling(sidebar);
        }
        await toggleElementClass(headerToggleButton, "dark");
        await toggleElementClass(sidebar, "sidebar-shrink");

        if (headerLogo) {
            headerLogo.classList.toggle("header-logo-visible");
        }
        if (header) {
            header.classList.toggle("header-extended");
        }
    }
};

const setMarginsWhenHeaderVisible = async () => {
    const headerHeight = header.offsetHeight;
    contentBelowHeader.style.marginTop = !sidebar.classList.contains("sidebar-shrink") ? "0px" : `-${headerHeight}px`;
    viewLastElement.style.paddingBottom = sidebar.classList.contains("sidebar-shrink") ? "0px" : `${headerHeight}px`;
};

const setContentContainerMarginLeft = async () => {
    const shrunkSidebarWidth = await getElementWidth(sidebar);
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
const initialLoad = async () => {
    const headerHeight = header.offsetHeight;
    contentBelowHeader.style.marginTop = `-${headerHeight}px`;
};
initialLoad();