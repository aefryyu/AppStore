import React, {useMemo, useState} from 'react';
import Navigation from "../../components/Navigation/Navigation";
import FilterIcon from "../../components/common/FilterIcon";
import content from '../../data/content.json'
import Categories from "../../components/Filter/Categories";
import PriceFilter from "../../components/Filter/PriceFilter";
import ColorsFilter from "../../components/Filter/ColorsFilter";
import SizeFilter from "../../components/Filter/SizeFilter";
import ProductCard from "./ProductCard";

const categories = content?.categories


const ProductListPage = ({categoryType}) => {

    const [products,setProducts] = useState([]);

    const categoryContent =  useMemo(() => {
        return categories?.find((category)=> category.code === categoryType );
    }, [categoryType]);

    const productListItems = useMemo( () => {
        return content?.products?.filter((product)=> product?.category_id === categoryContent?.id);
    },[categoryContent])

    return (
        <div>
            <Navigation />
            <div className='flex'>
                <div className='w-[20%] p-[20px] border rounded-lg m-[20px]'>
                    {/*filter*/}
                    <div className='flex justify-between'>
                        <p className='text-[16px] text-gray-600'>Filter </p>
                        <FilterIcon />
                    </div>

                    <div>
                        <p className='text-[16px] text-black mt-5'>Categories </p>
                        <Categories types={categoryContent?.types} />
                        <hr></hr>
                    </div>
                    <div>
                        {/*price*/}
                        <PriceFilter />
                        <hr></hr>
                        {/*colors*/}
                        <ColorsFilter colors={categoryContent?.meta_data?.colors} />
                        <hr></hr>
                        {/*Sizes*/}
                        <SizeFilter sizes={categoryContent?.meta_data?.sizes} />
                    </div>
                </div>

                <div className='p-[15px]'>
                    <p className='text-black text-lg'>{categoryContent?.description}</p>
                    {/*product*/}
                    <div className='pt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 px-4'>
                        {productListItems?.map((item,index)=>(
                            <ProductCard key={index} {...item}/>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductListPage;