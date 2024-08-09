// import { useEffect, useState } from 'react'
import { useEffect } from 'react';
import useWindowSize from '../../Hooks/useWindowSize';
import './layout.scss';
import { DownOutlined, FacebookOutlined, HistoryOutlined, HomeOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, MenuOutlined, MergeOutlined, SnippetsOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps } from 'antd';

const items: MenuProps['items'] = [
  {
    label: <div style={{ marginLeft: "24px" }}><HomeOutlined style={{ marginRight: "12px" }} /> Home</div>,
    key: '0',
  },
  {
    type: 'divider',
  },
  {
    label: <div style={{ marginLeft: "24px" }}><MergeOutlined style={{ marginRight: "12px" }} /> About</div>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: <div style={{ marginLeft: "24px" }}><HistoryOutlined style={{ marginRight: "12px" }} /> Services</div>,
    key: '2',
  },
  {
    type: 'divider',
  },
  {
    label: <div style={{ marginLeft: "24px" }}><SnippetsOutlined style={{ marginRight: "12px" }} /> Resume</div>,
    key: '3',
  },
  {
    type: 'divider',
  },
  {
    label: <div style={{ marginLeft: "24px" }}><MailOutlined style={{ marginRight: "12px" }} /> Contact</div>,
    key: '4',
  },
];

const Layout = () => {

  const { width } = useWindowSize();

  useEffect(() => {
  }, [width])


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

          {width > 600 ?
            <div className='navList' style={{
              width: "60%"
            }}>
              <span>Home</span>
              <span>About</span>
              <span>Services</span>
              <span>Resume</span>
              <span>Contact</span>
            </div>
            : <div>
              <Dropdown overlayStyle={{ width: '50%' }} menu={{ items }} trigger={['click']}>
                <MenuOutlined onClick={(e) => e.preventDefault()} />
              </Dropdown>
            </div>
          }

        </div>
      </header>
      <div className="content">
        <div id='homeMain'>
          <p style={{ color: "#cc005f" }}> HELLO, WORLD.</p>
          <h1>I'm Vishu Sharma.</h1>
          <div>
            <p>| Front-End Devloper |</p>
          </div>

          <div className='btnDiv'>
            <button className='moreAboutMeBtn'>More About Me <DownOutlined className='icon' /></button>
          </div>

          <div style={{ marginTop: "80px", display: "flex", justifyContent: "space-evenly", width: "100%" }}>
            <FacebookOutlined style={{ color: "#cc005f", cursor: "pointer", fontSize: "30px", borderRadius: "5px" }} />
            <InstagramOutlined style={{ color: "#cc005f", cursor: "pointer", fontSize: "30px", borderRadius: "5px" }} />
            <LinkedinOutlined style={{ color: "#cc005f", cursor: "pointer", fontSize: "30px", borderRadius: "5px" }} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Layout