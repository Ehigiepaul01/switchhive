import { Button } from "../ui";
import { CheckIcon, MixerHorizontalIcon, PlusIcon } from "@radix-ui/react-icons";
import { useGetCategories } from "@/api/product";
import useDisclosure from "@/hooks/useDisclosure";
import CreateProductsSubCategory from "./CreateProductsSubCategory";
import { useState } from "react";
import CreateProductsCategory from "./CreateProductsCategory";

const FilterByProducts = ({ setSelectedProduct }) => {

  const { data: categories, isLoading, isError } = useGetCategories();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { isOpen: isCategoryModalOpen, onClose: onCategoryClose, onOpen: onCategoryOpen } = useDisclosure();
  const [categoryID, setCategoryID] = useState("")

  const handleOpen = (categoryId) => {
    setCategoryID(categoryId)
    onOpen()
  };

  return (
    <aside className="flex flex-col gap-3">
      <Button size="xs" className="w-full">
        <MixerHorizontalIcon className="mr-2 h-[18px] w-[18px]" />
        Filter by
      </Button>
      <div className="flex flex-col gap-3 p-3 border-2 border-gray-100 rounded-md">
        <h4 className="font-medium">Products</h4>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error fetching data</div>}
        {!isLoading && !isError && (!categories || categories.length < 1) && (
          <div>No Categories Found</div>
        )}
        {/* Render Blog if data is available */}
        {!isLoading && !isError && categories && categories.length > 0 && (
          categories.map(data => (
            <fieldset key={data.id} className='flex flex-col gap-2'>
              <legend className="flex gap-3 mb-4 font-medium text-blue-900">
                <CheckIcon className="w-6 h-6 text-white bg-blue-900 rounded" />
                <span>{data.name}</span>
              </legend>
              {data.subCategories.map((product, i) => (
                <div key={product.id} className="flex items-center gap-1 ml-8">
                  <input
                    type="radio"
                    id={data.name}
                    name={data.name}
                    value={product.name}
                    className="w-4 h-4 text-xl accent-blue-900"
                    onChange={() => setSelectedProduct(product.name)}
                  />
                  <label htmlFor={product.name} className='text-sm font-normal'>{product.name}</label>
                </div>
              ))}
              <Button
                variant="ghost"
                size="xs"
                className="justify-start gap-1 p-0 ml-8 text-sm font-light text-blue-700 hover:bg-white"
                onClick={() => handleOpen(data.id)}
              >
                <PlusIcon className='bg-blue-900 rounded-full text-white w-4 h-4 p-[2px]' />
                New Category
              </Button>
            </fieldset>
          ))
        )}
        <Button variant="ghost" size="xs" className="justify-start gap-2 p-0 text-base font-normal text-blue-700 hover:bg-white" onClick={onCategoryOpen}>
          <PlusIcon className='bg-blue-900 rounded text-white w-5 h-5 p-[2px]' />
          Add Category
        </Button>
      </div>
      <Button size="xs">Apply</Button>
      <CreateProductsSubCategory isOpen={isOpen} onClose={onClose} categoryID={categoryID} />
      <CreateProductsCategory isOpen={isCategoryModalOpen} onClose={onCategoryClose}  />
    </aside>
  );
};

export default FilterByProducts;