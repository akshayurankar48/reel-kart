import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { showUploadReels } from "../assets/data";

const UploadReels = () => {
    const [reelbar, setReelbar] = useState(false)

    const showReelbar = () => setReelbar(!reelbar)
  return (
    <>
    <div className="bg-red-300 h-[80px] flex justify-start items-center">
        <Link to="#" className="ml-2 text-3xl bg-none">
         <FaIcons.FaBars onClick={showReelbar}/>
        </Link>
    </div>
    <nav className={reelbar ? "w-[250px] bg-red-900 h-full flex justify-center fixed top-0 -right-full transition-transform duration-[850]" : ""}>
      <ul className='nav-menu-items'>
        <li className='navbar-toggle'>
            <Link to ="#"  className="ml-2 text-3xl bg-none">
                <AiIcons.AiOutlineClose/>
            </Link>
        </li>
        {showUploadReels.map((item, index) => {
            return (
                <li key={index} className={item.cName}>
                <Link to={item.path} >
                {item.icon}
                <span>{item.title}</span>
                </Link>
                </li>
            )
        })}
      </ul>
    </nav>
    </>
  )
}

export default UploadReels