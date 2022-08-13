import { useEffect } from 'react';
import { Row } from 'reactstrap';

export const SearchBar = ({gameFilters, setGameFilters}) => {
    
    // When filters change, clear input box if there is no search filter
    useEffect(() => {
        if (!gameFilters.searchFilter)
            document.querySelector("#searchBarInput").value = ""
    }, [gameFilters])

    const setFilterValue = () => {
        // Get the input box value
        let searchString = document.querySelector("#searchBarInput").value
        
        // If there is a search filter and it is different than the existing one...
        if (gameFilters.searchFilter && gameFilters.searchFilter === searchString) return
        // .. add it to the existing filters.
        let newFilters = { searchFilter: searchString }
        setGameFilters(filters => ({
            ...filters,
            ...newFilters
        }))
    }

    // Call setFilterValue if enter is pressed
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setFilterValue()
        }
    }

    return(<>
        <Row>
            <div>
                <input id="searchBarInput" type="text" placeholder="Game name..."  onKeyDown={handleKeyDown} ></input>
                <span onClick={setFilterValue}>🔍</span>
            </div>
        </Row>
    </>)
}