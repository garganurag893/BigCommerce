import { shallow } from 'zustand/shallow';
import { useCheckoutStore } from '../../store/useCheckoutStore';
import ProductCard from '../atoms/ProductCard';
import { ReactNode } from 'react';

const Checkout = () => {
  const { selectedProducts, addressDetails } =
    useCheckoutStore(
      (state) => ({
        selectedProducts: state.selectedProducts,
        addressDetails: state.addressDetails,
      }),
      shallow
    );
  const { firstName, lastName, streetAddress, zip, state, city } =
    addressDetails || {};
  const renderSelectedProducts = () => {
    const products: ReactNode[] = [];
    selectedProducts.forEach((value, key) => {
      products.push(<ProductCard key={key} product={value} />);
    });
    return products;
  };
  const totalCash = () => {
    let total = 0;
    selectedProducts.forEach((value) => {
      total = total + (value?.price || 0);
    });
    return total;
  };
  return (
    <>
      <h2 className="text-2xl font-medium text-center mb-8">Checkout</h2>
      <h3 className="font-bold text-lg mb-2 px-4">Selected Products:</h3>
      <ul className="flex flex-row flex-wrap justify-start my-4">
        {renderSelectedProducts()}
      </ul>
      <div className="px-4 flex flex-row flex-wrap items-center justify-between mt-8">
        <div className="mr-4 my-4">
          <h3 className="font-bold text-lg mb-2">Address:</h3>
          <p>{`${firstName} ${lastName}`} </p>
          <p className="w-30">{`${streetAddress}`}</p>
          <p>{`${city} | ${state} | ${zip}`}</p>
        </div>
        <div className="min-w-xxs my-4">
          <h3 className="font-bold text-lg mb-2">Cart Total:</h3>
          <div className="flex flex-row items-center justify-between">
            <p>MRP: </p>
            <p className="font-bold">{`$ ${totalCash()}`}</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p>Discount: </p>
            <p className="font-bold">10%</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p>Final Price: </p>
            <p className="font-bold">{`$ ${(totalCash() / 100 * 90).toFixed(2)}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
