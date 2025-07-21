import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import '../../../styles/slick.css'
import '../../../styles/slick-theme.css'

const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const items = [
        {
            comment: 'Nəhayət, şəxsiyyətin dərinliklərini həqiqətən ortaya qoyan bir platforma var! Artıq bir çox testdən keçmişəm, amma heç biri mənə bu qədər cavab vermədi. Bu, sadəcə xarakter xüsusiyyətlərinin təsnifatı deyil; həqiqətən kim olduğunuzun incəliklərini ortaya qoyur. Çox tövsiyə edirəm!',
            author: 'Nigar Cəfərli',
            image: 'https://images.pexels.com/photos/4126750/pexels-photo-4126750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            comment: 'Həmişə şəxsiyyət psixologiyası ilə maraqlanan biri kimi bu platformanı tapdığım üçün nə qədər xoşbəxt olduğumu ifadə edə bilmirəm. Testlər hərtərəfli, mənalı və təəccüblü dərəcədə dəqiqdir. Şəxsiyyətinizi araşdırsanız da, başqalarını daha yaxşı başa düşməyə çalışsanız da, bu platforma oyun dəyişdiricidir!',
            author: 'Elçin Orucov',
            image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            comment: 'Bu platforma gözlərimi şəxsiyyətimin mövcud olduğunu bilmədiyim cəhətlərinə açdı. Testlər əyləncəli, düşündürücü və təəccüblü dərəcədə əyləncəlidir! Həm şəxsi, həm də peşəkar münasibətlər qurmağımda daha çox anlayış və empatiya ilə kömək edən dəyərli biliklər əldə etdim.',
            author: 'Aygün Hümbətova',
            image: 'https://images.pexels.com/photos/4049672/pexels-photo-4049672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            comment: 'Şəxsiyyət testlərinə həmişə şübhə ilə yanaşırdım, amma bu platforma baxışımı tamamilə dəyişdirdi. Qiymətləndirmələr ciddi araşdırmalara əsaslanır və real həyat vəziyyətlərinə tətbiq olunan praktik məlumatlar verir. Söhbət yalnız etiketlənmədən deyil, həm də özünüdərk və böyüməni təşviq etməkdən gedir.',
            author: 'Rauf Məmmədov',
            image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            comment: 'Özünüzü və başqalarını başa düşməyin müvəffəqiyyətin açarı olduğu bir dünyada bu platforma əsl tapıntıdır. Testlərin istifadəsi asandır və eyni zamanda inanılmaz dərəcədə dərindir. Onlar mənə güclü tərəflərimi dərk etməyə, zəif tərəflərimi qəbul etməyə kömək etdilər.',
            author: 'Leyla Axundova',
            image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
        }
    ]

    return (
        <div className="bg-zinc-200 py-20">
            <div className="container mx-auto px-2">
                <h2 className="font-bold text-4xl text-primary-blue text-center mb-8">Bizim haqqımızda deyilənlər</h2>
                <div className="slider-container">
                    <Slider {...settings}>
                        {items.map((item, index) => (
                            <div key={index} className="bg-white p-6 border">
                                <FaQuoteLeft className="text-primary-blue text-2xl" />
                                <p className="text-sm italic text-zinc-500 py-6">{item.comment}</p>
                                <div className="flex items-center gap-2 text-xl font-medium text-primary-blue">
                                    <img className="rounded-full w-16 h-16 object-cover" src={item.image} alt="person" />
                                    <p>{item.author}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials