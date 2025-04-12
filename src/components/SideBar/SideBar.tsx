import Button from "../Button/Button"
import CloseImg from '/src/assets/images/icons/close-square.svg'
import OfficialImg from '/src/assets/images/icons/profile-2user.svg'
import ForumImg from '/src/assets/images/icons/messages-3.svg'
import ActivitiesImg from '/src/assets/images/icons/clock.svg'
import HomeImg from '/src/assets/images/icons/home-2.svg'
import WalletImg from '/src/assets/images/icons/card.svg'
import SupportImg from '/src/assets/images/icons/24-support.svg'
import SettingsImg from '/src/assets/images/icons/setting-2.svg'
import LogoutImg from '/src/assets/images/icons/logout.svg'
import { useLocation } from 'react-router-dom';
import LogoImg from '/src/assets/images/icons/logo.svg'
import './SideBar.css'



export default function SideBar() {
    const location = useLocation();

    return (
        <div className="SideBar">
            <div className="logo-div">
                <span className="logo">
                    <Button variant="button" icon={LogoImg}/>
                </span>
                <Button icon={CloseImg} variant="button" />
            </div>
            <nav className="navbar">
                <ul>
                    <li>
                        <Button icon={HomeImg} {...(location.pathname === '/dashboard' ? { active: true } : {})} size='large' url="/dashboard">Dashboard</Button>
                    </li>
                    <li>
                        <Button icon={OfficialImg} {...(location.pathname === '/directory' ? { active: true } : {})} size='large' url="/directory">Officials</Button>
                    </li>
                    <li>
                        <Button icon={ForumImg} {...(location.pathname === '/forum' ? { active: true } : {})} size='large' url="/forum">Public Forum</Button>
                    </li>
                    <li>
                        <Button icon={ActivitiesImg} {...(location.pathname === '/activities' ? { active: true } : {})} size='large' url="/activities">My activities</Button>
                    </li>
                    <li>
                        <Button icon={WalletImg} {...(location.pathname === '/wallet' ? { active: true } : {})} size='large' url="/wallet">Wallet</Button>
                    </li>
                </ul>
            </nav>

            <nav className="footerNav">
                <ul>
                    <li>
                        <Button icon={SupportImg} size='large'>Support</Button>
                    </li>
                    <li>
                        <Button icon={SettingsImg} size='large'>Settings</Button>
                    </li>
                    <li>
                        <Button icon={LogoutImg} size='large'>Log out</Button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}