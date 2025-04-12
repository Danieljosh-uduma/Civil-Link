import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Profile from "../../assets/images/image3.png";
import VerifiedIcon from '../../assets/images/icons/verified.svg'
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
                    <CustomComponent>
                        <h1>Hello world</h1>
                    </CustomComponent>
                </section>
                <section className="detail-2">
                    <CustomComponent>
                        <h4>Hello world</h4>
                    </CustomComponent>
                </section>
           </section>

        </Main>
    )
}