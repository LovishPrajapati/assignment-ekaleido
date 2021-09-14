import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import data from "./data.json";

function App() {
  const [currentQue, setCurrentQue] = useState(0);

  const submitHandler = (e, que) => {
    e.preventDefault();
    if (e.target.id === que.answerId) {
      e.target.style.backgroundColor = "green";
      console.log(que);
      setCurrentQue((pre) => pre + 1);
    } else {
      e.target.style.backgroundColor = "red";
      document.getElementById(que.id + que.answerId).style.backgroundColor =
        "green";
      setCurrentQue((pre) => pre + 1);
    }
  };

  return (
    <>
      <Carousel
        className="slider"
        useKeyboardArrows={false}
        swipeable={false}
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        selectedItem={currentQue}
      >
        {data.map((que) => (
          <div className="container">
            <div key={que.id} className="question">
              <p>{que.question}</p>
            </div>
            <div className="options">
              {que.options.map((opt) => (
                <button
                  key={opt.id}
                  id={que.id + opt.id}
                  onClick={(e) => submitHandler(e, que)}
                >
                  {opt.option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
      <button id="reset" onClick={() => window.location.reload()}>
        Reset
      </button>
    </>
  );
}

export default App;
