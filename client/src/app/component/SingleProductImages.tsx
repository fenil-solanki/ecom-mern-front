import React,{useState,useEffect} from 'react'

const SingleProductImages = ({images}: any) => {

    const [selectedImage, setselectedImage] = useState("")
   
    useEffect(() => {
     if(images !==undefined && images.length !==0){
        setselectedImage(images[images.length-1])
     }
    }, [])
    

    if(images !==undefined && images.length !==0 && images[0]){
        return (
            <div>
                <div className='grid grid-cols-12 pt-8 pb-4 px-12 sm:px-0 sm:pt-12 sm:pb-12'>
                    <div className='hidden sm:block sm:col-span-3'>
                        <div className=''>
                        {
                           images.map((curElem:any,index:number)=>{
                                return <img src={curElem} key={index} className='h-24 w-24 mx-auto my-6 rounded-lg' onClick={()=>setselectedImage(curElem)}></img>
                            })
                        }
                        </div>
                        
                    </div>
                    <div className='col-span-12 h-full sm:col-span-9'>
                        <img src={selectedImage} className='h-auto w-full mx-auto rounded-lg'></img>
                    </div>
                </div>
            </div>
          )
    }
  
}

export default SingleProductImages
