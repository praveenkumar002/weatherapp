import "../style/style.css";
import addButton from "../icons/add.png";
import navButton from "../icons/nav.png";
import lowSunIcon from "../icons/lowSun.png";
import highSunIcon from "../icons/highSun.png";
import rightArrow from "../icons/rightArrow.png";
import leftArrow from "../icons/leftArrow.png";
import settings from "../icons/setting.png";
import user from "../icons/userImg.jpg";
import downArrow from "../icons/downArrowBlack.png";
import rightArrowBlack from "../icons/rightArrowBlack.png";

import lowSunIconBlack from "../icons/chartIcons/lowSunBlack.png";
import highSunIconBlack from "../icons/chartIcons/highSunBlack.png";
import cloud from "../icons/chartIcons/cloudBlack.png";

import humidity from "../icons/moreDetIcons/water.png";
import air from "../icons/moreDetIcons/air.png";
import rain from "../icons/moreDetIcons/rain.png";
import temp from "../icons/moreDetIcons/temp.png";
import umbr from "../icons/moreDetIcons/umbrella.png";

import ReactSwitch from "react-switch";
import { useState } from "react";

function Weather() {
  const [checked, setChecked] = useState(true);
  const handleChange = (val) => {
    setChecked(val);
  };

  const openSideBar = () => {
    document.getElementsByClassName("asside")[0].style.display = "block";
  };

  const closeSideBar = () => {
    let bar = document.getElementsByClassName("asside")[0];
    bar.style.display = "none";
    bar.style.transition = "all 1s";
  };
  return (
    <div className="main-container">
      <div className="asside">
        <div className="assideHeader">
          <img src={addButton} alt="" />
          <div className="assideTab">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ReactSwitch
            checked={checked}
            onChange={handleChange}
            height={16}
            width={38}
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            offColor="#b1b1b1"
            onColor="#b1b1b1"
            className="headerSwitch"
          />
        </div>

        <div className="assideContent">
          <div className="city">
            <div className="cityDet">
              <img src={navButton} alt="" />
              <h3>New York, USA</h3>
            </div>
            <div className="cityTime">
              <img src={highSunIcon} alt="" />
              <p>07:19</p>
            </div>
          </div>
          <div className="date">
            <p>Today 28 Sept</p>
            <div className="dateTime">
              <img src={lowSunIcon} alt="" />
              <p>19:32</p>
            </div>
          </div>
        </div>

        <div className="assideTemp">
          <img src={leftArrow} alt="" />
          <div className="assideTempValue">
            <h1>27&deg;</h1>
            <div className="assideTempValueType">
              <img src={highSunIcon} alt="" />
              <p>Sunny</p>
            </div>
          </div>
          <img src={rightArrow} alt="" />
        </div>

        <img
          src={leftArrow}
          alt=""
          className="closeSideBar"
          onClick={closeSideBar}
        />
      </div>

      {/*  */}

      <div className="main">
        <div className="mainHeader">
          <div className="mainHeaderUserWelcome">
            <p>Welcome back Isabella!</p>
            <p>Check out today's weather information</p>
          </div>
          <div className="mainHeaderUserProfile">
            <img src={settings} alt="" className="userImage" />
            <img src={user} alt="" />
          </div>
        </div>

        <div className="mainChart">
          <div className="mainChartHead">
            <p>Upcoming hours</p>
            <div className="mainChartHeadButtons">
              <div>
                Rain preception <img src={downArrow} alt="" />
              </div>
              <div>
                Next days <img src={rightArrowBlack} alt="" />
              </div>
            </div>
          </div>

          <div className="mainChartDetail">
            <div>
              <p>Now</p>
              <img src={lowSunIconBlack} alt="" />
              <p>27&deg;</p>
              <span></span>
              <p>23%</p>
            </div>
            <div>
              <p>11:00</p>
              <img src={highSunIconBlack} alt="" />
              <p>28&deg;</p>
              <span></span>
              <p>29%</p>
            </div>
            <div>
              <p>12:00</p>
              <img src={cloud} alt="" />
              <p>28&deg;</p>
              <span></span>
              <p>58%</p>
            </div>
            <div>
              <p>13:00</p>
              <img src={cloud} alt="" />
              <p>29&deg;</p>
              <span></span>
              <p>75%</p>
            </div>
            <div>
              <p>14:00</p>
              <img src={highSunIconBlack} alt="" />
              <p>30&deg;</p>
              <span></span>
              <p>33%</p>
            </div>
            <div>
              <p>15:00</p>
              <img src={cloud} alt="" />
              <p>29&deg;</p>
              <span></span>
              <p>20%</p>
            </div>
            <div>
              <p>16:00</p>
              <img src={cloud} alt="" />
              <p>29&deg;</p>
              <span></span>
              <p>73%</p>
            </div>
            <div>
              <p>17:00</p>
              <img src={lowSunIconBlack} alt="" />
              <p>28&deg;</p>
              <span></span>
              <p>49%</p>
            </div>
          </div>

          <div className="graphColor"></div>
          <div className="graphColor1"></div>
          <div className="graphColor2"></div>
          <div className="graphColor3"></div>
        </div>

        <div className="mainDetails">
          <h4>More details of today's weather</h4>

          <div className="mainDetailsContainer">
            <div className="mainDetailsItem">
              <div className="mainDetailsItemTitle">
                <p>Humidity</p>
                <img src={humidity} alt="" />
              </div>
              <p className="mainDetailsItemValue">
                82%
                <span>bad</span>
              </p>
              <div className="mainDetailsItemBar">
                <div className="child1">
                  <p>good</p>
                  <div></div>
                </div>
                <div className="child2">
                  <p>normal</p>
                  <div></div>
                </div>
                <div className="child3">
                  <p>bad</p>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="mainDetailsItem">
              <div className="mainDetailsItemTitle">
                <p>Precipitation</p>
                <img src={rain} alt="" />
              </div>
              <p className="mainDetailsItemValue">1.4cm</p>
              <div className="mainDetailsItemBar">
                <div className="child1">
                  <p>0</p>
                  <div></div>
                </div>
                <div className="child2">
                  <p>10</p>
                  <div></div>
                </div>
                <div className="child3">
                  <p>20</p>
                  <div></div>
                </div>
                <div className="child3">
                  <p>30</p>
                  <div></div>
                </div>
                <div className="child3">
                  <p>40</p>
                  <div></div>
                </div>
                <div className="child3">
                  <p>50</p>
                  <div></div>
                </div>
                <div className="child3">
                  <p>60</p>
                  <div></div>
                </div>
                <div className="child3">
                  <p>70</p>
                  <div></div>
                </div>
                <div className="child3">
                  <p>80</p>
                  <div></div>
                </div>
                <div className="child3">
                  <p>90</p>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="mainDetailsItem">
              <div className="mainDetailsItemTitle">
                <p>UV index</p>
                <img src={highSunIcon} alt="" />
              </div>
              <p className="mainDetailsItemValue">
                4<span>medium</span>
              </p>
              <div className="mainDetailsItemBar">
                <div className="child1">
                  <p>0-2</p>
                  <div></div>
                </div>
                <div className="child2">
                  <p>3-5</p>
                  <div></div>
                </div>
                <div className="child3">
                  <p>6-7</p>
                  <div></div>
                </div>
                <div className="child3">
                  <p>8-10</p>
                  <div></div>
                </div>
                <div className="child3">
                  <p>11+</p>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="mainDetailsItem">
              <div className="mainDetailsItemTitle">
                <p>Feels like</p>
                <img src={temp} alt="" />
              </div>
              <p className="mainDetailsItemValue">30&deg;</p>
              <div className="mainDetailsItemBar">
                <div className="child1">
                  <p>
                    <span>0&deg;</span> <span>25&deg;</span>{" "}
                    <span>50&deg;</span>
                  </p>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="mainDetailsItem">
              <div className="mainDetailsItemTitle">
                <p>Chance of rain</p>
                <img src={umbr} alt="" />
              </div>
              <p className="mainDetailsItemValue">42%</p>
              <div className="mainDetailsItemBar">
                <div className="child1">
                  <p>
                    <span>0%</span> <span>25%</span> <span>50%</span>{" "}
                    <span>75%</span> <span>100%</span>
                  </p>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="mainDetailsItem" id="mainDetailsItemWind">
              <div className="mainDetailsItemTitle">
                <p>Wind</p>
                <img src={air} alt="" />
              </div>
              <div className="windBarContainer">
                <div className="windBarContainerItem">
                  <div></div>
                </div>
              </div>
              <div className="clear">
                <h1>8 km/h</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <img
        src={rightArrowBlack}
        alt=""
        className="openSideBar"
        onClick={openSideBar}
      />
    </div>
  );
}

export default Weather;
