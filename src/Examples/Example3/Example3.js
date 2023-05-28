/**
 * Uncontrolled Components: In this approach, form inputs maintain their own state 
 * internally using refs, and the form data is accessed using refs when needed.
 */
import {useRef} from 'react';

const Example3 = () => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    // Form submission logic here
    console.log({ name, email });
    // Reset form inputs
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameInputRef} />
      <input type="email" ref={emailInputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Example3;