import { use} from 'react';
import ProductCard from './ProductCard';

const Products = ({ productPromise, carts, setCarts}) => {

    const productData = use(productPromise)
    return (
        <>
            <div className='max-w-300 mx-auto my-28'>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5'>
                    {
                        productData.map((products) =>
                            <ProductCard key={products.id} products={products} carts={carts} setCarts={setCarts} />
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Products;