export function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getSectionColor(obj, pathName) {
    const key = pathName.split('/');
    const section = key[key.length - 1];
    return obj[section];
}

export function getPathData(obj, lng, pathName, isHomePage) {
    if (isHomePage) {
        return obj[lng]['homepage'];
    }
    const key = pathName.split('/');
    const section = key[key.length - 1];
    return obj[lng][section];
}

export function lightenDarkenColor(col, amt) {
    let usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    let num = parseInt(col, 16);
    let r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    let b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    let g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
