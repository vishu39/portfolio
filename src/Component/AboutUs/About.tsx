import { forwardRef } from "react"
import "./about.scss"
const About = forwardRef<HTMLDivElement, any>((ref) => {
    return (
        <div ref={ref} id="aboutMain">About</div>
    )
})

export default About