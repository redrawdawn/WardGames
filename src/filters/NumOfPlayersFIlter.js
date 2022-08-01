import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export const NumOfPlayersFilter = ({gameFilters, setGameFilters}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const setFilterValue = (minutes) => {
        if (gameFilters.numOfPlayers && gameFilters.numOfPlayers === minutes) return

        let newFilters = { numOfPlayers: minutes }
        setGameFilters(filters => ({
            ...filters,
            ...newFilters
        }))
    }

    return (
        <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
        <DropdownToggle caret color="dark">
          Players
        </DropdownToggle>
        <DropdownMenu dark>
            <DropdownItem><div onClick={() => setFilterValue(1)}>1</div></DropdownItem>
            <DropdownItem><div onClick={() => setFilterValue(2)}>2</div></DropdownItem>
            <DropdownItem><div onClick={() => setFilterValue(3)}>3</div></DropdownItem>
            <DropdownItem><div onClick={() => setFilterValue(4)}>4</div></DropdownItem>
            <DropdownItem><div onClick={() => setFilterValue(5)}>5</div></DropdownItem>
            <DropdownItem><div onClick={() => setFilterValue(6)}>6</div></DropdownItem>
            <DropdownItem><div onClick={() => setFilterValue(7)}>7</div></DropdownItem>
            <DropdownItem><div onClick={() => setFilterValue(8)}>8</div></DropdownItem>
            <DropdownItem><div onClick={() => setFilterValue(9)}>9</div></DropdownItem>
            <DropdownItem><div onClick={() => setFilterValue(10)}>10</div></DropdownItem>
            <DropdownItem><div onClick={() => setFilterValue(11)}>11</div></DropdownItem>
            <DropdownItem>12+</DropdownItem>
            
        </DropdownMenu>
        
        
      </Dropdown>
    )
}