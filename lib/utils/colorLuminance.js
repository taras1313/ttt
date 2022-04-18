"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * NAME TO HEX
 * source: https://css-tricks.com/converting-color-spaces-in-javascript/
 * @param name
 */
var nameToHex = function (name) {
    // Get RGB from named color in temporary div
    var fakeDiv = document.createElement('div');
    fakeDiv.style.color = name;
    document.body.appendChild(fakeDiv);
    var cs = window.getComputedStyle(fakeDiv);
    var pv = cs.getPropertyValue('color');
    document.body.removeChild(fakeDiv);
    // Code ripped from RGBToHex() (except pv is substringed)
    var rgb = pv.substr(4).split(')')[0].split(',');
    var r = (+rgb[0]).toString(16);
    var g = (+rgb[1]).toString(16);
    var b = (+rgb[2]).toString(16);
    if (r.length === 1)
        r = "0".concat(r);
    if (g.length === 1)
        g = "0".concat(g);
    if (b.length === 1)
        b = "0".concat(b);
    return "#".concat(r).concat(g).concat(b);
};
/**
 * source: https://www.sitepoint.com/javascript-generate-lighter-darker-color/
 * ColorLuminance accepts two parameters:
 * @param hex — a hex color value such as “#abc” or “#123456” (the hash is optional
 * @param lum — the luminosity factor, i.e. -0.1 is 10% darker, 0.2 is 20% lighter, etc.
 */
exports.default = (function (hex, lum) {
    var nameFromHex;
    if (hex.charAt(0) !== '#') {
        nameFromHex = nameToHex(hex);
    }
    // validate hex string
    var newHex = String(nameFromHex || hex).replace(/[^0-9a-f]/gi, '');
    if (newHex.length < 6 && newHex.length > 2) {
        newHex =
            newHex[0] + newHex[0] + newHex[1] + newHex[1] + newHex[2] + newHex[2];
    }
    else {
        newHex = String(nameToHex(hex)).replace(/[^0-9a-f]/gi, '');
        newHex =
            newHex[0] + newHex[0] + newHex[1] + newHex[1] + newHex[2] + newHex[2];
    }
    var newLum = lum || 0;
    // convert to decimal and change luminosity
    var rgb = '#';
    var c;
    var i;
    for (i = 0; i < 3; i += 1) {
        c = parseInt(newHex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + c * newLum), 255)).toString(16);
        rgb += "00".concat(c).substr(c.length);
    }
    return rgb;
});
//# sourceMappingURL=colorLuminance.js.map