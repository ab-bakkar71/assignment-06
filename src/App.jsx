import { Suspense, useState } from 'react';
import './App.css'
import Hero from './Components/Hero'
import NavBar from './Components/NavBar'
import Products from './Components/Products';
import Highlights from './Components/Highlights';
import Cart from './Components/Cart';
import ProductTitle from './Components/ProductTitle';
import GetStarted from './Components/GetStarted';
import Pricing from './Components/Pricing';
import Workflow from './Components/Workflow';

const fetchProduct = async() => {
  const rsc = await fetch('/data.json');
  return rsc.json();
}
const productPromise = fetchProduct();

function App() {
 

const[ProductType, setProductType] = useState('products')
const[carts, setCarts]= useState([]);

  return (
    <>
    <NavBar carts={carts}/>
    <Hero/>
    <Highlights/>

    <ProductTitle ProductType={ProductType} carts={carts} setProductType={setProductType}/>

    {
      ProductType === 'products' && 
      <Products productPromise={productPromise} carts={carts} setCarts={setCarts} ProductType={ProductType} setProductType={setProductType}/>
    }

    {ProductType === 'cart' && <Cart carts={carts} setCarts={setCarts}/>}

    <GetStarted/>
    <Pricing/>
    <Workflow/>

    </>
  )
}

export default App
