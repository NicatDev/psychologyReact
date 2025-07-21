import BlogCard from "../../../shared/components/BlogCard"

const Blogs = () => {
    const blogs = [
        {
            title: 'Müsahibədən kəsildiniz? INFJ bunun öhdəsindən necə gələ bilər',
            image: 'https://d31u95r9ywbjex.cloudfront.net/blog/sites/default/files/styles/latest_updates/public/media/image/2024-04/118419007_m_normal_none.jpg?itok=jfrnq0nV',
            date: {
                month: '10 aprel',
                year: '2024'
            }
        },
        {
            title: 'Kim olduğunu bilməyəndə etməli olduğun 7 şey',
            image: 'https://d31u95r9ywbjex.cloudfront.net/blog/sites/default/files/styles/latest_updates/public/media/image/2024-03/193874033_m_normal_none.jpg?itok=o8shQ6JC',
            date: {
                month: '2 aprel',
                year: '2024'
            }
        },
        {
            title: 'ESFJ-lərin iş mühitində onları əvəzedilməz edən 7 xüsusiyyətləri',
            image: 'https://d31u95r9ywbjex.cloudfront.net/blog/sites/default/files/styles/latest_updates/public/media/image/2024-04/97269127_m_normal_none.jpg?itok=FymY3uTg',
            date: {
                month: '21 mart',
                year: '2024'
            }
        },
    ]

    return (
        <div className="py-20">
            <div className="container px-2 mx-auto flex flex-col gap-10">
                <h2 className="text-4xl font-bold text-center text-primary-blue">Ən son məqalələrimiz</h2>
                <div className="grid grid-cols-3 gap-6">
                    {blogs.map(((blog, index) => <BlogCard key={index} blog={blog} />))}
                </div>
            </div>
        </div>
    )
}

export default Blogs