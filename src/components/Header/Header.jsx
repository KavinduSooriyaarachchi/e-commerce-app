import menu from '../../img/menu-svgrepo-com.svg'
import search from '../../img/search-alt-1-svgrepo-com.svg'
import cart from '../../img/cart-shopping-svgrepo-com.svg'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-[100] w-full p-5 bg-my-background flex items-center justify-between drop-shadow-header-shadow ">
      {/* {Header left} */}
        <div className='flex items-center'>
          <img src={menu} alt="menu" className='w-6 h-6 object-contain cursor-pointer' />
          <h1 className='text-sm font-bold ml-2'>
            AUK <span className='text-[#c82196]'>DEV</span>
          </h1>
        
        <div className='flex items-center rounded-full bg-[#fdf3f3] ml-2 overflow-hidden'>
          <input type="text" placeholder="Search" className='outline-none p-2 font-semibold text-sm w-[200px] bg-inherit ml-1' />
          <img src={search} alt="search"className='w-6 h-6 object-contain cursor-pointer mr-2' />
        </div>
       </div>



      {/* {Header Right} */}

       <img src={cart} alt="cart" className='w-6 h-6 object-contain cursor-pointer' />



    </header>
  )
}

export default Header