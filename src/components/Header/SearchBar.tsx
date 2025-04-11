import Button from '../Button/Button'
import SearchIcon from '../../assets/images/icons/search-normal.svg'
import FilterIcon from '../../assets/images/icons/filter.svg'
import ArrowBackImg from '../../assets/images/icons/arrowback.svg'


type searchProps = {
    span?: boolean
}
export default function SearchBar(props: searchProps) {
    const { span } = props

    return (
        <div className='search-bar'>
            <div>
                <Button icon={ArrowBackImg} variant='button' />
            </div>
            <label htmlFor="search" className={span? 'search span': 'search'}>
                <img src={SearchIcon} alt="search icon" />
                <input type="text" name="search" id="search" placeholder="Search"/>
            </label>
            <label htmlFor='location' className='location'>
                <img src={FilterIcon} alt="filter location" />
                <input type="text" name="location" id="Filter location" placeholder='Location' />
            </label>
        </div>
    )
}