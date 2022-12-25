// import { useState } from "react";
import axios from "axios";
import { useState } from "react";
import Input from "../input";
import * as yup from "yup";


const Login = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const [sending, setSending] = useState(false);

  async function handelSubmit(e) {
    e.preventDefault();
    const result = await validate();
    try {
      if(result){
        setSending(true);
        const response = await axios.post('https://reqres.in/api/login', result);
        setSending(false);
        console.log(response)
        } 
    } catch (error) {
      setErrors(['ایمیل یا پسورد اشتباه است'])
    }   
  }

  async function validate(){
    try {
      const response = await schema.validate(account, {abortEarly: false});
      return response;
    } catch (error) {
      setErrors(error.errors)
    }
  }

  const schema = yup.object().shape({
    email : yup.string('فرمت ایمیل صحیح نمی باشد').email('ایمیل صحیح نمی باشد').required('همه ی فیلدها باید پر شوند'),
    password: yup.string('پسورد صحیح نمی باشد').min(4, ' پسورد نمی تواند کمتر از 4 کلمه باشد').required('همه ی فیلدها باید پر شوند')
  })

  async function handelChange(e) {
    const input = e.currentTarget;
    const accounts = { ...account };
    console.log(accounts);
    accounts[input.name] = input.value;
    setAccount(accounts);
  }

  
  return (
    <>
          {
      errors.length !== 0 && (
        <div className="alert alert-danger">
          <ul>
            {
              errors.map((e,i)=> <li key={i}>{e}</li>)
            }
          </ul>
        </div>
      )
    }
      <form onSubmit={handelSubmit}>
        <Input name='email' label='Email' value={account.email} onChange={handelChange} />
        <Input name='password' label='Password' value={account.password} onChange={handelChange} />
        <button disabled={sending} className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
