import "./complete.css";
import suc from "../assets/success.svg";
import PropTypes from "prop-types";
import { useWindowSize } from "@uidotdev/usehooks";

const Complete = ({ email, sCount }) => {
  const res = useWindowSize();
  console.log(email);
  return (
    <div className="main">
      <div className="com__items">
        <div className="item1">
          <img src={suc} alt="logo" />
        </div>
        <div className="item2">
          Thanks for <br />
          subscribing!
        </div>
        <div className="item3">
          A confirmation email has been sent to <br />
          <span>{email}</span>. Please open it and click
          {res.width > 390 ? <br /> : " "}the button inside to confirm your
          subscription.
        </div>
        <div className="item4">
          <button onClick={() => sCount((p) => !p)}>Dismiss message</button>
        </div>
      </div>
    </div>
  );
};

Complete.propTypes = {
  email: PropTypes.string,
  sCount: PropTypes.func,
};

export default Complete;
