import { useCheckoutStore } from '../store/useCheckoutStore';

const useCheckStep = (currentStep: number) => {
  let isBackDisabled = false;
  let isContinueDisabled = false;

  const selectedProducts = useCheckoutStore((store) => store.selectedProducts);
  const addressDetails = useCheckoutStore((store) => store.addressDetails);

  if (currentStep === 0) {
    isBackDisabled = true;
    if (selectedProducts.size === 0) {
      isContinueDisabled = true;
    }
  } else if(currentStep === 1) {
    if (!addressDetails) {
        isContinueDisabled = true;
    }
  }

  return { isBackDisabled, isContinueDisabled };
};

export default useCheckStep;
