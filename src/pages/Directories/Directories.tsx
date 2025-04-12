import Main from "../../components/Main/Main"
import Directory from "../../components/Directory/Directory"
import Header from "../../components/Header/Header"
import { useContext } from "react"
import { AppContext } from "../../App"
import { cardProps } from "./Data"



export default function Directories() {
    const directory = useContext<cardProps[]>(AppContext)
    const federal: cardProps[] = directory.filter(dir => dir.jurisdiction === 'federal')
    const state: cardProps[] = directory.filter(dir => dir.jurisdiction === 'state')
    const local: cardProps[] = directory.filter(dir => dir.jurisdiction === 'local')

    return (
        <Main>
            <section className="main-dir">
                <Header style="secondary">Government Directory</Header>
                <Directory data={federal} extend={true} key={1}>Federal Officials</Directory>
                <Directory data={state} extend={true} key={2}>State Officials</Directory>
                <Directory data={local} extend={true} key={3}>Local Officials</Directory>
            </section>
        </Main>
    )
}