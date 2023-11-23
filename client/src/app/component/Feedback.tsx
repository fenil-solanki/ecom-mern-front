import React from 'react'
import {TiStarFullOutline} from 'react-icons/ti'
import {TiStarHalfOutline} from 'react-icons/ti'
import {TiStarOutline} from 'react-icons/ti'


const Feedback = () => {
  return (
    <section className='container mx-auto pb-8'>
         <div>

<div className='border-4 border-[#8A33FD] rounded-lg inline mr-4 sm:mr-8 lg:mr-12'></div>
          <div className=' inline'>
          <h2 className='font-medium text-3xl inline md:font-semibold md:text-4xl' style={{color:"#3C4242"}}>Feedback</h2>

          </div>
          </div>
        <div className='py-16'>
            <div className='grid grid-cols-1 gap-1 lg:grid-cols-3 lg:gap-5'>
                <div className='mb-2 border-2 border-[#BEBCBD] rounded-lg p-5 lg:mb-8'>
                   <div className='grid grid-cols-2'>
                        <div>
                            <img src="feedback-1.png" alt="" />
                        </div>
                        <div>
                            <div className="text-right">
                                <TiStarFullOutline className='inline' style={{color:"#EDD146"}}></TiStarFullOutline>
                                <TiStarFullOutline className='inline' style={{color:"#EDD146"}}></TiStarFullOutline>
                                <TiStarFullOutline className='inline' style={{color:"#EDD146"}}></TiStarFullOutline>
                                <TiStarHalfOutline className='inline' style={{color:"#EDD146"}}></TiStarHalfOutline>
                                <TiStarOutline className='inline' style={{color:"#EDD146"}}></TiStarOutline>
                                        
                            </div>
                        </div>
                   </div>
                   <h2 className="text-2xl font-medium mt-4 mb-5" style={{color:"#3C4242"}}>Floyd Miles</h2>
                   <div>
                    <p className="font-normal text-sm" style={{color:"#807D7E"}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    <p className="font-normal text-sm" style={{color:"#807D7E"}}>Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                   </div>
                </div>
                <div className='mb-8 border-2 border-[#BEBCBD] rounded-lg p-5'>
                   <div className='grid grid-cols-2'>
                        <div>
                            <img src="feedback-2.png" alt="" />
                        </div>
                        <div>
                            <div className="text-right">
                                <TiStarFullOutline className='inline' style={{color:"#EDD146"}}></TiStarFullOutline>
                                <TiStarFullOutline className='inline' style={{color:"#EDD146"}}></TiStarFullOutline>
                                <TiStarFullOutline className='inline' style={{color:"#EDD146"}}></TiStarFullOutline>
                                <TiStarFullOutline className='inline' style={{color:"#EDD146"}}></TiStarFullOutline>
                                <TiStarOutline className='inline' style={{color:"#EDD146"}}></TiStarOutline>
                                        
                            </div>
                        </div>
                   </div>
                   <h2 className="text-2xl font-medium mt-4 mb-5" style={{color:"#3C4242"}}>Ronald Richards</h2>
                   <div>
                    <p className="font-normal text-sm" style={{color:"#807D7E"}}>ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                   </div>
                </div>
                <div className='mb-8 border-2 border-[#BEBCBD] rounded-lg p-5'>
                   <div className='grid grid-cols-2'>
                        <div>
                            <img src="feedback-3.png" alt="" />
                        </div>
                        <div>
                            <div className="text-right">
                                <TiStarFullOutline className='inline' style={{color:"#EDD146"}}></TiStarFullOutline>
                                <TiStarFullOutline className='inline' style={{color:"#EDD146"}}></TiStarFullOutline>
                                <TiStarFullOutline className='inline' style={{color:"#EDD146"}}></TiStarFullOutline>
                                <TiStarHalfOutline className='inline' style={{color:"#EDD146"}}></TiStarHalfOutline>
                                <TiStarOutline className='inline' style={{color:"#EDD146"}}></TiStarOutline>
                                        
                            </div>
                        </div>
                   </div>
                   <h2 className="text-2xl font-medium mt-4 mb-5" style={{color:"#3C4242"}}>Savannah Nguyen</h2>
                   <div>
                   <p className="font-normal text-sm" style={{color:"#807D7E"}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    <p className="font-normal text-sm" style={{color:"#807D7E"}}>Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                   </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Feedback