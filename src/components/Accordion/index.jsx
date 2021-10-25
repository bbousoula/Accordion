import { useState } from "react";

const Accordion = ({ data }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <div className="item" key={i}>
          <div className="title" onClick={() => toggle(i)}>
            <span className="arrow">{selected === i ? "-" : "+"}</span>
            <h2>{item.question}</h2>
          </div>
          <div className={selected === i ? "content show" : "content"}>
            <h2>{item.answer}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Accordion;
