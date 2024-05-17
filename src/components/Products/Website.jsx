import React, { useState } from 'react'
import FilterByWebsite from './FilterByProducts'
import ProductCard from './Card'
import { productsData } from '@/constants/data'

const Website = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  return (
    <div className='grid grid-cols-4 gap-5 mt-4 items-start'>
      <FilterByWebsite setSelectedProduct={setSelectedProduct} />
      <div className='col-span-3 grid grid-cols-3 xl:grid-cols-4 gap-5'>
        {
          productsData.map((data, index) => (
            <ProductCard {...data} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Website