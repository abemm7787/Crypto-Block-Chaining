import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import openseaLogo from '../assets/optimus.png'
import meicon from '../assets/me.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import toast from 'react-hot-toast'



const style = {
  wrapper: `bg-[#3c366b] w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-mx-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}



const Header = () => {
  return (
    <div className={style.wrapper}>

      <Link href="/">
        <div className={style.logoContainer}>
          <Image src={openseaLogo} height={40} width={40} />
          <div className={style.logoText}> Optimus</div>
        </div>
      </Link>
      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={style.searchInput}
          placeholder="Search collections"
        />
      </div>

 
      <div className={style.headerItems}>
        <Link href="/collections/0x2EB2D747886775889B0b3107ceD61f7661B1a4D3">
          <div className={style.headerItem}> Gallary </div>
        </Link>
      

        <div onClick={(t)=> toast.custom( <div
    className={`${
      t.visible ? 'animate-enter' : 'animate-leave'
    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  >
    <div className="flex-1 w-0 p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-0.5">
          <img
            className="h-10 w-10 rounded-full"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFwZ7VftJO-SA/profile-displayphoto-shrink_800_800/0/1641674964943?e=1652918400&v=beta&t=jy06J012vYRZhcoCsd5gD6GmjVzgB81u-Sty-ZhMG5E"
            alt=""
          />
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium text-gray-900">
           Abraham-Mirambeaux
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Boom! Tab under construction, check out all of our NFT collections in Gallary!    
          </p>
        </div>
      </div>
    </div>
    <div className="flex border-l border-gray-200">
      <button
        onClick={() => toast.dismiss(t.id)}
        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Close
      </button>
    </div>
  </div>) } className={style.headerItem}> Trades </div>
        
        
        
        
        <div onClick={(t) => toast.custom(

<div
    className={`${
      t.visible ? 'animate-enter' : 'animate-leave'
    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  >
    <div className="flex-1 w-0 p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-0.5">
          <img
            className="h-10 w-10 rounded-full"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFwZ7VftJO-SA/profile-displayphoto-shrink_800_800/0/1641674964943?e=1652918400&v=beta&t=jy06J012vYRZhcoCsd5gD6GmjVzgB81u-Sty-ZhMG5E"
            alt=""
          />
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium text-gray-900">
           Abraham-Mirambeaux
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Come back sometime next week will have an opensource crypto trading bot to backtrack long and short term capital gains.    
          </p>
        </div>
      </div>
    </div>
    <div className="flex border-l border-gray-200">
      <button
        onClick={() => toast.dismiss(t.id)}
        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Close
      </button>
    </div>
  </div>

        )  }
        
        className={style.headerItem}> Bots </div>
        <div  onClick={(t)=>(<div
    className={`${
      t.visible ? 'animate-enter' : 'animate-leave'
    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  >
    <div className="flex-1 w-0 p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-0.5">
          <img
            className="h-10 w-10 rounded-full"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFwZ7VftJO-SA/profile-displayphoto-shrink_800_800/0/1641674964943?e=1652918400&v=beta&t=jy06J012vYRZhcoCsd5gD6GmjVzgB81u-Sty-ZhMG5E"
            alt=""
          />
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium text-gray-900">
           Abraham-Mirambeaux
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Boom! Tab under construction, check out all of our NFT collections in Gallary!    
          </p>
        </div>
      </div>
    </div>
    <div className="flex border-l border-gray-200">
      <button
        onClick={() => toast.dismiss(t.id)}
        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Close
      </button>
    </div>
  </div>)} className={style.headerItem}>  </div>
        <div className={style.headerIcon}>
          <CgProfile />
        </div>
        <div className={style.headerIcon}>
          <MdOutlineAccountBalanceWallet />
        </div>
      </div>
    </div>
  )
}

export default Header
