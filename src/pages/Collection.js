import React from 'react'
import { imgConfig } from '../images/background/Index1';
import { CiStar } from "react-icons/ci";


const Collection = () => {
  return (
    <>
    <div className='apage'>

        <div className='container'>
          <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12'>
                <p className='call py-5 text-right'>Collections</p>
              </div>
          </div>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-4'>
                    <div>
                        <img src={imgConfig?.img1} alt="Image 1"  className='block-20 d-flex align-items-center' />
                    </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                    <div >
                        <img src={imgConfig?.img2} alt="Image 2"  className='block-20 d-flex align-items-center'  />
                    </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                    <div className='img1 d-flex align-items-center'>
                        <img src={imgConfig?.img3} alt="Image 3"/>
                    </div>
                    
                    <div className='img1 d-flex align-items-center'>
                        <img src={imgConfig?.img4} alt="Image 4" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>

        <div className='container'> 
            <div className='row'>
                <div className='col-sm-4'>
                    <div className='call1 py-5 text-right'>Pre Fall 2021</div>
                </div>

                <div className='col-sm-8'>
                    <div className='line mt-5 my-5'></div>
                    <p className='mt-5 pt-5 text-secondary'>Faucibus parturient dignissim nisi, magna ullamcorper facilisi
                         tincidunt nulla et morbi sed in risus vestibulum consectetur
                          arcu id eu pulvinar quis turpis luctus congue vitae ipsum 
                          egestas nunc, ornare massa commodo.</p>

                    <button type="button" className="btn btn-outline-dark mt-2">Discover More</button>  
                </div>
            </div>
        </div>
    </div>

        <div className='container'>
            <div className='row  bkimg'>
                <div className='col-12 bklyr'>
                   
                    <div  className='call1 my-5  text-right'> Spring-Summer 2024</div>

                    <div className="row">
                        <div className="col-md-4  col-lg-4 col-sm-12">
                            <div>
                                <img src={imgConfig?.im1} alt="Image 1"  className=' imgc d-flex align-items-center' />
                            </div>
                                <div className='text-center'>Dora black gradient eyewear</div>
                                   <div className='text-center text-warning fw-bold '>
                                   <CiStar/> 
                                    <CiStar/> 
                                    <CiStar/> 
                                    <CiStar/> 
                                    <CiStar/>
                                     </div> 
                                <div className='fw-bold price'>$80.50</div> 
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div>
                                <img src={imgConfig?.im2} alt="Image 1"  className=' imgc d-flex align-items-center' />
                            </div>      
                            <div className='text-center'>Branded watch </div>
                            <div className='text-center text-warning fw-bold '>
                                   <CiStar/> 
                                    <CiStar/> 
                                    <CiStar/> 
                                    <CiStar/> 
                                    <CiStar/> 
                            </div>         
                                    <div className='fw-bold price'>$80.00</div>                               
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12">
                            <div>
                                <img src={imgConfig?.im3} alt="Image 1"  className=' imgc d-flex align-items-center' />
                            </div>
                            <div className='text-center'>Classic t-shirt white</div>
                                <div className='text-center fw-bold text-warning  '>
                                    <CiStar/> 
                                    <CiStar/> 
                                    <CiStar/> 
                                    <CiStar/> 
                                    <CiStar/>                                
                                </div>
                                <div className='fw-bold price'>$48.99</div>  
                        </div>
                    </div>

                </div>
            </div>
        </div>
    
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-12">
                            <div>
                                <img src={imgConfig?.im4} alt="Image 1"  className=' imgc d-flex align-items-center' />
                            </div>
                            <div className='text-center'>Knitted Jumper</div>
                                <div className='text-center fw-bold text-warning  '>
                                    <CiStar/> 
                                    <CiStar/> 
                                    <CiStar/> 
                                    <CiStar/> 
                                    <CiStar/>                                
                                </div>
                                <div className='fw-bold price'>$30.99</div>  
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                            <div>
                                <img src={imgConfig?.im6} alt="Image 1"  className=' imgc d-flex align-items-center' />
                            </div>
                            <div className='text-center'>Classic t-shirt white</div>
                                <div className='text-center fw-bold text-warning  '>
                                    <CiStar/> 
                                    <CiStar/> 
                                    <CiStar/> 
                                    <CiStar/> 
                                    <CiStar/>                                
                                </div>
                                <div className='fw-bold price'>$48.99</div>  
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                            <div>
                                <img src={imgConfig?.im5} alt="Image 1"  className=' imgc d-flex align-items-center' />
                            </div>
                            <div className='text-center'>Classic skarf</div>
                                <div className='text-center fw-bold text-warning  '>
                                    <CiStar/> 
                                    <CiStar/> 
                                    <CiStar/> 
                                    <CiStar/> 
                                    <CiStar/>                                
                                </div>
                                <div className='fw-bold price'>$40.59</div>  
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className='call1 my-5  text-right'>New arrival</div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-12">
                    <div>
                        <img src={imgConfig?.img5} alt="Image 1"  className=' imgc d-flex align-items-center' />
                    </div>
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                    <div>
                        <img src={imgConfig?.img6} alt="Image 1"  className=' imgc d-flex align-items-center' />
                    </div>
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                    <div>
                        <img src={imgConfig?.img7} alt="Image 1"  className=' imgc d-flex align-items-center' />
                    </div>
                </div>
            </div>
        </div>

    
    
    </>
  )
}

export default Collection
