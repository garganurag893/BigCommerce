import { FC, useState } from "react";
import { COMMON_ERROR_MESSAGE, STEPS_DATA } from "../../constant";
import Button from "../atoms/Button";
import { useStepStore } from "../../store/useStepStore";
import useCheckStep from "../../hooks/useCheckStep";
import { useCheckoutStore } from "../../store/useCheckoutStore";
import { shallow } from "zustand/shallow";

const Steps: FC<{}> = () => {
  const handleSubmitDetails = useCheckoutStore(
    (state) => state.handleSubmitDetails
  );
  const { currentStep, handleBack, handleContinue } = useStepStore(
    (state) => ({
      currentStep: state.currentStep,
      handleBack: state.handleBack,
      handleContinue: state.handleContinue,
    }),
    shallow
  );
  const { isBackDisabled, isContinueDisabled } = useCheckStep(currentStep);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleSubmit = async () => {
    try {
      setIsLoadingSubmit(true);
      setErrorMessage(null);
      await handleSubmitDetails();
      // throw new Error("Test");
      handleContinue();
    } catch (err) {
      setErrorMessage(COMMON_ERROR_MESSAGE);
    } finally {
      setIsLoadingSubmit(false);
    }
  };
  return (
    <div className="w-full fixed md:max-w-xs md:h-full px-4 pt-28 pb-6 top-0 right-0 border-b md:border-b-0 md:border-l md:border-slate-300 bg-white">
      {STEPS_DATA.map((step, index) => {
        const isCompleted = currentStep > index;
        const isLastIdx = index === STEPS_DATA.length - 1;
        const { title, description } = step || {};
        return (
          <div key={title} className="mb-2">
            <div className="flex flex-row items-center">
              <div
                className={`rounded-full h-6 w-6 flex justify-center items-center shrink-0 transition-colors duration-300 ${
                  isCompleted ? "bg-green-500" : "bg-black"
                }`}
              >
                {isCompleted ? (
                  <img
                    src="/assets/png/tick.png"
                    alt="tick"
                    height={12}
                    width={12}
                  />
                ) : (
                  <p className="text-white font-semibold text-xs">
                    {index + 1}
                  </p>
                )}
              </div>
              <p className="ml-2 font-semibold text-base">{title}</p>
            </div>
            <div
              className={`pl-3 ${isLastIdx ? "" : "border-l border-l-black"} ${
                currentStep === index
                  ? "max-h-96 duration-700"
                  : "max-h-0 duration-200"
              } ml-3 mt-1 overflow-hidden  transition-all`}
            >
              <p className="ml-2 font-light text-base">{description}</p>
              <div className="flex flex-row items-center">
                <Button
                  text={isLastIdx ? "Buy" : "Continue"}
                  disabled={isContinueDisabled}
                  isLoading={isLoadingSubmit}
                  className="m-2"
                  onClick={isLastIdx ? handleSubmit : handleContinue}
                />
                <Button
                  text="Back"
                  className="m-2"
                  disabled={isBackDisabled}
                  onClick={handleBack}
                />
              </div>
              {isLastIdx && errorMessage && (
                <p className="text-red-500 text-sm italic ml-2">
                  {errorMessage}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
