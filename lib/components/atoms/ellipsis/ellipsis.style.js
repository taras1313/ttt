"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
exports.default = (0, react_jss_1.createUseStyles)({
    root: {
        'white-space': 'nowrap',
        maxWidth: function (props) {
            return props.maxWidth ? props.maxWidth : 'inherit';
        },
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: function (props) {
            return props.color ? props.color : 'inherit';
        },
    },
});
//# sourceMappingURL=ellipsis.style.js.map