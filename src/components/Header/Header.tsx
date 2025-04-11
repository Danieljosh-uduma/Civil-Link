import SearchIcon from '../../assets/images/icons/search-normal.svg'


export default function Header() {
    return <h1>Hello</h1>
}

function SearchBar() {
    return (
        <>
            <label htmlFor="search">
                <img src={SearchIcon} alt="search icon" />
                <input type="text" name="search" id="search" placeholder="Search"/>
            </label>
        </>
    )
}

export { SearchBar }