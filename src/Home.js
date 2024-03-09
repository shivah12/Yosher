import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import Search from './Search';
//import { Tooltip } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
//import {Link, Typography,} from "@material-ui/core";

function Home() {
  return (
    <div className='home'>
      {/* <h1>This is Home Page</h1> */}

      <div className='home__header'>
            <div className='home__headerLeft'>
                <Link to='/about'>About</Link>
                <Link to='/store'>Store</Link>
            </div>

            <div className='home__headerRight'>
            <a href='https://www.google.com/intl/en_in/gmail/about/' target='_blank' rel='noopener noreferrer'>Gmail</a>
            <a href='https://images.google.com/' target='_blank' rel='noopener noreferrer'>Images</a>
                
                
                <AppsIcon />
                {/* </Tooltip> */}
               
                  <Avatar />
                {/* </Tooltip> */}
            </div>

      </div>

      <div className='home__body'>
          
          <center>
          <img
                        className='willow__logo'
                        src='logo.png'
                        alt="ylogo"
                    />
          </center>
          <p className='willow__credits'>
           shivah12
          </p>
          
          <div className='home__inputContainer'>
              <Search />

          </div>
      </div>
    </div>
  )
}

export default Home;
