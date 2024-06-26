import "./App.css";

import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          text={el.text}
          number={i}
          key={el.title}
        />
      ))}
    </div>
  );
}
