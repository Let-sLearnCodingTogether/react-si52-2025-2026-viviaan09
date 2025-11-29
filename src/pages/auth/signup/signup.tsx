import { useState, type ChangeEvent, type FormEvent } from "react"
import { Form } from "react-bootstrap"
import {  NavLink } from "react-router"
import ApiClient from "../../../utils/ApiClient"

interface SignUpForm {
    username : string,
    email : string,
    password : string,
}

function SignUp() {

    const [form, setform] = useState<SignUpForm>({
        username: "",
        email: "",
        password: "",
    })

    const onHandleChange = (event : ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = event.target

        setform({
            ...form,
            [name]:value
        })
    }
    const onSubmit = async (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try{
            const response = await ApiClient.post("/signup",form)

            console.log(response)
        }catch(error){
            console.log(error)
        }
    }
  return <div className="container mx-auto  ">
    <h1>Sign Up Page</h1>

    
      <Form onSubmit={onSubmit}>

          <Form.Group className="mb-3" controlId="formusername">
              <Form.Label>username</Form.Label>
              <Form.Control onChange={onHandleChange}
              value={form.username}
                  name="username"
                  type="text"
                  placeholder="username" />
          </Form.Group>
           <Form.Group className="mb-3" controlId="formemail">
              <Form.Label>email</Form.Label>
              <Form.Control onChange={onHandleChange}
              value={form.email}
                  name="email"
                  type="text"
                  placeholder="email" />
          </Form.Group>
           <Form.Group className="mb-3" controlId="formpassword">
              <Form.Label>password</Form.Label>
              <Form.Control onChange={onHandleChange}
              value={form.password}
                  name="password"
                  type="text"
                  placeholder="password" />
          </Form.Group>

      </Form>
      <NavLink to="/"className="btn btn-primary">Sign Up</NavLink>
  </div>
}
export default SignUp