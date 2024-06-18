import { useState } from "react";

function Display(props) {
  const today = new Date();
  today.setDate(today.getDate() + props.count);
  return (
    <div>
      <span>
        {props.count === 0
          ? "Today is "
          : props.count > 0
          ? `${props.count} days from today is `
          : `${Math.abs(props.count)} days ago was `}
      </span>
      <span>{today.toDateString()}</span>
    </div>
  );
}

// function Reset() {
//   return <button>Reset</button>;
// }

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => {
            setStep(Number(e.target.value));
            setIsOpen(Number(e.target.value) === 1 ? false : true);
          }}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount((c) => Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <Display count={count} />
      {isOpen ? (
        <button
          onClick={() => {
            setStep(1);
            setIsOpen(false);
            setCount(0);
          }}
        >
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
