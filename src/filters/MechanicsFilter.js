import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { GetMechanics } from '../modules/LookupsManager'


export const MechanicsFilter = ({gameFilters, setGameFilters}) => {
    const [mechanics, setMechanics] = useState([])
    const [dropdownOpen, setDropdownOpen] = useState(false)

    useEffect(() => {
        GetMechanics().then(m => setMechanics(m))
    }, [])

    
    const setFilterValue = (id) => {
        if (gameFilters.mechanicsFilter && gameFilters.mechanicsFilter === id) return

        let newFilters = { mechanicsFilter: id }
        setGameFilters(filters => ({
            ...filters,
            ...newFilters
        }))
    }

    let selectedMechanic = mechanics.find(c => c.id == gameFilters.mechanicsFilter)
    let label = selectedMechanic ? selectedMechanic.name : "Mechanic"

    return (
        <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
        <DropdownToggle caret color="dark" size="sm">
            {label}
        </DropdownToggle>
        <DropdownMenu dark>
            {
                mechanics.map(m => {
                    return <DropdownItem key={m.id}><div onClick={() => setFilterValue(m.id)}>{m.name}</div></DropdownItem>
                })
            }
          
          
        </DropdownMenu>
      </Dropdown>
    )
}