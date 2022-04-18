"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
exports.default = (0, react_jss_1.createUseStyles)(function (theme) {
    return ({
        root: {
            position: 'absolute',
            marginLeft: 11,
        },
        input: {
            display: 'block',
            flexGrow: 1,
            appearance: 'none',
            boxSizing: 'border-box',
            outline: 'none',
            backgroundColor: theme.white,
            height: 32,
            width: 300,
            padding: 3,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: theme.teal5,
            fontSize: 13,
            color: theme.teal3,
            boxShadow: "0px 4px 8px #34323A4D",
            '&::placeholder': {
                color: theme.grey4,
            },
            '&[data-is-notvalid="true"]': {
                borderWidth: 2,
                borderColor: theme.warningRed,
            },
        },
    });
});
//# sourceMappingURL=urlInput.style.js.map