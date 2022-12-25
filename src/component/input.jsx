

const Input = ({name, value, onChange, label}) => {
  return ( 
    <form>
            <div className="mb-3">
          <label htmlFor="email ">{label}</label>
          <input
            onChange={onChange}
            value={value}
            type="text"
            className="form-control"
            id={name}
            name={name}
          />
        </div>
    </form>
   );
}
 
export default Input;