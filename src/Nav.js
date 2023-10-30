import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Nav = () => {
    return ( 
        <nav className='d-flex  flex-row justify-content-between w-100 pe-4'>
            <p>Logo</p>
            <ul className='d-flex flex-row my-auto'>
                <a className='fs-6 text-capitalize text-dark my-auto'><li className='mx-1'>home</li></a>
                <a className='fs-6 text-capitalize text-dark my-auto'><li className='mx-1'>about us</li></a>
                <a className='fs-6 text-capitalize text-dark my-auto'><li className='mx-1'>services</li></a>
                <a className='fs-6 text-capitalize text-dark my-auto'><li className='mx-1'>news</li></a>
                <a className='fs-6 text-capitalize text-dark my-auto'><li className='mx-1'>contacts</li></a>
                <a className='fs-6 text-capitalize text-dark my-auto'><li className='mx-1'>sign in</li></a>
                <a className='fs-6 text-uppercaze text-dark border rounded-pill ms-1 px-4 py-1'>
                    <li className=''>try it free</li>
                </a>
            </ul>
        </nav>
     );
}
 
export default Nav;