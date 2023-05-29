/** 
 * Challenge: Make this app work like a calculator that can add two numbers.
 * Functionality: When user place numbers on first and second input and hit the
 * button. The sum should appear on the `Total: ` as an output. 
**/
function Exercise2() {

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input placeholder="First Number" type="number" />
      <input placeholder="Second Number" type="number" />

      <button>Add Two Numbers</button>
      <p>Total:</p>
    </div>
  );
}

export default Exercise2;