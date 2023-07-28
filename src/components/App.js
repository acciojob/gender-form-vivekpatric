
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [gender, setGender] = useState("");
  const [shirtSize, setShirtSize] = useState("");
  const [dressSize, setDressSize] = useState("");

  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
  };

  const handleShirtSizeChange = (event) => {
    const selectedShirtSize = event.target.value;
    setShirtSize(selectedShirtSize);
  };

  const handleDressSizeChange = (event) => {
    const selectedDressSize = event.target.value;
    setDressSize(selectedDressSize);
  };

  return (
    <div onChange={handleGenderChange}>
      <h2>Select your gender</h2>
      
      <input type="radio" value="Male" name="gender" /> 
      <label> Male</label>
      
        <input type="radio" value="Female" name="gender" /> 
              <label> Female</label>
      {gender === "Male" && (
        <div>
          <h2>Select your shirt size:</h2>
            
            <select value={shirtSize} onChange={handleShirtSizeChange}>
              <option value="">Select size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          
        </div>
      )}

      {gender === "Female" && (
        <div>
           <h2>Select your dress size:</h2>
            <select value={dressSize} onChange={handleDressSizeChange}>
              <option value="">Select size</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              
            </select>
        
        </div>
      )}

      
    </div>
  );
};

export default App;
