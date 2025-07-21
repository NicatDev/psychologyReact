
const Newsletter = () => {
    return (
        <div className="bg-secondary-blue ">
            <div className="container px-2 mx-auto flex flex-col items-center py-10 gap-6">
                <h2 className="font-bold text-primary-blue text-4xl">Yeniliklərə abunə ol</h2>
                <form className="border-4 border-solid border-primary-blue">
                    <input className="py-3 px-4 outline-none" placeholder="E-poçtunuzu daxil edin" type="text" />
                    <button className="border-l-4 py-3 px-10 border-solid border-primary-blue text-primary-blue font-medium hover:text-white hover:bg-primary-blue duration-300">Təsdiqlə</button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter