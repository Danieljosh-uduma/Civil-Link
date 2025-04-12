import Main from "../../components/Main/Main"
import Directory from "../../components/Directory/Directory"
import Header from "../../components/Header/Header"
import cards from "./Data"



export default function Directories() {

    return (
        <Main>
            <section className="main-dir">
                <Header style="secondary">Government Directory</Header>
                <Directory data={cards} extend={true}>Federal Officials</Directory>
                <Directory data={cards} extend={true}>State Officials</Directory>
                <Directory data={cards} extend={true}>Local Officials</Directory>
            </section>
        </Main>
    )
}