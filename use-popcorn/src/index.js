import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxStar={10} onSetRating={setMovieRating} />
      <p>This movie was {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxStar={5}
      messages={["Tferrible", "Bad", "Okay", "Good", "Amazing"]}
      // defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);
