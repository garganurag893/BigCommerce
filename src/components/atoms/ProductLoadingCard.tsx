const ProductLoadingCard = () => (
  <li className="mx-3 my-6 max-w-xxs sm:w-72 rounded overflow-hidden hover:shadow-lg hover:scale-105 duration-300">
    <div className="animate-pulse">
      <div className="w-full bg-slate-400 h-64 rounded"></div>
      <div className="py-2">
        <div className="w-full h-6 bg-slate-400 rounded mb-2"></div>
        <div className="w-full h-4 bg-slate-400 rounded"></div>
      </div>
    </div>
  </li>
);

export default ProductLoadingCard;
