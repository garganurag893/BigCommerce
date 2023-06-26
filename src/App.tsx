import Header from './components/atoms/Header';
import ProductJourney from './components/organisms/ProductJourney';
import Steps from './components/organisms/Steps';

const App = () => (
  <div className="bg-background h-full min-h-screen overflow-hidden font-mono">
    <Header />
    <div className="flex flex-col-reverse md:flex-row relative h-full">
      <ProductJourney />
      <Steps />
    </div>
  </div>
);

export default App;
