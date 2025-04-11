import SideBar from "../../components/SideBar/SideBar"
import Main from "../../components/Main/Main"
import Header from "../../components/Header/Header"
import Profile from "../../components/Header/Profile"
import Directory from "../../components/Directory/Directory"
import ProfileImg from '../../assets/images/image4.png'
import { ReactNode } from "react"
// import Button from "../../components/Button/Button"

export default function Dashboard() {

    return (
        <>
            <SideBar />
            <Main className="dashboard">
                <section className="dashboard-main">
                    <Header style="simple" />
                    <Directory />
                    
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
                        <h1>hello</h1>
                    </CustomComponent>
                </section>
                <section className="sidebar">
                    <Profile profileType="full" />
                </section>
            </Main>
        </>
        
    )
}


function CustomComponent({children}: {children: ReactNode}) {

    return (
        <div className="custom">
            {children}
        </div>
    )
}