import { useCheckoutStore } from '../../store/useCheckoutStore';
import { useStepStore } from '../../store/useStepStore';
import Button from '../atoms/Button';

const Success = () => {
  const restart = useStepStore((state) => state.restart);
  const clearStore = useCheckoutStore((state) => state.clearStore);
  const handleRestart = () => {
    clearStore();
    restart();
  };
  return (
    <div className="flex flex-col justify-center items-center h-full px-4">
      <img
        src="/assets/png/check.png"
        alt="Success"
        height={200}
        width={200}
        className="object-contain"
      />
      <h2 className="text-green-400 font-bold text-xl text-center">
        Thank you, your order has been placed.
      </h2>
      <Button
        text="Continue Shopping"
        className="mt-8"
        onClick={handleRestart}
      />
    </div>
  );
};

export default Success;
