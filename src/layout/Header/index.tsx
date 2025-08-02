import { Link } from 'react-router-dom'
import logo from '../../shared/media/imgs/logo.png'
import { User } from "../../types/user"
import ProfileDropdown from '../../shared/components/ProfileDropDown';

const Header = () => {

    const storedUser = sessionStorage.getItem('user');
    const user: User | null = storedUser ? JSON.parse(storedUser) : null;

    const menu = [
        { title: 'Haqqımızda', link: '/about-us' },
        { title: 'Bizimlə əlaqə', link: '/contact-us' },
        { title: 'Bloqlar', link: '/blogs' },
        { title: 'Test', link: '/test' },
        { title: 'Planlar', link: '/test-packages' },
    ]


    const handleLogout = () => {
        console.log('User logged out');
    };

    return (
        <div className="bg-white sticky top-0 z-40 shadow-lg">
            <div className='container mx-auto flex justify-between py-3 '>
                <div className="">
                    <Link to='/'>
                        <img className='w-16' src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="flex items-center gap-8 text-lg">
                    {
                        menu?.map((item, index) => (
                            <div key={index} className="group h-full flex relative">
                                <Link
                                    className='font-medium flex gap-2 items-center group-hover:text-primary-blue duration-300'
                                    to={item.link}>
                                    {item.title}
                                </Link>
                             
                            </div>
                        ))
                    }
                    {!user ? <Link className='font-medium bg-indigo-600 text-white py-2 px-10' to='/login'>Daxil ol</Link> : <ProfileDropdown user={user} onLogout={handleLogout} />}
                </div>
            </div>
        </div>
    )
}

export default Header