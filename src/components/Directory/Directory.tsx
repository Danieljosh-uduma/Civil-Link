import Card from "../Card/Card";
import './Directory.css'
import { cardProps } from "../../pages/Directories/Data";
import { ReactNode } from "react";


type dirProps = {
    data: cardProps[]
    extend?: boolean
    children?: ReactNode
}

export default function Directory(props: dirProps) {
    const { data, extend, children } = props

    return (
        <section className={extend? 'main-directory extend': 'main-directory'}>
            <h2 className="h2">{children}</h2>
            <div className="directory">
                {data.map(card => <Card key={card.id} img={card.img} name={card.name} title={card.title}/>)}
            </div>
        </section>
    )

}