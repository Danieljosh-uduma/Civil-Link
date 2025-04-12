// import SideBar from "../../components/SideBar/SideBar"
import Main from "../../components/Main/Main"
import Header from "../../components/Header/Header"
import Profile from "../../components/Header/Profile"
import Directory from "../../components/Directory/Directory"
import ProfileImg from '../../assets/images/image4.png'
import VerifiedIcon from '../../assets/images/icons/verified.svg'
import { ReactNode } from "react"
import Button from "../../components/Button/Button"
import cards from "../Directories/Data"



export default function Dashboard() {
    

    return (
        <>
            <Main className="dashboard">
                <section className="dashboard-main">
                    <Header style="simple" />
                    <Directory data={cards} />
                    
                    <CustomComponent>
                        <h3>TOP PUBLIC FORUM</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>user profile</th>
                                    <th>Category</th>
                                    <th>Creator</th>
                                    <th>Date</th>
                                    <th>Reach</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src={ProfileImg} alt="User 1" width="50" /></td>
                                    <td>Technology</td>
                                    <td>John Doe</td>
                                    <td>2023-10-01</td>
                                    <td>1500</td>
                                </tr>
                                <tr>
                                    <td><img src={ProfileImg} alt="User 2" width="50" /></td>
                                    <td>Health</td>
                                    <td>Jane Smith</td>
                                    <td>2023-10-02</td>
                                    <td>1200</td>
                                </tr>
                                <tr>
                                    <td><img src={ProfileImg} alt="User 3" width="50" /></td>
                                    <td>Education</td>
                                    <td>Michael Brown</td>
                                    <td>2023-10-03</td>
                                    <td>1800</td>
                                </tr>
                            </tbody>
                        </table>
                    </CustomComponent>
                    <CustomComponent>
                        <h3>TOP TRENDIND OFFICIALS</h3>
                        <ul>
                            <li>
                                <div className="item">
                                    <img src={ProfileImg} alt="profile image" />
                                    <span>Ahmed Tinubu</span>
                                    <img className="verified" src={VerifiedIcon} alt="verified" />
                                </div>
                                <div className="item">
                                    <img src={ProfileImg} alt="profile image" />
                                    <span>Ahmed Tinubu</span>
                                    <img className="verified" src={VerifiedIcon} alt="verified" />
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <div className="associated">
                                        <img src={ProfileImg} alt="" />
                                        <img src={ProfileImg} alt="" />
                                        <div className="others">
                                            <span>+3</span>
                                        </div>
                                        <Button variant="plane" size="smaller"> + Follow</Button>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="associated">
                                        <img src={ProfileImg} alt="" />
                                        <img src={ProfileImg} alt="" />
                                        <div className="others">
                                            <span>+3</span>
                                        </div>
                                        <Button variant="plane" size="smaller"> + Follow</Button>
                                    </div>
                                </div>
                                
                            </li>
                        </ul>
                    </CustomComponent>
                </section>
                <section className="sidebar">
                    <Profile profileType="full" />

                    <section>
                        <h3>Top Users</h3>
                        <ul>
                            <li>
                                <div className="item">
                                    <img src={ProfileImg} alt="profile image" />
                                    <span>#User438hgdw</span>
                                    <span>#120.54k</span>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <img src={ProfileImg} alt="profile image" />
                                    <span>#User438hgdw</span>
                                    <span>#120.54k</span>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <img src={ProfileImg} alt="profile image" />
                                    <span>#User438hgdw</span>
                                    <span>#120.54k</span>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <img src={ProfileImg} alt="profile image" />
                                    <span>#User438hgdw</span>
                                    <span>#120.54k</span>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <img src={ProfileImg} alt="profile image" />
                                    <span>#User438hgdw</span>
                                    <span>#120.54k</span>
                                </div>
                            </li>
                        </ul>
                    </section>
                </section>
            </Main>
        </>
        
    )
}

type customProps = {
    children: ReactNode
    className?: string
}
function CustomComponent(props: customProps) {
    const { children, className } = props
    const style = className? `custom ${className}`: 'custom'
    return (
        <div className={style}>
            {children}
        </div>
    )
}

export { CustomComponent }
