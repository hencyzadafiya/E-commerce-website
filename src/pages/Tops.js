import React from 'react'
import { imgConfig } from '../images/background/Index1';
import { CiStar } from "react-icons/ci";

const Tops = () => {
  return (
    <>
    <div className='bg-light pb-4'>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-2 col-md-2 cate1">
              <div className='text-center fs-5 my-4'>Categories</div>
              <div className='ms-4 my-2'>Accessories</div>
              <div  className='ms-4 my-2'>Bottoms</div>
              <div  className='ms-4 my-2'>Dresses</div>
              <div className='ms-4 my-2'>Footwear</div>
              <div className='ms-4 my-2'>Tops</div>
          </div>

          <div className='col-sm-12 col-lg-10 col-md-10 cate '>
            <div className='fs-5 text-center mt-5'>Home / Tops</div>
            <div className='call text-center'>Tops</div>
          </div>
        </div>
      </div>


      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div>
              <img src={imgConfig?.r1} alt="Image 1"  className=' imgc d-flex align-items-center' />
            </div>
            <div className='text-center'>Scarlett red long dress</div>
              <div className='text-center text-warning fw-bold '>
                <CiStar/> 
                <CiStar/> 
                <CiStar/> 
                <CiStar/> 
                <CiStar/>
              </div> 
            <div className='fw-bold price'>$199.99</div> 
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
            <div>
              <img src={imgConfig?.r2} alt="Image 1"  className=' imgc d-flex align-items-center' />
            </div>
            <div className='text-center'>Benne long sleeve shirt black</div>
              <div className='text-center text-warning fw-bold '>
                <CiStar/> 
                <CiStar/> 
                <CiStar/> 
                <CiStar/> 
                <CiStar/>
              </div> 
            <div className='fw-bold price'>$87.99</div> 
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
            <div>
              <img src={imgConfig?.r3} alt="Image 1"  className=' imgc d-flex align-items-center' />
            </div>
            <div className='text-center'>Floral short dress red</div>
              <div className='text-center text-warning fw-bold '>
                <CiStar/> 
                <CiStar/> 
                <CiStar/> 
                <CiStar/> 
                <CiStar/>
              </div> 
            <div className='fw-bold price'>$80.90</div> 
          </div>


        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div>
              <img src={imgConfig?.r4} alt="Image 1"  className=' imgc d-flex align-items-center' />
            </div>
            <div className='text-center'>Spark nigh party dress green</div>
              <div className='text-center text-warning fw-bold '>
                <CiStar/> 
                <CiStar/> 
                <CiStar/> 
                <CiStar/> 
                <CiStar/>
              </div> 
            <div className='fw-bold price'>$89.99</div> 
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
            <div>
              <img src={imgConfig?.r5} alt="Image 1"  className=' imgc d-flex align-items-center' />
            </div>
            <div className='text-center'>Silk long shirt white</div>
              <div className='text-center text-warning fw-bold '>
                <CiStar/> 
                <CiStar/> 
                <CiStar/> 
                <CiStar/> 
                <CiStar/>
              </div> 
            <div className='fw-bold price'>$78.80</div> 
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Tops
