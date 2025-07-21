import { Link } from "react-router-dom"

const BlogCard: React.FC<any> = ({ blog }) => {
    return (
        <div className="relative group border border-solid border-zinc-200 bg-zinc-50">
            <div className="absolute z-10 bg-stone-700 bg-opacity-80 text-white flex flex-col py-3 px-6 text-center">
                <span>{blog.date.month}</span>
                <span className="text-sm">{blog.date.year}</span>
            </div>
            <div className="overflow-hidden h-60">
                <img className="group-hover:scale-125 duration-300 w-full h-full object-cover" src={blog.image} alt="blog-image" />
            </div>
            <div className="p-4 flex flex-col gap-6">
                <p className="text-primary-blue font-semibold text-xl">{blog.title}</p>
                <Link className="border-4 hover:bg-secondary-blue hover:text-white duration-300 text-secondary-blue font-semibold border-solid border-secondary-blue w-fit py-2 px-6 rounded-full" to='#'>Oxumaq →</Link>
            </div>
        </div>
    )
}

export default BlogCard