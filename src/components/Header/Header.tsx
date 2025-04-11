import Profile from './Profile'
import SearchBar from './SearchBar'
import './Header.css'
import { ReactNode } from 'react'

type headerProps = {
    style?: 'simple' | 'secondary'
    children?: ReactNode
}

export default function Header(props: headerProps) {
    const { style, children } = props

    if (style === 'simple') {
        return (
            <header className='simple'>
                <h1>Welcome!</h1>
                <SearchBar />
            </header>
            
        )
    } else if (style === 'secondary') {
        return (
            <header className='secondary'>
                <h1>
                    {children}
                    <Profile />    
                </h1>
                <SearchBar span={true} />
            </header>
        )
    } else {
        return (
            <header className='normal'>
                <SearchBar />
                <Profile />
            </header>
        )
    }
}




