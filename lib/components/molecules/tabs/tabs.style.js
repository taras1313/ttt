"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
// Used to set the tabs left position according to wrapper
var constant_1 = require("../../../constant");
exports.default = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'inherit',
        paddingTop: 10,
        paddingLeft: constant_1.WRAPPER_PADDING_LEFT,
    },
    tabsWrapper: {
        display: 'flex',
    },
    slider: {
        top: 2,
        position: 'relative',
        borderBottom: "4px solid ".concat(theme.grey1),
        transition: 'left 0.3s ease-out, width 0.3s ease-out',
    },
    contentWrapper: {
        padding: 14,
        minHeight: 240,
        '&[data-is-centered=true]': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
}); });
//# sourceMappingURL=tabs.style.js.map