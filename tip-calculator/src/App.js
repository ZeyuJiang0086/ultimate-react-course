import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const tip = bill * ((yourTip + friendTip) / 2);

  function handleReset() {
    setBill("");
    setYourTip(0);
    setFriendTip(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage tip={yourTip} onSetTip={setYourTip}>
        How did you like the service
      </SelectPercentage>
      <SelectPercentage tip={friendTip} onSetTip={setFriendTip}>
        How did your friend like the service
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onRest={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function SelectPercentage({ children, tip, onSetTip }) {
  return (
    <form>
      {children}
      {"? "}
      <select value={tip} onChange={(e) => onSetTip(Number(e.target.value))}>
        <option value="0">0%</option>
        <option value="0.1">10%</option>
        <option value="0.2">20%</option>
        <option value="0.3">30%</option>
      </select>
    </form>
  );
}

function Output({ bill, tip }) {
  const totalBill = bill + tip;

  return (
    <div>
      You pay ${totalBill} (${bill}+${tip})
    </div>
  );
}

function Reset({ onRest }) {
  return <button onClick={() => onRest()}>Reset</button>;
}
