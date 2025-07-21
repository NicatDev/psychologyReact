import { Link } from 'react-router-dom'
import logo from '../../shared/media/imgs/logo.png'
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {

    const menu = [
        {
            title: 'Şəxsiyyət testləri',
            link: '#',
            submenu: [
                {
                    title: 'Enneaqram şəxsiyyət testi',
                    link: '/test',
                },
                {
                    title: '16 tip şəxsiyyət testi',
                    link: '/test',
                },
                {
                    title: 'Böyük beşlik şəxsiyyət testi',
                    link: '/test',
                },
                {
                    title: 'Disk şəxsiyyət testi',
                    link: '/test',
                },
                {
                    title: 'Karyera qabiliyyəti testi',
                    link: '/test',
                },
                {
                    title: 'Emosional zəka testi',
                    link: '/test',
                },
                {
                    title: 'Bütün testlər',
                    link: '/test',
                }
            ]
        },
        {
            title: 'Biznes üçün',
            link: '#',
            submenu: [
                {
                    title: 'Komanda testi',
                    link: '#',
                },
                {
                    title: 'Müştəri testi',
                    link: '#',
                }
            ]
        },
        {
            title: 'Əlavə',
            link: '#',
            submenu: [
                {
                    title: 'Şəxsiyyət bloqu',
                    link: '#',
                },
                {
                    title: 'Enneaqram tipləri',
                    link: '#',
                },
                {
                    title: 'Enneaqram haqqında',
                    link: '#',
                },

                {
                    title: 'Tipinizə uyğun peşə',
                    link: '#',
                },
                {
                    title: 'Peşə testləri haqqında',
                    link: '#',
                },
                {
                    title: 'Şəxsiyyət testləri haqqında',
                    link: '#',
                },
                {
                    title: 'Böyük beşlik haqqında',
                    link: '#',
                },
                {
                    title: 'Tiplər və uyğunluq',
                    link: '#',
                },
            ]
        }
    ]

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
                                    {item.submenu && <IoMdArrowDropdown className='group-hover:rotate-180 duration-300' />}
                                </Link>
                                <div className="absolute z-40 hidden text-[16px] bg-white border border-solid p-3 pr-6 group-hover:flex flex-col gap-3 w-52 text-right right-0 top-16">
                                    {
                                        item?.submenu.map((subitem, index) => (
                                            <Link className='hover:text-primary-blue duration-300' key={index} to={subitem.link}>
                                                {subitem.title}
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                    <Link className='font-medium bg-secondary-blue text-white py-2 px-10' to='/login'>Daxil ol</Link>
                </div>
            </div>
        </div>
    )
}

export default Header