import { Link } from 'react-router-dom'
import team from '../../../shared/media/imgs/team.jpg'
const Business = () => {
    return (
        <div className="h-[90vh] relative">
            <span className='absolute inset-0 bg-primary-blue z-10 opacity-50'></span>
            <span className='absolute inset-0 bg-[#0f172b] z-10 opacity-50'></span>
            <img className='absolute w-full h-full object-cover ' src={team} alt="team" />
            <div className="container px-2 mx-auto pt-5 relative z-20 text-white flex flex-col items-center justify-center h-full ">
                <h2 className='text-3xl md:text-5xl w-1/2 mb-6 text-center leading-tight font-bold'>Komandanızın potensialını kəşf edin</h2>
                <p className='text-lg w-2/3 mb-8 text-center'>Bizim testlərimizlə biznesinizin produktivliyini artıra, konfliktləri azalda və komanda daxili əlaqəni gücləndirə bilərsiniz. Qısa müddətdə başlayın. Vaxt itkisinə yox, ancaq nəticələr.</p>
                <Link className='border-4 font-medium px-12 py-3 border-bolid border-white text-xl hover:bg-white hover:text-emerald-900 duration-300' to='#'>Başlamaq</Link>
            </div>
        </div>
    )
}

export default Business