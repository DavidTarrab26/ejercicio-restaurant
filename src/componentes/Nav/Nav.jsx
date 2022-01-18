import logo from '../../assets/img/logo.png'
import ig from '../../assets/img/instagramNavbar.png'
import fb from '../../assets/img/facebookNavbar.png'
import './Nav.css'

const Nav = () => {
    return ( 
        <div>
            <nav class="navbar navbar-light bg-black">
            <div class="container">
                <img src={logo} width="50" height="54"/>
                <h2 className='titulo'>Bulldog</h2>
                <div className='d-flex justify-content-en'>
                    <div className='mx-2'>
                        <img src={ig} width="50" height="54"/>
                    </div>
                    <img src={fb} width="50" height="54" />
                </div>
            </div>
            </nav>
        </div>
     );
}
 
export default Nav;