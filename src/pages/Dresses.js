import React from 'react'
import { imgConfig } from '../images/background/Index1';
import { CiStar } from "react-icons/ci";

const Dresses = () => {
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
            <div className='fs-5 text-center mt-5'>Home / Dresses</div>
            <div className='call text-center'>Dresses</div>
          </div>
        </div>
      </div>


      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div>
              <img src={imgConfig?.bl1} alt="Image 1"  className=' imgc d-flex align-items-center' />
            </div>
            <div className='text-center'>Eterna long dress black</div>
              <div className='text-center text-warning fw-bold '>
                <CiStar/> 
                <CiStar/> 
                <CiStar/> 
                <CiStar/> 
                <CiStar/>
              </div> 
            <div className='fw-bold price'>$149.50</div> 
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
            <div>
              <img src={imgConfig?.bl2} alt="Image 1"  className=' imgc d-flex align-items-center' />
            </div>
            <div className='text-center'>Alnich night dress navy</div>
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
              <img src={imgConfig?.bl3} alt="Image 1"  className=' imgc d-flex align-items-center' />
            </div>
            <div className='text-center'>Eline short dress black</div>
              <div className='text-center text-warning fw-bold '>
                <CiStar/> 
                <CiStar/> 
                <CiStar/> 
                <CiStar/> 
                <CiStar/>
              </div> 
            <div className='fw-bold price'>$74.99</div> 
          </div>
        </div>
      </div>


      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div>
              <img src={imgConfig?.bl4} alt="Image 1"  className=' imgc d-flex align-items-center' />
            </div>
            <div className='text-center'>Gold night party dress</div>
              <div className='text-center text-warning fw-bold '>
                <CiStar/> 
                <CiStar/> 
                <CiStar/> 
                <CiStar/> 
                <CiStar/>
              </div> 
            <div className='fw-bold price'>$74.99</div> 
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
            <div>
              <img src={imgConfig?.bl5} alt="Image 1"  className=' imgc d-flex align-items-center' />
            </div>
            <div className='text-center'>Meena dress maroon</div>
              <div className='text-center text-warning fw-bold '>
                <CiStar/> 
                <CiStar/> 
                <CiStar/> 
                <CiStar/> 
                <CiStar/>
              </div> 
            <div className='fw-bold price'>$72.50</div> 
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dresses
