import { Suspense, useState } from 'react';
import './App.css'
import Hero from './Components/Hero'
import NavBar from './Components/NavBar'
import Products from './Components/Products';
import Highlights from './Components/Highlights';
import Cart from './Components/Cart';

const fetchProduct = async() => {
  const rsc = await fetch('/data.json');
  return rsc.json();
}


function App() {
 const productPromise = fetchProduct();

const[ProductType, setProductType] = useState('products')
const[cart, setCart]= useState([]);

  return (
    <>
    <NavBar/>
    <Hero/>
    <Highlights/>

    {
      ProductType === 'products' && <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <Products productPromise={productPromise} cart={cart} setCart={setCart} ProductType={ProductType} setProductType={setProductType}/>
    </Suspense>
    }

    {ProductType === 'cart' && <Cart cart={cart} setCart={setCart}/>}

    </>
  )
}

export default App
