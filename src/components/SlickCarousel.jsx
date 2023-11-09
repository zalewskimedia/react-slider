import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { list } from "../../data"
import { IoMdQuote } from "react-icons/io"

const SlickCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
    }
    return (
        <div className="container mx-auto px-8 py-16 text-center">
            <Slider {...settings}>
                {list.map(item => {
                    const { id, image, name, title, quote } = item
                    return (
                        <article key={id}>
                            <img
                                src={image}
                                alt={name}
                                className="w-40 h-40 object-cover rounded-full border-violet-500 border-solid border-4 shadow-xl mx-auto"
                            />

                            <h2 className="text-xl font-bold uppercase mt-4 text-violet-600">
                                {name}
                            </h2>
                            <p className="text-violet-400 capitalize text-sm">
                                {title}
                            </p>
                            <p className="max-w-md mx-auto text-center mt-4 mb-2 italic text-gray-500">
                                {quote}
                            </p>
                            <IoMdQuote className="text-4xl text-violet-500 mx-auto" />
                        </article>
                    )
                })}
            </Slider>
        </div>
    )
}
export default SlickCarousel
