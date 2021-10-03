import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import Product from './components/Products/Products';
import ActiveCategory from './components/ActiveCategory/ActiveCategory';

function App() {
  return (
    <>
    <Header/>
       <Categories/>
        <ActiveCategory/>
        <Product/>
    <Footer/>
    </>
  );
}

export default App;
