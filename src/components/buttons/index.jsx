import classNames from "classnames";
import propType from "prop-type";
import PropTypes from "prop-types";
import { createElement } from "react";

export default function Button({ as, size, variant, className, children, ...props }) {
    return createElement(as, {
        className: classNames('rounded-full flex items-center justify-center font-bold transition-colors', {
            "px-4 h-8 text-small": size === 'small',
            "px-4 h-9": size === 'normal',
            "px-4 text-[17px] h-[52px] w-full": size === 'large',
            "bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white": variant === 'primary',
            "bg-[#eff3f4] hover:bg-[#d7dbdc] text-black": variant === 'white',
            "border border-[#b4b4b4] hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e] ": variant === 'white-outline',
            [className]: true
        }),
        ...props
    }, children)
}

Button.prototype = {
    as: propType.any,
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    variant: PropTypes.oneOf(['primary', 'white', 'white-outline']),
    props: PropTypes.object,
    classNames: PropTypes.string
}

Button.defaultProps = {
    as: "button",
    size: 'normal',
    variant: "primary"
}