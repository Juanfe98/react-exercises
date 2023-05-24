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
      <div className="max-w-lg">
       <h1 className="italic text-2xl	leading-4 text-center text-blue-950 mb-11">Curryin in JS</h1>
        <p className="mb-11">Currying is a technique that transforms a function with multiple arguments 
          into a sequence of functions, each taking a single argument. The purpose is to
          create specialized functions by partially applying arguments. It allows you to
          reuse a common function and generate new functions with predefined arguments.
        </p>
        <div className="flex flex-col gap-y-2	">
          <Input
            type="text"
            name="name"
            label="Name"
            placeholder="Name"
            value={name}
            onChange={handleChange(setName)}
          />
          <Input
            type="text"
            name="email"
            label="Email"
            placeholder="Email"
            value={email}
            onChange={handleChange(setEmail)}
          />
          <Input
            type="text"
            name="phone"
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