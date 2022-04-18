"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var constant_1 = require("../../../constant");
var colorLuminance_1 = __importDefault(require("../../../utils/colorLuminance"));
exports.default = (0, react_jss_1.createUseStyles)(function (theme) {
    return ({
        root: {
            height: constant_1.MIN_TARGET_SIZE,
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            overflow: 'hidden',
            boxSizing: 'border-box',
            borderWidth: 1,
            borderStyle: 'solid',
            appearance: 'none',
            flexShrink: 0,
            cursor: 'default',
            outline: 'none',
            paddingLeft: 14,
            paddingRight: 14,
            boxShadow: "0 0 0 0 ".concat(theme.teal2light),
            transition: "box-shadow 150ms linear, background-color 150ms linear, border-color 150ms linear",
            color: function (props) {
                return props.color ? (0, colorLuminance_1.default)(props.color, 0.2) : theme.grey2;
            },
            borderColor: 'currentColor',
            backgroundColor: 'transparent',
            '&:not([disabled]):hover': {
                color: function (props) {
                    return props.color ? (0, colorLuminance_1.default)(props.color, -0.2) : theme.grey1;
                },
                cursor: 'pointer',
            },
            '&[disabled]': {
                opacity: 0.3,
            },
            '&:focus': {
                boxShadow: function (props) {
                    return props.color
                        ? "0 0 ".concat(constant_1.FOCUS_OUTLINE_WIDTH, "px ").concat((0, colorLuminance_1.default)(props.color, null))
                        : "0 0 0 ".concat(constant_1.FOCUS_OUTLINE_WIDTH, "px ").concat(theme.teal2light);
                },
            },
            '&[data-is-primary="true"]': {
                color: theme.white,
                borderColor: theme.teal3,
                backgroundColor: theme.teal3,
                '&:not([disabled]):hover': {
                    color: theme.white,
                    backgroundColor: theme.teal2,
                    borderColor: theme.teal2,
                },
                '&:focus': {
                    boxShadow: "0 0 0 ".concat(constant_1.FOCUS_OUTLINE_WIDTH, "px ").concat(theme.teal2light),
                },
            },
            '&[data-is-secondary="true"]': {
                color: theme.teal3,
                '&:not([disabled]):hover': {
                    color: theme.teal2,
                },
                '&:focus': {
                    boxShadow: "0 0 0 ".concat(constant_1.FOCUS_OUTLINE_WIDTH, "px ").concat(theme.teal2light),
                },
            },
            '&[data-is-warning="true"]': {
                color: theme.warningRed,
                borderColor: theme.warningRed,
                '&:not([disabled]):hover': {
                    backgroundColor: theme.warningRed,
                    color: theme.white,
                },
                '&:focus': {
                    boxShadow: "0 0 ".concat(constant_1.FOCUS_OUTLINE_WIDTH, "px ").concat(theme.warningRed),
                },
            },
            '&[data-is-round="true"]': {
                borderRadius: 5,
            },
            '&[data-is-inverted="true"]': {
                '&:not([disabled]):hover': {
                    color: theme.white,
                    backgroundColor: function (props) {
                        return props.color ? (0, colorLuminance_1.default)(props.color, 0.2) : theme.grey2;
                    },
                },
            },
        },
        vector: {
            marginRight: 14,
            flexShrink: 0,
        },
        text: {
            color: 'currentColor',
            lineHeight: "".concat(constant_1.MIN_TARGET_SIZE - 2, "px"),
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
        },
    });
});
//# sourceMappingURL=button.style.js.map