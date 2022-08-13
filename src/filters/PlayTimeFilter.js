import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export const PlayTimeFilter = ({gameFilters, setGameFilters}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const setFilterValue = (minutes) => {
        if (gameFilters.playTimeFilter && gameFilters.playTimeFilter === minutes) return

        let newFilters = { playTimeFilter: minutes }
        setGameFilters(filters => ({
            ...filters,
            ...newFilters
        }))
    }

    let label = gameFilters.playTimeFilter ? gameFilters.playTimeFilter.toString() + " Minutes" : "Playtime"

    return (
        <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
        <DropdownToggle caret color="dark" size="sm">
            {label}
        </DropdownToggle>
        <DropdownMenu dark>
            <DropdownItem><div onClick={() => setFilterValue(10)}>10 minutes</div></DropdownItem>
            <DropdownItem><div onClick={() => setFilterValue(20)}>20 minutes</div></DropdownItem>
            <DropdownItem><div onClick={() => setFilterValue(30)}>30 minutes</div></DropdownItem>
            <DropdownItem><div onClick={() => setFilterValue(40)}>40 minutes</div></DropdownItem>
            <DropdownItem><div onClick={() => setFilterValue(60)}>60 minutes</div></DropdownItem>
            <DropdownItem><div onClick={() => setFilterValue(90)}>90 minutes</div></DropdownItem>
            <DropdownItem><div onClick={() => setFilterValue(120)}>120 minutes</div></DropdownItem>
            <DropdownItem><div onClick={() => setFilterValue(180)}>180 minutes</div></DropdownItem>
            <DropdownItem>180 + minutes</DropdownItem>            
        </DropdownMenu>
        
        
      </Dropdown>
    )
}