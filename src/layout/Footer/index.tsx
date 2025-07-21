// bloqlar, haqqımızda, əlaqə, testlər, şəxsiyyət testləri, biznes testləri
import { Link } from 'react-router-dom';
import logo from '../../shared/media/imgs/white-logo.png'
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

    return (
        <div className="bg-primary-blue">
            <div className="flex flex-col gap-6">
                <div className="container px-2 mx-auto flex flex-col items-center gap-10 py-12">
                    <div className="flex flex-col items-center gap-4">
                        <img className='w-32' src={logo} alt="white-logo" />
                        <div className="flex gap-6 text-2xl text-primary-blue">
                            <div className="bg-white rounded-full p-2 hover:bg-secondary-blue hover:text-white duration-300 cursor-pointer">
                                <FaFacebookF />
                            </div>
                            <div className="bg-white rounded-full p-2 hover:bg-secondary-blue hover:text-white duration-300 cursor-pointer">
                                <FaTwitter />
                            </div>
                            <div className="bg-white rounded-full p-2 hover:bg-secondary-blue hover:text-white duration-300 cursor-pointer">
                                <FaYoutube />
                            </div>
                            <div className="bg-white rounded-full p-2 hover:bg-secondary-blue hover:text-white duration-300 cursor-pointer">
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6 text-white text-xl">
                        <Link className='hover:underline hover:text-secondary-blue duration-300' to='#'>Bloqlar</Link>
                        <Link className='hover:underline hover:text-secondary-blue duration-300' to='#'>Haqqımızda</Link>
                        <Link className='hover:underline hover:text-secondary-blue duration-300' to='#'>Şəxsiyyət testləri</Link>
                        <Link className='hover:underline hover:text-secondary-blue duration-300' to='#'>Biznes testləri</Link>
                        <Link className='hover:underline hover:text-secondary-blue duration-300' to='#'>Əlaqə</Link>
                    </div>
                </div>
                <span className='w-full h-[1px] bg-white opacity-50'></span>
                <div className="container px-2 mx-auto text-center text-white pb-6">
                    <p>© Copyrights 2024. Bütün hüquqlar qorunur.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer