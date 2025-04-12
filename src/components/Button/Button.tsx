import { ReactNode } from "react"
import { Link } from "react-router"
import './Button.css'

type ButtonProps = {
    children?: ReactNode
    variant?: 'plane' | 'button'
    size?: 'smaller' | 'small' | 'large'
    icon?: string
    url?: string
    active?: boolean
    outline?: boolean
    rounded?: boolean | string
}


export default function Button(props: ButtonProps) {
    const { children, icon, variant, active, size, url, outline, rounded } = props 

    let style = variant === 'button'? 'btn active-btn ': variant === 'plane'? 'plane ': ''
    style += size === 'large'? 'large-btn ': size === 'small'? 'small-btn ': size === 'smaller'? 'smaller-btn ': ''
    style += active? 'active-btn ': ''
    style += outline? 'outline ': ''
    style += rounded === true? 'rounded ': rounded === 'small'? 'rounded-sm ': ''

    return (
        <Link to={url? url: '/'}>
            <button type="button" className={style}>
                {icon && <img className="btn-icon" src={icon} alt="" />}
                {children}
            </button>
        </Link>
    )
}

