import { Link } from 'react-router'
import VerifiedIcon from '/src/assets/images/icons/verified.svg'
import './Card.css'

type CardProps = {
    img: string
    name: string
    title: string
}

export default function Card(props: CardProps) {
    const { img, name, title} = props

    return (
        <div className='card'>
            <div className="img">
                <img src={img} alt={`${title} image`} />
            </div>
            <h3>
                {name}
                <span>
                    <img src={VerifiedIcon} alt="verified personnel" />
                </span>
            </h3>
            <p>{title}</p>
            <Link to={`/${title}`}>View details</Link>
        </div>
    )
}