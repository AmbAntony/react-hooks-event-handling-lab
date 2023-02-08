import React from 'react';
 

function Keypad (){
    function handleChange(event) {
        console.log(`Entering password...`);
      }
    
      return (
        <div>
          <input
            type="password"
             onChange={handleChange}
            placeholder="Enter password here..."
          />
    
        </div>
      );
}

export default Keypad;