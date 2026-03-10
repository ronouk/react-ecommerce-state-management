import { BaggageClaim } from 'lucide-react';
import "./navbar.css"

const Navbar = ({ page, setPage, PAGES, cartCounter }) => {

    return (
        // <div className='flex justify-between items-center'>
        <div className='grid grid-cols-3 items-center text-center py-5'>
            <div
                onClick={() => setPage(PAGES.PRODUCTS)} className='menu-logo text-xl lg:text-2xl flex justify-start cursor-pointer'>Shoppr.</div>

            <div className='menu-button flex gap-3 justify-center text-sm'>
                {/* product page */}
                <button
                    onClick={() => setPage(PAGES.PRODUCTS)}
                    className={`menu-button px-2 py-1 p lg:px-3 lg:py-2 ${page === PAGES.PRODUCTS ? "active" : ""}`}>Products
                </button>
                {/* cart page button */}
                <button
                    onClick={() => setPage(PAGES.CART)}
                    className={`menu-button px-2 py-1 p lg:px-3 lg:py-2 ${page === PAGES.CART ? "active" : ""}`}>Cart
                </button>
            </div>

            {/* cart */}
            <div onClick={() => setPage(PAGES.CART)}

                className='flex gap-2 items-center justify-end  cursor-pointer'>
                <BaggageClaim width={16} />
                <span className='text-xl transition hover:text-[#E8FF47]'>Cart</span>
                <span id='cart-counter' className={`${cartCounter === 0 ? "hidden" : "visible"} w-5 h-5 flex justify-center items-center bg-[#E8FF47] rounded-full text-black font-bold`}>{cartCounter}</span>
            </div>


        </div>
    );
};

export default Navbar;