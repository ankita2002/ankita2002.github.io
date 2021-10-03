// highlight the navbar link when the page is loaded
function navbarOnLoad() {
    let currentURL = window.location.href;

    if (currentURL.includes("#experiences")) {
        navbar(1);
    }
    else if (currentURL.includes("#projects")) {
        navbar(2);
    }
    else if (currentURL.includes("#socials")) {
        navbar(3);
    }
    else if (currentURL.includes("#contact")) {
        navbar(4);
    }
    else {
        navbar(0);
    }
}

// highlight the navbar link when a "nav-link" is clicked
function navbar(navLinkSrNo) {
    for (let i = 0; i < 5; i++){
        document.getElementsByClassName("nav-link")[i].style.color = "#000";
    }

    document.getElementsByClassName("nav-link")[navLinkSrNo].style.color = "#007bff";
}