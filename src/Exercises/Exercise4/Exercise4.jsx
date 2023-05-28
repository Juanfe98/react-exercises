/**
 * Challenge: Updating Parent State from Child Component
 * Your task is to create a parent component and a child component in React
 * The child component should have an input field, and whenever the user
 * types in the input, the parent component's state should be updated wit
 * the entered value. The parent component should display the value entere 
 * by the user.
 * 
 */
import { useState } from 'react';

const ParentComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    // TODO: Update the inputValue state with the entered value from the child component
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Entered Value: {inputValue}</p>
      <ChildComponent />
    </div>
  );
};

const ChildComponent = () => {
  return (
    <div>
      <h3>Child Component</h3>
      <input type="text" onChange={() => console.log('changing')} />
    </div>
  );
};

export default function Exercise4() {
  return (
    <div>
      <ParentComponent />
    </div>
  );
}