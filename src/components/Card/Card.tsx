import { Link } from 'react-router'
import VerifiedIcon from '/src/assets/images/icons/verified.svg'
import { cardProps } from '../../pages/Directories/Data'
import './Card.css'




export default function Card(props: cardProps) {
    const { pic, fullName, _id, position} = props

    return (
        <div className='card'>
            <div className="img">
                <img src={pic} alt={`${fullName} image`} />
            </div>
            <h3>
                {fullName}
                <span>
                    <img src={VerifiedIcon} alt="verified personnel" />
                </span>
            </h3>
            <p>{position ? (position.length > 20 ? position.slice(0, 20) + '...' : position) : 'No position available'}</p>
            <Link to={`/directory/${_id}`}>View details</Link>
        </div>
    )
}