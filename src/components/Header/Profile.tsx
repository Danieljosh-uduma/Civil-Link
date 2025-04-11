import ProfileBgImg from '../../assets/images/profile-bg.png'
import ProfileImg from '../../assets/images/image5.png'
import VerifiedImg from '../../assets/images/icons/verified.svg'
import NotificationIcon from '../../assets/images/icons/notification.svg'
import Button from '../Button/Button'

type ProfileProps = {
    profileType?: 'full'
}

export default function Profile(props: ProfileProps) {
    const { profileType } = props

    if (profileType === 'full') {
        return (
            <div className='profile'>
                <div className='img'>
                    <img src={ProfileBgImg} alt="Profile background" />
                </div>
                <div>
                    <div className='profile-pic'>
                        <img src={ProfileImg} alt="ProfileImg" />
                    </div>
                    <div className="detail">
                        <h3>UserID1896343 <span><img src={VerifiedImg} alt='Verified User' /></span></h3>
                        <div className='hash'>
                            <p>0x1334...f8d9</p>
                        </div>
                        <div className='btn'>
                            <Button variant='plane' size='smaller'>View Profile</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="profile-btn">
                <Button active={true} size='large' outline={true}>
                    <img src={ProfileImg} alt="ProfileImg" />
                    <p>UserID1896343 </p>
                </Button>
                <Button icon={NotificationIcon} variant='button' rounded={true}/>
            </div>
        )
    }
}