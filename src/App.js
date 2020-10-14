import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        avatar="http://randomuser.me/api/portraits/men/72.jpg"
        name="Felix Freeman"
        online
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/men/39.jpg"
        name="Charlie Shaw"
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/20.jpg"
        name="Janice Austin"
        online
      />
    </div>
  );
}

export default App;
