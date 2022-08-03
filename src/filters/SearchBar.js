import { Row } from 'reactstrap';

export const SearchBar = ({gameFilters, setGameFilters}) => {
    

    const setFilterValue = () => {
        let name = document.querySelector("#searchBarInput").value
        
        if (gameFilters.searchFilter && gameFilters.searchFilter === name) return

        let newFilters = { searchFilter: name }
        setGameFilters(filters => ({
            ...filters,
            ...newFilters
        }))
    }

    return(<>
        <Row>
            <div>
                <input id="searchBarInput" type="text" placeholder="Game name..." ></input>
                <span onClick={setFilterValue}>🔍</span>
            </div>
        </Row>
    </>)
}