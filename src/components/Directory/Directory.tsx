import Card from "../Card/Card";
import './Directory.css'
import { cardProps } from "../../pages/Directories/Data";
import Profile1 from "../../assets/images/image1.png";
import Profile2 from "../../assets/images/image2.png";
import Profile3 from "../../assets/images/image3.png";
import Profile4 from "../../assets/images/image4.png";
import { ReactNode } from "react";



type dirProps = {
    data: cardProps[]
    extend?: boolean
    children?: ReactNode
}

export default function Directory(props: dirProps) {
    const { data, extend, children } = props
    const profiles = [Profile1, Profile2, Profile3, Profile4]
    const randomImg = profiles[Math.floor(Math.random() * 4)]

    return (
        <section className={extend? 'main-directory extend': 'main-directory'}>
            <h2 className="h2">{children}</h2>
            {Directory.length !== 0? <div className="directory">
                {data.map(card => <Card key={card.fullName} _id={card._id} pic={randomImg} fullName={card.fullName} position={card.position}/>)}
            </div>:
                <>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </>
            }
        </section>
    )

}