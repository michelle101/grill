import './Home.css';
import React from 'react';
import menu_chicken from '../../img/menu_chicken.png';
import menu_beef from '../../img/menu_beef.png';
import menu_pork from '../../img/menu_pork.png';
import discount from "../../img/discount.png";
import meat_exp from "../../img/meat_exp.png";
import sp_of_the_month from "../../img/sp_of_the_month.png";
import method_pict from "../../img/method_pict.png";
import music from "../../img/music.png";
import Slider from '../slider/Slider';
import {Link} from 'react-router-dom';

export const Home = () => {
  return (
    <div className="HomeWrapper">
      <div className="slider">
        <Slider />   
      </div>
      <div className="menu">
          <div className="title">Menu</div>
          <div className="menus">
            
            <div className="menuwrap">
              <img src={menu_chicken} alt="Menu Chicken" />
              <div className="boxes">
                <div className="box_title">&nbsp;CHICKEN</div>
                  <div className="box_content">
                    <div className="itemwrapper">
                      <div className="box_item">Chicken with salad</div>
                      <div className="box_price">6,00</div>
                    </div>
                    <div className="itemwrapper">
                      <div className="box_item">The Gold Chicken</div>
                      <div className="box_price">11,00</div>
                    </div>
                    <div className="itemwrapper">
                      <div className="box_item">Chicken with sauce</div>
                      <div className="box_price">8,00</div>
                    </div>
                  </div>
              </div>{/*--boxes */}
            </div> {/*//--menuwrap*/}

            <div className="menuwrap">
              <img src={menu_beef} alt="Menu Chicken" />
              <div className="boxes">
                <div className="box_title">&nbsp;BEEF</div>
                  <div className="box_content">
                    <div className="itemwrapper">
                      <div className="box_item">Prime Steak</div>
                      <div className="box_price">6,00</div>
                    </div>
                    <div className="itemwrapper">
                      <div className="box_item">Steak Beef (700gr.)</div>
                      <div className="Entrecote">11,00</div>
                    </div>
                    <div className="itemwrapper">
                      <div className="box_item">Chicken with sauce</div>
                      <div className="box_price">8,00</div>
                    </div>
                  </div>
              </div>{/*--boxes */}
            </div> {/*//--menuwrap*/}

            <div className="menuwrap">
              <img src={menu_pork} alt="Menu Chicken" />
              <div className="boxes">
                <div className="box_title">&nbsp;PORK</div>
                  <div className="box_content">
                    <div className="itemwrapper">
                      <div className="box_item">Pork Cheeks</div>
                      <div className="box_price">6,00</div>
                    </div>
                    <div className="itemwrapper">
                      <div className="box_item">Iberian Special Cut</div>
                      <div className="box_price">11,00</div>
                    </div>
                    <div className="itemwrapper">
                      <div className="box_item">Pork Chop</div>
                      <div className="box_price">8,00</div>
                    </div>
                  </div>
              </div>{/*--boxes */}
            </div> {/*//--menuwrap*/}

            <div className="menuwrap">
              <div className="boxes">
                <div className="box_title">&nbsp;SLIDES</div>
                  <div className="box_content">
                    <div className="itemwrapper">
                      <div className="box_item">Potato fries</div>
                      <div className="box_price">6,00</div>
                    </div>
                    <div className="itemwrapper">
                      <div className="box_item">Mushrooms</div>
                      <div className="box_price">11,00</div>
                    </div>
                    <div className="itemwrapper">
                      <div className="box_item">Roasted Brocoli</div>
                      <div className="box_price">8,00</div>
                    </div>
                  </div>
              </div>{/*--boxes */}
            </div> {/*//--menuwrap*/}

            <div className="menuwrap">
              <div className="boxes">
                <div className="box_title">&nbsp;DRINKS</div>
                  <div className="box_content">
                    <div className="itemwrapper">
                      <div className="box_item">Soft Drink</div>
                      <div className="box_price">6,00</div>
                    </div>
                    <div className="itemwrapper">
                      <div className="box_item">Beer</div>
                      <div className="box_price">11,00</div>
                    </div>
                    <div className="itemwrapper">
                      <div className="box_item">Wine Glass</div>
                      <div className="box_price">8,00</div>
                    </div>
                  </div>
              </div>{/*--boxes */}
            </div> {/*//--menuwrap*/}

            <div className="menuwrap">
              <div className="boxes">
                <div className="box_title">&nbsp;DESSERTS</div>
                  <div className="box_content">
                    <div className="itemwrapper">
                      <div className="box_item">Cheesecake</div>
                      <div className="box_price">6,00</div>
                    </div>
                    <div className="itemwrapper">
                      <div className="box_item">Tiramisu</div>
                      <div className="box_price">11,00</div>
                    </div>
                    <div className="itemwrapper">
                      <div className="box_item">Chocolate Mousse</div>
                      <div className="box_price">8,00</div>
                    </div>
                  </div>
              </div>{/*--boxes */}
            </div> {/*//--menuwrap*/}

          </div>{/*menus*/}
      </div>
      <div className="discount">
        <div className="disc_left">
          <img src={discount} alt="discount" />
        </div>
        <div className="disc_right">
          <div>
            <h1>
            Get a<br /><b>25% discount</b><br />on your next dinner
            </h1>
          </div>
          <div>
            <Link to="/specials">Click Here</Link>
          </div>
          <div>
            <img src={meat_exp} alt='Meat Experience' />
          </div>
          
        </div>
      </div>{/*discount*/}

      <div className="special">
        <div className="sp_row">
          <div className="sp_row_left">
              <div className="sp_heading">SPECIAL OF THE MONTH</div>
              <div className ="sp_text">Lorem Ipsum</div>
          </div>
          <div className="sp_row_right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori
          </div>
        </div>
        <img src={sp_of_the_month} alt='special of the month' />
      </div>{/*special */}
      <div className="method">
        <div className="method_left">
          <img src={method_pict} alt="Our Method" />
        </div>
        <div className="method_right">
          <div className="method_box">
            <div className="method_heading">
              Our Method
            </div>
            <div className="method_text">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
            </div>
          </div>
        </div>
      </div>{/*method */}
      <div className="music">
        <div className="music_left">
        <div className="music_box">
            <div className="musicb_heading">
              LIVE MUSIC
            </div>
            <div className="musicb_text">
              Jazz Night <br /> Every Friday
            </div>
          </div>
        </div>
        <div className="music_right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. 
        </div>
        <img src={music} alt="Live Music" />
      </div>{/*music */}

    </div>
  )
}
