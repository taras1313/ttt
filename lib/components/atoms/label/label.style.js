"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
exports.default = (0, react_jss_1.createUseStyles)(function (theme) {
    return ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            position: 'relative',
            backgroundColor: 'inherent',
        },
        label: {
            color: theme.grey1,
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: 0,
            paddingBottom: 8,
            '[data-input-is-required="true"] > &::before': {
                content: '"* "',
                color: theme.warningRed,
            },
        },
    });
});
//# sourceMappingURL=label.style.js.map