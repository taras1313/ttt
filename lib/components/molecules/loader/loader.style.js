"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
exports.default = (0, react_jss_1.createUseStyles)({
    root: {
        display: 'flex',
        fontFamily: 'inherit',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'inherit',
        // Centered loading
        '&[data-is-overlay=true]': {
            zIndex: 1000,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
    },
    text: {
        fontSize: function (props) {
            return props.size < 300 ? props.size / 2.2 : 300 / 2.2;
        },
        '&::first-letter': {
            textTransform: 'uppercase',
        },
    },
});
//# sourceMappingURL=loader.style.js.map