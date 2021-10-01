import React from 'react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CartWidget.css'

const STYLES = [
    'btn--primary',
    'btn--outline'
]
const SIZES = [
    'btn--medium',
    'btn--large'
]

export const CartWidget = ({
    items,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}
        type={type}>
            <FontAwesomeIcon icon={faShoppingCart} /> <span>{items}</span>
        </button>
    )
}
