import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { GetCategories } from '../modules/LookupsManager'


export const CategoriesFilter = () => {
    const [categories, setCategories] = useState([])
    const [dropdownOpen, setDropdownOpen] = useState(false)

    useEffect(() => {
        GetCategories().then(m => setCategories(m))
    }, [])
    

    return (
        <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
        <DropdownToggle caret color="dark">
          Categories
        </DropdownToggle>
        <DropdownMenu dark>
            {
                categories.map(c => {
                    return <DropdownItem key={c.id}>{c.name}</DropdownItem>
                })
            }
          
          
        </DropdownMenu>
      </Dropdown>
    )
}