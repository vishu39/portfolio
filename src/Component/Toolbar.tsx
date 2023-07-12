import { MenuOutlined } from "@ant-design/icons";
import { personal_details } from "../Helper/data";
import "./toolbar.scss";

const Toolbar = () => {
  return (
    <div className="toolbar-main">
      <span>
        <span>{personal_details?.first_name}</span>{" "}
        <span>{personal_details?.last_name}</span>
      </span>
      <span>
        <MenuOutlined />
      </span>
    </div>
  );
};

export default Toolbar;
