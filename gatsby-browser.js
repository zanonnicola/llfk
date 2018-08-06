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
    }
};

exports.shouldUpdateScroll = ({ prevRouterProps }) => {
    if (!prevRouterProps) {
        return false;
    }
};