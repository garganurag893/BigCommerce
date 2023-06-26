import { useEffect, useState } from 'react';
import { shallow } from 'zustand/shallow';
import { useCheckoutStore } from '../../store/useCheckoutStore';
import ProductCard from '../atoms/ProductCard';
import api from '../../service/api';
import { ProductDetails } from '../../types';
import ProductLoadingCard from '../atoms/ProductLoadingCard';

const ProductList = () => {
  const { selectedProducts, handleSelectProduct } = useCheckoutStore(
    (state) => ({
      selectedProducts: state.selectedProducts,
      handleSelectProduct: state.handleSelectProduct,
    }),
    shallow
  );
  const [products, setProducts] = useState<ProductDetails[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const getProducts = async () => {
    try {
      setIsLoading(true);
      const products = await api.get<ProductDetails[]>('/products?limit=15');
      setProducts(products);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <h2 className="text-2xl font-medium text-center mb-4">Men Jackets</h2>
      <ul className="flex flex-row flex-wrap justify-evenly">
        {isLoading ? (
          <>
            {Array(12)
              .fill(1)
              .map((val, index) => (
                <ProductLoadingCard key={index} />
              ))}
          </>
        ) : (
          <>
            {products.map((product, index) => {
              const isSelected = selectedProducts.has(product?.id);
              const handleOnClick = () => {
                handleSelectProduct(product);
              };
              return (
                <ProductCard
                  key={product?.id || index}
                  product={product}
                  onClick={handleOnClick}
                  isSelected={isSelected}
                />
              );
            })}
          </>
        )}
      </ul>
    </>
  );
};

export default ProductList;
