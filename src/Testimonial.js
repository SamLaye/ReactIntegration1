import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Testimonial = () => {
    return ( 
        <div>
            <div className='py-5' id='testimonial'>
                <h1 className='text-center text-capitalize mt-3 mb-5'>client's testimonials</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col mx-2 shadow bg-white text-center'>
                            <h3 className='my-3'>Le nom</h3>
                            <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                        </div>
                        <div className='col mx-2 shadow bg-white text-center'>
                            <h3 className='my-3'>Le nom</h3>
                            <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p> 
                        </div>
                        <div className='col mx-2 shadow bg-white text-center'>
                            <h3 className='my-3'>Le nom</h3>
                            <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                        </div>
                    </div>
                </div>
            </div>  
            <div className='py-5 text-center' id='techserve'>
                <div className='w-50 text-white mx-auto'>
                    <h2 className='fw-bold'>Want to see Techserve in action?</h2>
                    <p className='my-4 '>Lorem ipsum dolor sit aliqua laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                    <button className='text-uppercase  btn rounded-pill bg-white text-dark px-4' id='testi-btn'>
                        sign up for free
                    </button>
                    </div>    
            </div>  
        </div>    
     );
}
 
export default Testimonial;