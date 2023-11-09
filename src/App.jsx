import { useState } from "react"
import Carousel from "./components/Carousel"

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Carousel />
        </div>
    )
}

export default App
