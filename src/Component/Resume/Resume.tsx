import { forwardRef } from "react"
import "./resume.scss"

const Resume = forwardRef<HTMLDivElement, any>((props, ref) => {
    return (
        <div ref={ref} id="resumeMain">Resume</div>
    )
})

export default Resume