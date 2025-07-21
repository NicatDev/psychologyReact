import { Link } from 'react-router-dom'
import enneagram from '../../../shared/media/imgs/enneagram.png'
import intj from '../../../shared/media/imgs/intj-male.svg'
import bigfive from '../../../shared/media/imgs/big-five.png'
import career from '../../../shared/media/imgs/career.png'
import emoint from '../../../shared/media/imgs/emo-int.png'
import disc from '../../../shared/media/imgs/disc.png'

const PersonalityTests = () => {
    const tests = [
        {
            title: 'Enneaqram',
            subtitle: '9 şəxsiyyət tipi',
            icon: enneagram
        },
        {
            title: 'Tip təyini',
            subtitle: '16 şəxsiyyət',
            icon: intj
        },
        {
            title: 'Böyük beşlik',
            subtitle: 'xüsusiyyətlərin elmi dəyərləndirilməsi',
            icon: bigfive
        },
        {
            title: 'Peşə seçimi',
            subtitle: 'Sizə ən uyğun olan peşə',
            icon: career
        },
        {
            title: 'Emosional zəka',
            subtitle: 'Necə bir zəkaya sahibsiniz',
            icon: emoint
        },
        {
            title: 'Disk',
            subtitle: 'İş qabiliyyətlərinin dəyərləndirilməsi',
            icon: disc
        },
    ]

    return (
        <div className='py-20'>
            <div className="container mx-auto px-2 grid grid-cols-3 gap-6">
                {
                    tests.map((test, index) => (
                        <Link
                            to='#'
                            key={index}
                            className="flex gap-6 items-center group hover:bg-zinc-100 p-6 duration-300">
                            <img className='w-16 h-16' src={test.icon} alt="test_icon" />
                            <div className="">
                                <h4 className='text-primary-blue text-2xl font-semibold'>{test.title}</h4>
                                <p className='text-lg font-medium'>{test.subtitle}</p>
                            </div>
                            <span className='ml-auto text-2xl text-primary-blue opacity-0 group-hover:opacity-100 duration-300'>→</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default PersonalityTests