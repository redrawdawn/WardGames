import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { GetMechanics } from '../modules/LookupsManager'


export const MechanicsFilter = () => {
    const [mechanics, setMechanics] = useState([])
    const [dropdownOpen, setDropdownOpen] = useState(false)

    useEffect(() => {
        GetMechanics().then(m => setMechanics(m))
    }, [])
    

    return (
        <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
        <DropdownToggle caret color="dark">
          Mechanics
        </DropdownToggle>
        <DropdownMenu dark>
            {
                mechanics.map(m => {
                    return <DropdownItem key={m.id}>{m.name}</DropdownItem>
                })
            }
          
          
        </DropdownMenu>
      </Dropdown>
    )
}