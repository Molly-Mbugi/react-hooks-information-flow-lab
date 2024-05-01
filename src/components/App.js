import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";


function App() {
  // State variable for toggling between dark and light modes
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Event handler for toggling between dark and light modes
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode); // Toggle the mode
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Pass onDarkModeClick callback function to Header */}
      <Header onDarkModeClick={toggleMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
;
