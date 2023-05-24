function Input(props) {
  return (
    <>
     <label htmlFor={props.label} className="block text-sm font-medium leading-6 text-gray-900">
        {props.label}
      </label>
      <input
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
        {...props}
      />
    </>
  )
}

export default Input;