import { forwardRef } from "react";
import "./contact.scss";

const Contact = forwardRef<HTMLDivElement, any>((props, ref) => {
    return (
        <div ref={ref} id="contactMain">Contact</div>
    )
})

export default Contact