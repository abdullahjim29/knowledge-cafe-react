import profile_img from '../../assets/images/profile.png'
import './header.css'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 max-w-5xl mx-auto my-5 border-b-2'>
             <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
             <img className='img-size' src={profile_img}></img>
        </header>
    );
};

export default Header;