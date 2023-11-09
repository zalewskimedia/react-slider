import { useEffect, useState } from "react"
import { shortList, list, longList } from "../../data"
import { IoMdQuote } from "react-icons/io"
import { BiChevronLeft, BiChevronRight, BiRestaurant } from "react-icons/bi"
const Carousel = () => {
    const [people, setPeople] = useState(list)
    const [currentSlide, setCurrentSlide] = useState(0)
    const prevSlide = () => {
        setCurrentSlide(oldSlide => {
            const result = (oldSlide - 1 + people.length) % people.length
            return result
        })
    }
    const nextSlide = () => {
        setCurrentSlide(oldSlide => {
            const result = (oldSlide + 1) % people.length
            return result
        })
    }

    useEffect(() => {
        let sliderId = setInterval(() => {
            nextSlide()
        }, 2500)
        return () => {
            clearInterval(sliderId)
        }
    }, [currentSlide])
    return (
        <section className="relative h-screen overflow-hidden">
            {people.map((person, personIndex) => {
                const { id, image, name, title, quote } = person
                return (
                    <article
                        key={id}
                        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center transition-all duration-500"
                        style={{
                            transform: `translateX(${
                                100 * (personIndex - currentSlide)
                            }%)`,
                        }}>
                        <img
                            src={image}
                            alt={name}
                            className="w-40 h-40 object-cover rounded-full border-violet-500 border-solid border-4 shadow-xl"
                        />

                        <h2 className="text-xl font-bold uppercase mt-4 text-violet-600">
                            {name}
                        </h2>
                        <p className="text-violet-400 capitalize text-sm">
                            {title}
                        </p>
                        <p className="max-w-md text-center mt-4 mb-2 italic text-gray-500">
                            {quote}
                        </p>
                        <span className="bg-violet-500 rounded-full p-2">
                            <IoMdQuote className="text-4xl text-white " />
                        </span>
                    </article>
                )
            })}
            <button className="absolute top-1/2 left-24 -translate-y-1/2">
                <BiChevronLeft
                    className="text-4xl hover:text-white hover:bg-violet-500 duration-300"
                    onClick={prevSlide}
                />
            </button>
            <button className="absolute top-1/2 right-24 -translate-y-1/2">
                <BiChevronRight
                    className="text-4xl hover:text-white hover:bg-violet-500 duration-300"
                    onClick={nextSlide}
                />
            </button>
        </section>
    )
}
export default Carousel
