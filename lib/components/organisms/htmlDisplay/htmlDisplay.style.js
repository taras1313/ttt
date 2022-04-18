"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
exports.default = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    readOnly: {
        '& h1': {
            fontSize: 32,
            fontWeight: 'bold',
        },
        '& h2': {
            fontSize: 24,
            fontWeight: 'bold',
        },
        '& strong': {
            fontWeight: 'bold',
        },
        '& ul': {
            position: 'relative',
            paddingLeft: 22,
            '&::before': {
                position: 'absolute',
                content: '"•"',
                color: theme.teal3,
                fontWeight: 'bold',
                width: '1em',
                marginLeft: '-1em',
            },
        },
        '& img': {
            maxWidth: '50%',
        },
    },
}); });
//# sourceMappingURL=htmlDisplay.style.js.map