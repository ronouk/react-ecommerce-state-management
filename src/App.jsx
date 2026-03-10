import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Cart from './components/cart/Cart'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import CommonItems from './components/common-items/CommonItems'
import axios from "axios"
import { toast, ToastContainer } from 'react-toastify'


function App() {

  const [cartCounter, setCartCounter] = useState(0) //to check how many items in cart

  const [productsInCart, setProductsInCart] = useState([]); //to add or remove product in not

  const PAGES = { PRODUCTS: "products", CART: "cart" };
  const [page, setPage] = useState(PAGES.PRODUCTS); //to set which page is active

  const [products, setProducts] = useState([]); //to set the products

  // function

  //inCart function
  const inCartCheck = (product) => {
    // setInCart(current => !current)

    console.log(product)

    const isAlreadyInCart = productsInCart.some(singleProduct => singleProduct.id === product.id);

    const updatedProductsToCart = isAlreadyInCart ?
      productsInCart.filter(item => item.id !== product.id)
      :
      [...productsInCart, product]

    setProductsInCart(updatedProductsToCart)

    setCartCounter(updatedProductsToCart.length)


    // const addProductToCart = [...productInCart, product];
    console.log(updatedProductsToCart)

    isAlreadyInCart ?
      toast(<span className='text-red-600'>Product removed</span>, {autoClose: 150})
      :
      toast(<span className='text-green-700'>Product added</span>, {autoClose: 150});

  }

  // fetch the products data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products)
      }

      catch (error) {
        console.log(error)
      }
    }
    fetchProducts();
  }, [])


  return (
    <div className='bg-gray-950'>
      {/* navbar */}
      <div className='bg-gray-800 sticky top-0 z-10 shadow shadow-gray-700'>
        <div className='w-11/12 lg:w-5/6 mx-auto'>
          <Navbar
            page={page}
            setPage={setPage}
            PAGES={PAGES}
            cartCounter={cartCounter}
          ></Navbar>
        </div>
      </div>
      <div className='container w-11/12 lg:w-5/6 mx-auto space-y-12 min-h-screen'>

        <CommonItems
          page={page}
          PAGES={PAGES}
          productsInCart={productsInCart}
        ></CommonItems>

        {
          page === PAGES.PRODUCTS ?
            <Suspense fallback={"Data Loading..."}>
              <Products
                products={products}
                productsInCart={productsInCart}
                setProductsInCart={setProductsInCart}
                inCartCheck={inCartCheck}
              ></Products>
            </Suspense>
            :
            <Cart
              productsInCart={productsInCart}
            ></Cart>
        }

        <ToastContainer />
      </div>
    </div>
  )
}

export default App
