import React from 'react'
import {BiLogoFacebook, BiLogoTwitter,BiLogoInstagram,BiLogoLinkedin} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='top-full sticky hidden xl:block'>
    <div className='p-8 bg-[#3C4242]' style={{color:"white"}}>
        
            <div className='px-24 py-8 container mx-auto'>
                <div className='grid grid-cols-5'>
                    <div>
                        <h3 className='font-bold text-3xl'>Need Help</h3>
                        <ul className='py-3'>
                            <li className="my-5 font-medium text-lg" style={{color:"#F6F6F6"}}>Contact Us</li>
                            <li className="my-5 font-medium text-lg" style={{color:"#F6F6F6"}}>Track Order</li>
                            <li className="my-5 font-medium text-lg" style={{color:"#F6F6F6"}}>Returns & Refunds</li>
                            {/* <li className="my-5 font-medium text-lg" style={{color:"#F6F6F6"}}>FAQ's</li> */}
                            <li className="my-5 font-medium text-lg" style={{color:"#F6F6F6"}}>Career</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-bold text-3xl'>Company</h3>
                        <ul className='py-3'>
                            
                        <li className="my-5 font-medium text-lg" style={{color:"#F6F6F6"}}>Contact Us</li>
                            <li className="my-5 font-medium text-lg" style={{color:"#F6F6F6"}}>Track Order</li>
                            <li className="my-5 font-medium text-lg" style={{color:"#F6F6F6"}}>Returns & Refunds</li>
                            {/* <li className="my-5 font-medium text-lg" style={{color:"#F6F6F6"}}>FAQ's</li> */}
                            <li className="my-5 font-medium text-lg" style={{color:"#F6F6F6"}}>Career</li>
                        </ul>

                    </div>
                    <div>
                        <h3 className='font-bold text-3xl'>More Info</h3>
                        <ul className='py-3'>
                        <li className="my-5 font-medium text-lg" style={{color:"#F6F6F6"}}>Track Order</li>
                            <li className="my-5 font-medium text-lg" style={{color:"#F6F6F6"}}>Returns & Refunds</li>
                            {/* <li className="my-5 font-medium text-lg" style={{color:"#F6F6F6"}}>FAQ's</li> */}
                            <li className="my-5 font-medium text-lg" style={{color:"#F6F6F6"}}>Career</li>
                            </ul>
                    </div>
                    <div className='col-span-2'>
                    <h3 className='font-bold text-3xl'>Location</h3>
                        <ul className='py-3'>
                        <li className="my-5 font-medium text-lg" style={{color:"#F6F6F6"}}>support@euphoria.in</li>
                            {/* <li className="my-5 font-medium text-lg" style={{color:"#F6F6F6"}}>Eklingpura Chouraha, Ahmedabad Main Road</li> */}
                            {/* <li className="my-5 font-medium text-lg" style={{color:"#F6F6F6"}}>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</li> */}
                            </ul>
                    </div>
                </div>

                    <div className='grid grid-cols-2'>
                        <div>
                            <button className='h-[37px] w-[37px] bg-[#fff] mx-2 rounded-lg'><BiLogoFacebook className='mx-auto' size={20} style={{color:"#2A2F2F"}}></BiLogoFacebook></button>
                            <button className='h-[37px] w-[37px] bg-[#fff] mx-2 rounded-lg'><BiLogoInstagram className='mx-auto' size={20} style={{color:"#2A2F2F"}}></BiLogoInstagram></button>
                            <button className='h-[37px] w-[37px] bg-[#fff] mx-2 rounded-lg'><BiLogoTwitter className='mx-auto' size={20} style={{color:"#2A2F2F"}}></BiLogoTwitter></button>
                            <button className='h-[37px] w-[37px] bg-[#fff] mx-2 rounded-lg'><BiLogoLinkedin className='mx-auto' size={20} style={{color:"#2A2F2F"}}></BiLogoLinkedin></button>
                        </div>
                        <div>
                                <h3>Download The App</h3>
                                <div className='grid grid-cols-2'>

                                </div>
                        </div>
                    </div>
            </div>

            <h3 className='font-bold text-lg text-center'>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</h3>
    </div>
</footer>
  )
}

export default Footer
