import AddressSelection from "../molecules/AddressSelection";
import ProductList from "../molecules/ProductList";
import { useStepStore } from "../../store/useStepStore";
import Checkout from "../molecules/Checkout";
import Success from "../molecules/Success";

const ProductJourney = () => {
  const currentStep = useStepStore((state) => state.currentStep);
  return (
    <div className="px-4 pb-6 w-full h-full min-h-screen pt-96 md:pt-28 md:pr-105">
      {currentStep === 0 && <ProductList />}
      {currentStep === 1 && <AddressSelection />}
      {currentStep === 2 && <Checkout />}
      {currentStep === 3 && <Success />}
    </div>
  );
};

export default ProductJourney;
