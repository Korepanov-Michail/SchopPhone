import React from 'react'

import BasketCart from '../../components/basketCart'
import Search from '../../components/search'
import Categories from '../../components/categories'
import SelectByPrice from '../../components/SelectByPrice'

const Sidebar = () => {
  return (
    <div>
      <BasketCart />
      <Search />
      <Categories />
      <SelectByPrice />
    </div>
  )
}

export default Sidebar
