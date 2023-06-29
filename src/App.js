import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//importing components
import TypesExample from './components/componentone';
import NavScrollExample from './components/navbar';
import AdditionalContentExample from './components/alertheading';
import KitchenSinkExample from './components/cardone';
import HeaderAndFooterExample from './components/cardthree';
import WithHeaderAndQuoteExample from './components/cardtwo';

//Exporting components
function App() {
  return (
    <>
    <NavScrollExample />
    <TypesExample />
    <AdditionalContentExample/>
    <KitchenSinkExample/>
    <HeaderAndFooterExample/>
    <WithHeaderAndQuoteExample/>
    </>
  );
}

export default App;
