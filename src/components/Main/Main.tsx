import { ReactNode } from "react";
import './Main.css'

type mainProps = {
    children: ReactNode
    className?: string
}
export default function Main(props: mainProps) {
    const { children, className } = props

    return (
        <main className={className}>
            {children}
        </main>
    )
}