import SideBar from "../../components/SideBar/SideBar"
import Main from "../../components/Main/Main"
import Header from "../../components/Header/Header"
import Button from "../../components/Button/Button"

export default function Dashboard() {

    return (
        <>
            <SideBar />
            <Main>
                <Header />
                <Button active={true} url="/dashboard" size="small">New</Button>
            </Main>
        </>
        
    )
}