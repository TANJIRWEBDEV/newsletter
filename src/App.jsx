import { useState } from "react";
import "./App.css";
import desktopimg from "./assets/desktop.svg";
import iconlist from "./assets/icon-list.svg";
import mobileimg from "./assets/mobile.svg";
import { useWindowSize } from "@uidotdev/usehooks";
import Complete from "./component/Complete";
function App() {
  const [count, setCount] = useState(true);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const res = useWindowSize();
  const handleS = () => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const valid = regex.test(email);
    // setError("");
    if (!email) {
      setError("Valid email required");
    }
    if (!valid) {
      setError("Valid email required");
    }
    if (valid) {
      setCount(false);
    }
  };
  console.log({ error });
  return (
    <div className="app">
      {count ? (
        <div className="container">
          <div className="items">
            <div className="items__1">
              <div className="item__1">Stay updated!</div>
              <div className="item__2">
                Join 60,000+ product managers receiving monthly updates on:
              </div>
              <div className="item__3">
                <div className="item__3-1">
                  <img src={iconlist} alt="icon" className="item__3-1_icon" />
                  <div>Product discovery and building what matters</div>
                </div>
                <div className="item__3-1">
                  <img src={iconlist} alt="icon" className="item__3-1_icon" />
                  <div>Measuring to ensure updates are a success</div>
                </div>
                <div className="item__3-1">
                  <img src={iconlist} alt="icon" className="item__3-1_icon" />
                  <div> An much more!</div>
                </div>
              </div>
              <div className="item__4">
                <div className="item__4-1">
                  Email address <span>{error}</span>
                </div>
                <input
                  type="text"
                  placeholder="email@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className={error ? "item__4-2" : ""}
                />
              </div>
              <div className="item__5">
                <button className="item__5-1" onClick={handleS}>
                  Subscribe to monthly newsletter
                </button>
              </div>
            </div>
            <div className="items__2">
              <span>
                <img
                  src={res.width > 740 ? desktopimg : mobileimg}
                  alt="desktopimg"
                  className="items__2_img"
                />
              </span>
            </div>
          </div>
        </div>
      ) : (
        <Complete email={email} sCount={setCount} />
      )}
    </div>
  );
}

export default App;
