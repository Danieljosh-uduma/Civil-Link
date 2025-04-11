import { ReactNode } from "react"
import { Link } from "react-router"
import './Button.css'

type ButtonProps = {
    children?: ReactNode
    variant?: 'plane' | 'button'
    size?: 'small' | 'large'
    icon?: string
    url?: string
    active?: boolean
}


export default function Button(props: ButtonProps) {
    const { children, icon, variant, active, size, url } = props 

    let style = variant === 'button'? 'btn active-btn': variant === 'plane'? 'plane ': ''
    style += size === 'large'? 'large-btn ': size === 'small'? 'small-btn ': ''
    style += active? 'active-btn ': ''

    return (
        <Link to={url? url: '/'}>
            <button type="button" className={style}>
                {icon && <img className="btn-icon" src={icon} alt="" />}
                {children}
            </button>
        </Link>
    )
}

