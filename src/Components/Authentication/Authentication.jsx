import React from "react";
import "./Authentication.css";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import DataContext from "../../Data/DataContext";
import { useContext } from "react";

const Authentication = () => {
  const { toggle, setToggle } = useContext(DataContext);

  return (
    <>

      <div className="authentication-wrapper">
        <div className="authentication-container">
          <div className="authentication-image">
            {/* <img src='https://media.licdn.com/dms/image/C5622AQHXGdfmKdzUsw/feedshare-shrink_800/0/1672156803159?e=2147483647&v=beta&t=dBnegm8YMV5Grs71cTtHOl6zfh515HOYqu4usxSHpr4' alt='' /> */}
            <img
              src="https://media.zenfs.com/en/prnewswire.com/3b526de689468d054cc01fa2e88f0ab9?hl=en_GB"
              alt=""
            />
          </div>
          <div className="authentication">
            {toggle ? <Login /> : <SignUp />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
