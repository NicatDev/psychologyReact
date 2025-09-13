import teamwork from '../../../shared/media/DSC03779.jpg'
const Hero = () => {
    return (
        <div className="relative h-[80vh] w-full overflow-hidden">
            <span className='absolute z-20 inset-0 bg-black opacity-10'></span>
            <span className='absolute z-10 inset-0 bg-gradient-to-b from-primary-blue to-transparent opacity-70'></span>
            <img className='absolute h-full w-full object-cover blur-sm z-0' src={teamwork} alt="teamwork" />
            <div className="container px-2 mx-auto relative z-30 text-white flex flex-col gap-6 items-center justify-center h-full">
                <h2 className='text-7xl font-bold'>Kim olduğunu anla.</h2>
                <span className='w-1/4 h-1 bg-white opacity-50'></span>
                <p className='text-lg'>Evdə, işdə və münasibətlərdə köməkçi ola biləcək şəxsiyyət testləri</p>
            </div>
        </div>
    )
}

export default Hero