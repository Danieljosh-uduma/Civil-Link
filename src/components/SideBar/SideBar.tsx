import { Link } from "react-router"
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
import './SideBar.css'



export default function SideBar() {
    return (
        <div className="SideBar">
            <div className="logo-div">
                <span className="logo">
                    <Link to='/'>Logo</Link>
                </span>
                <Button icon={CloseImg} variant="button" />
            </div>
            <nav className="navbar">
                <ul>
                    <li>
                        <Button icon={HomeImg} active={true} size='large' url="/dashboard">Dashboard</Button>
                    </li>
                    <li>
                        <Button icon={OfficialImg} size='large' url="/directory">Officials</Button>
                    </li>
                    <li>
                        <Button icon={ForumImg} size='large'>Public Forum</Button>
                    </li>
                    <li>
                        <Button icon={ActivitiesImg} size='large'>My activites</Button>
                    </li>
                    <li>
                        <Button icon={WalletImg} size='large'>Wallet</Button>
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