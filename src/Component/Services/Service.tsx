import { forwardRef } from "react";
import "./service.scss";

const Service = forwardRef<HTMLDivElement, {}>((_props, ref) => {
    return (
        <div ref={ref} id="serviceMain">
            Service
        </div>
    );
});

export default Service;
