/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */


exports.onRouteUpdate = ({ location }) => {
    if (location.hash) {
        console.log(location.hash);
        setTimeout(() => {
            document.querySelector(`${location.hash}`).scrollIntoView();
        }, 0);
        return;
    }
    if (location.pathname === '/nosateliers' || location.pathname === '/en/workshops') {
        const scrollPos = localStorage.getItem('scroll');
        setTimeout(() => {
            window.scrollTo(0, scrollPos);
        }, 100);
    }
    if (location.pathname.includes('/nosateliers') || location.pathname.includes('/workshops')) {
        // Do nothing
    } else {
        console.log('removing');
        localStorage.removeItem('scroll');
    }
};

exports.shouldUpdateScroll = ({ prevRouterProps }) => {
    if (!prevRouterProps) {
        return false;
    }
};