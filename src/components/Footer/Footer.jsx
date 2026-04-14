import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import FooterImage from '../../assets/footer_logo.png'
import { RiTwitterXLine } from "react-icons/ri";

const FooterLink = [
  {
    path: '',
    icon: <TbBrandInstagramFilled />
  },
  {
    path: '',
    icon: <FaFacebookSquare />
  },
  {
    path: '',
    icon: <RiTwitterXLine />
  }
]
const Footer = () => {
  return (
    <div className='bg-[#244D3F]'>
      <div className='container mx-auto pt-15 px-5'>
        <div className="text-center space-y-3">
          <img src={FooterImage} alt="" className="mx-auto "/>
          <p className="text-[#ffffff]">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
          <div className="mt-8 mb-8">
            <h2 className="text-[20px] text-white mb-3">Social Links</h2>
            <ul className="flex gap-2 justify-center">
              {
                FooterLink.map((link, index)=> {
                  return <div key={index} className="bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full">
                    <a href={link.path} className="text-2xl ">{link.icon}</a>
                  </div>
                })
              }
            </ul>
          </div>
        </div>

        <div className="text-[#FAFAFA] text-center flex justify-between py-7 border-t border-white/20 flex-col sm:flex-row gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-4 flex-col sm:flex-row">
             <a href="">Privacy Policy </a>
             <a href="">Terms of Service</a>
             <a href="">Cookies </a>
          </div>
        </div>
      </div>
    </div>
  )
}
                  

export default Footer