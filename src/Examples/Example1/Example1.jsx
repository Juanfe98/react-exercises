import { useState } from "react";
import Input from "../../components/Input";
/**
 * Currying in JavaScript:
 * Currying is a technique that transforms a function with multiple arguments 
 * into a sequence of functions, each taking a single argument. The purpose is to 
 * create specialized functions by partially applying arguments. It allows you to
 * reuse a common function and generate new functions with predefined arguments.
 *
 */
function Example1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };

  return(
    <div className="flex justify-center">
      <div className="max-w-md">
       
        <div className="flex flex-col gap-y-2	">
          <Input
            type="text"
            name="Name"
            label="Name"
            placeholder="Name"
            value={name}
            onChange={handleChange(setName)}
          />
          <Input
            type="text"
            name="Email"
            label="Email"
            placeholder="Email"
            value={email}
            onChange={handleChange(setEmail)}
          />
          <Input
            type="text"
            name="Phone"
            label="Phone"
            placeholder="Phone"
            value={phone}
            onChange={handleChange(setPhone)}
          />
        </div>
      </div>
    </div>
  )
}

export default Example1;