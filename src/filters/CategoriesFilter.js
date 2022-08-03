import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { GetCategories } from '../modules/LookupsManager'


export const CategoriesFilter = ({gameFilters, setGameFilters}) => {
    const [categories, setCategories] = useState([])
    const [dropdownOpen, setDropdownOpen] = useState(false)

    useEffect(() => {
        GetCategories().then(m => setCategories(m))
    }, [])
    
    const setFilterValue = (id) => {
        if (gameFilters.categoriesFilter && gameFilters.categoriesFilter === id) return

        let newFilters = { categoriesFilter: id }
        setGameFilters(filters => ({
            ...filters,
            ...newFilters
        }))
    }


    return (
        <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
        <DropdownToggle caret color="dark">
          Categories
        </DropdownToggle>
        <DropdownMenu dark>
            {
                categories.map(c => {
                    return <DropdownItem key={c.id}><div onClick={() => setFilterValue(c.id)}>{c.name}</div></DropdownItem>
                })
            }
          
          
        </DropdownMenu>
      </Dropdown>
    )
}