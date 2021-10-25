import Accordion from "./components/Accordion";
import "./scss/styles.scss";

const App = () => {
  const data = [
    {
      question: "Question 1",
      answer:
        "The information in this article is based on the expert advice found in trusted medical and government sources, such as the American Academy of Pediatrics and the American College of Obstetricians and Gynecologists. You can find a full list of sources used for this article below. The content on this page should not replace professional medical advice. Always consult medical professionals for full diagnosis and treatment."
    },
    {
      question: "Question 2",
      answer:
        "The information in this article is based on the expert advice found in trusted medical and government sources, such as the American Academy of Pediatrics and the American College of Obstetricians and Gynecologists. You can find a full list of sources used for this article below. The content on this page should not replace professional medical advice. Always consult medical professionals for full diagnosis and treatment.",
      isOpen: true
    },
    {
      question: "Question 3",
      answer:
        "The information in this article is based on the expert advice found in trusted medical and government sources, such as the American Academy of Pediatrics and the American College of Obstetricians and Gynecologists. You can find a full list of sources used for this article below. The content on this page should not replace professional medical advice. Always consult medical professionals for full diagnosis and treatment."
    }
  ];
  return (
    <div className="App">
      <div className="wrapper">
        <Accordion data={data} />
      </div>
    </div>
  );
};
export default App;
