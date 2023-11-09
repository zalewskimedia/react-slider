import { useState } from "react"
import Carousel from "./components/Carousel"
import SlickCarousel from "./components/SlickCarousel"

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Carousel />
            {/* <SlickCarousel /> */}
        </div>
    )
}

export default App
