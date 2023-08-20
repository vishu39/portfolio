import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Pages from "../../pages";

function Layout() {
  const [isOpen, setIsOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 700) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [windowWidth]);

  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div
        style={
          isOpen
            ? {
                width: "85%",
              }
            : {
                width: "95%",
              }
        }
        className="content"
      >
        <Pages />
      </div>
    </div>
  );
}

export default Layout;
