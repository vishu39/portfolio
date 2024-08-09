// import { useEffect, useState } from 'react'
import './layout.scss';
import { DownOutlined } from '@ant-design/icons';

const Layout = () => {
  // const [collapsed, setCollapsed] = useState(JSON.parse(localStorage.getItem("isCollapsed")));

  // const toggleSidebar = () => {
  //   // setCollapsed(!collapsed);
  //   let collapse: boolean = !collapsed
  //   localStorage.setItem("isCollapsed", JSON.stringify(collapse))
  // };

  // useEffect(() => {
  //   let collapse = localStorage.getItem('isCollapsed')
  //   console.log(collapse);
  // }, [collapsed])

  return (
    <div className='main hide-scrollbar'>
      <header>
        <div className="nav">
          <div style={{
            width: "40%"
          }}>
            <h2 style={{
              margin: "0"
            }}>Portfolio</h2>
          </div>
          <div className='navList' style={{
            width: "60%"
          }}>
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Resume</span>
            <span>Contact</span>
          </div>
        </div>
      </header>
      <div className="content">
        <div id='homeMain'>
          <p> HELLO, WORLD.</p>
          <h1>I'm Vishu Sharma.</h1>
          <div>
            <p>| Front-End Devloper |</p>
          </div>

          <div className='btnDiv'>
            <button className='moreAboutMeBtn'>More About Me <DownOutlined className='icon' /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout