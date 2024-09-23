import FAQ from "./components/FAQ";

function App() {
  const faqs = [
    {
      question: "Why is React great?",
      shortAnswer: "Fast Learning Curve.",
      longAnswer: "React is very a simple and lightweight library that only deals with the view layer. It is not a beast like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start developing an awesome web application after only a couple of days reading tutorial. As the React guide says Thinking in React may be a little different than you used to since it brings a new approach to the table, but it will become much easier and natural as you gain experience with it.",
    },
    {
      question: "What is the difference between state and props in React?",
      shortAnswer: "State is internal data that can be changed within a component, while props are read-only values passed down from parent components.",
      longAnswer: "State is a JavaScript object that stores data specific to a component. It can be modified using the setState method, which triggers a re-render. Props, on the other hand, are immutable attributes that are passed from parent to child components. They cannot be changed within the child component. Think of state as the component's private data, and props as the data it receives from its surroundings.",
    },
    {
      question: "What is the purpose of the key prop in React lists?",
      shortAnswer: "The key prop is used to uniquely identify list items and helps React efficiently update the DOM when items are added, removed, or reordered.",
      longAnswer: "When rendering lists in React, you must provide a unique key prop for each item. This key helps React efficiently update the DOM when the list changes. Without a key, React may have difficulty determining which items have been added, removed, or reordered, leading to potential performance issues and unexpected behavior. The key should be a stable, unique identifier for the item, such as an ID from your data source.",
    },
  ];

  return (
    <div>
      {faqs.map((faq, index) => (
        <FAQ key={index} {...faq} />
      ))}
    </div>
  );
}

export default App
