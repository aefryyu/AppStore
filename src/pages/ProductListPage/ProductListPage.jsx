import React, {useMemo} from 'react';
import Navigation from "../../components/Navigation/Navigation";
import FilterIcon from "../../components/common/FilterIcon";
import content from '../../data/content.json'
import category from "../../components/Sections/Categories/Category";

const categories = content?.categories

const ProductListPage = ({categoryType}) => {

    const categoryContent =  useMemo(() => {
        return categories?.find((category)=> category.code === categoryType );
    }, [categoryType]);

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
                    </div>
                </div>

                <div className='p-[15px]'>
                    <p className='text-black text-lg'>{categoryContent?.description}</p>
                    {/*product*/}
                </div>
            </div>
        </div>
    )
}

export default ProductListPage;