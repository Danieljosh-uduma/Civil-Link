import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Profile from "../../assets/images/image3.png";
import VerifiedIcon from '../../assets/images/icons/verified.svg'
import Button from "../../components/Button/Button";
import CallIcon from '../../assets/images/icons/call.svg'
import LocationIcon from '../../assets/images/icons/location.svg'
import MailIcon from '../../assets/images/icons/mail.svg'
import OfficeIcon from '../../assets/images/icons/office.svg'
import WebIcon from '../../assets/images/icons/web.svg'
import WriteIcon from '../../assets/images/icons/Write.svg'
import ArrrowRightIcon from '../../assets/images/icons/arrow-right.svg'
import CalenderIcon from '../../assets/images/icons/calendar.svg'
import TimeIcon from '../../assets/images/icons/clock.svg'
import { CustomComponent } from "../Dashboard/Dashboard";
import { Link } from "react-router";


export default function OfficialDetail() {
    return (
        <Main>
            <Header />

            <section className='dir-detail'>
                <section className="detail-1">
                    <section className="detail-child">
                        <div>
                            <img src={Profile} alt="Goverment" />
                        </div>

                        <CustomComponent>
                            <h4>Councilor Adebayo Sola <span><img className="icon" src={VerifiedIcon} alt="verified" /></span></h4>
                            <h4>LGA Chairman</h4>
                            <h4>Lagos Mainland</h4>
                            <h4>Jan 2023 - Dec 2026</h4>
                            <CustomComponent className="Message">
                                <Link to='/messages'>Message</Link>
                            </CustomComponent>
                        </CustomComponent>
                    </section>
                    <CustomComponent className="more-detail">
                        <h4>Councilor Adebayo Sola has served the Lagos Mainland LGA since 2023, focusing on public safety, education reform, and infrastructure improvement</h4>
                        <div>
                            <h4>Focus area:</h4>
                            <ul className="focus-area">
                                <li><Button size="small" rounded='small'>Education</Button></li>
                                <li><Button size="small" rounded='small'>Education</Button></li>
                                <li><Button size="small" rounded='small'>Education</Button></li>
                                <li><Button size="small" rounded='small'>Education</Button></li>
                                <li><Button size="small" rounded='small'>Education</Button></li>
                                <li><Button size="small" rounded='small'>Education</Button></li>
                            </ul>
                        </div>

                        <div>
                            <h4>Contact:</h4>
                            <ul className="contact-list">
                                <li>
                                    <img src={MailIcon} alt="Email address" />
                                    <span>Adebayosola@nggov.example.com</span>
                                </li>
                                <li>
                                    <img src={CallIcon} alt="phone number" />
                                    <span>+2348144556677</span>
                                </li>
                                <li>
                                    <img src={OfficeIcon} alt="office hours" />
                                    <span>Office hours: Mon - Fri (8am - 5pm)</span>
                                </li>
                                <li>
                                    <img src={LocationIcon} alt="location" />
                                    <span>45 Herbert Macaulay Road, Ebute Metta</span>
                                </li>
                                <li>
                                    <img src={WebIcon} alt="website address" />
                                    <span>@sola.nggov</span>
                                </li>
                            </ul>
                        </div>
                    </CustomComponent>
                </section>
                <section className="detail-2">
                    <CustomComponent className="child">
                        <div className="calender">
                            <img src={CalenderIcon} alt="calender" />
                        </div>
                        <p>Upcoming Events the official is hosting or attending</p>
                        <p>Town Hall – April 20 @ 10AM</p>
                        <div className="button">
                            <Button icon={ArrrowRightIcon} variant="button" url="/forum"/>
                        </div>
                    </CustomComponent>
                    <CustomComponent className="child">
                        <h4>Recent Activity</h4>
                        <h5>
                            Water Supply Project Begins in Ebute Metta
                            <span>
                                <img src={TimeIcon} alt="time" />
                                2 hours ago
                            </span>
                        </h5>
                        <ul className="activity-list">
                            <li>
                                <span className="img">
                                    <img src={WriteIcon} alt="posts" />
                                </span>
                                <p>Construction of a new borehole system has started in Ward B. Completion expected by June.</p>
                            </li>
                            <li>
                                <span className="img">
                                    <img src={WriteIcon} alt="posts" />
                                </span>
                                <p>Construction of a new borehole system has started in Ward B. Completion expected by June.</p>
                            </li>
                            <li>
                                <span className="img">
                                    <img src={WriteIcon} alt="posts" />
                                </span>
                                <p>Construction of a new borehole system has started in Ward B. Completion expected by June.</p>
                            </li>
                        </ul>
                    </CustomComponent>
                </section>
           </section>

        </Main>
    )
}