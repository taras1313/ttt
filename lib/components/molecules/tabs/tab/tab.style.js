"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
// Used to set the first tab width
var constant_1 = require("../../../../constant");
exports.default = (0, react_jss_1.createUseStyles)(function (theme) {
    return ({
        root: {
            display: 'inline-block',
            marginRight: constant_1.TAB_MARGIN_RIGHT,
            paddingBottom: 10,
            fontSize: 12,
            color: theme.grey1,
            '&:hover': {
                cursor: 'pointer',
            },
            '&:first-letter': {
                textTransform: 'uppercase',
            },
        },
    });
});
//# sourceMappingURL=tab.style.js.map