import React from "react";
import Bounce from "react-reveal/Bounce";
import ReactTyped from "react-typed";
import bg from "../Images/headerBg.gif";
import headerImg from "../Images/xgt-x.png";

const Header = () => {
  return (
    <div className="header-wraper">
      <div>
        <div className="main-info ">
          <img src={bg} alt="" />
        </div>
        <div>
          <div>
            <div className="header-info ">
              <div className="col-sm-12 col-md-6 col-lg-6 ">
                <Bounce left>
                  <img src={headerImg} alt="" />
                </Bounce>
              </div>
              <div className=" col-sm-12 col-md-6 col-lg-6  ">
                <Bounce right cascade>
                  <div className="header-text">
                    <h1>
                      <ReactTyped
                        strings={["A neat headline <br /> comes here !"]}
                        typeSpeed={80}
                        backSpeed={40}
                        loop
                      />
                    </h1>
                    <p>
                      A neat sample text to come here super soon. Till <br />{" "}
                      then admire the authentic and delightful User <br />{" "}
                      Interface Design of the Website. We are glad you <br />{" "}
                      came here , thanks for visiting .{" "}
                    </p>
                    <button>Show Details</button>
                  </div>
                </Bounce>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
