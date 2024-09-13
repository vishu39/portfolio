import { forwardRef } from "react"
import "./service.scss"

const Service = forwardRef<HTMLDivElement, any>((props, ref) => {
    return (
        <div ref={ref} id="serviceMain">Service</div>
    )
})

export default Service