import { MenuOutlined } from "@ant-design/icons";
import { personal_details } from "../Helper/data";
import "./toolbar.scss";
import { useState } from "react";

const Toolbar = () => {
  const [toolbarOpen,setToolbarOpen]=useState(false)
  return (
    <div className="toolbar-main">
     <div className="toolbarDiv">
     <span>
        <span>{personal_details?.first_name}</span>{" "}
        <span>{personal_details?.last_name}</span>
      </span>
      <span style={{cursor:"pointer"}} onClick={()=>{
        setToolbarOpen(!toolbarOpen)
      }}>
        <MenuOutlined />
      </span>
     </div>
     <div className={toolbarOpen?"nav":"hide"}>
      <ul>
        <li>HOME</li>
        <li>ABOUT ME</li>
        <li>RESUME</li>
        <li>EXPERIENCE</li>
        <li>CONTACT</li>
      </ul>
     </div>
    </div>
  );
};

export default Toolbar;
