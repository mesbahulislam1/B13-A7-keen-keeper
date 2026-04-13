
import { NavLink } from 'react-router'
import { RiHome2Line} from "react-icons/ri";
import { LuClock3 } from "react-icons/lu";
import { RiLineChartLine } from "react-icons/ri";
import Logo from '../../assets/logo.png'


const NavLinks = [
  {
    icon: <RiHome2Line />,
    path:'',
    name: 'Home'
  },
  {
    icon: <LuClock3 />,
    path:'/timeline',
    name: 'Timeline'
  },
  {
    icon: <RiLineChartLine />,
    path:'/stats',
    name: 'Stats'
  }
]
const Navbar = () => {


  
  return (
     <div className='bg-base-100 shadow-sm'>
      <div className="navbar  container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-5 shadow">
        {
        NavLinks.map((link)=>{
          return <NavLink to={link.path} className={({isActive})=> `${isActive? 'bg-[#244D3F] text-white':'bg-white'} font-semibold shadow-none btn border-none text-[#64748B] `}> <span className='text-[19px]'>{link.icon}</span> {link.name}</NavLink>
        })
      }
      </ul>
    </div>
    <img src={Logo} alt="" />
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        NavLinks.map((link)=>{
          return <NavLink to={link.path} className={({isActive})=> `${isActive? 'bg-[#244D3F] text-white':'bg-white'} font-semibold shadow-none btn border-none text-[#64748B] `}> <span className='text-[19px]'>{link.icon}</span> {link.name}</NavLink>
        })
      }
    </ul>
  </div>
  
</div>
     </div>
  )
}

export default Navbar