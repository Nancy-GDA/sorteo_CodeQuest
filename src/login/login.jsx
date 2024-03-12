import Form, {Title,ContainerInput, Input, Button, Label} from '../components/Form/index'

const Login  = () => {
    return (
        <>
        <Form className='form-control'>
  <Title> Login</Title>
  <ContainerInput className="input-field">
    <Input required="" className="input" type="text" />
    <Label className="label" htmlFor="input">Enter Email</Label>
  </ContainerInput>
  <ContainerInput className="input-field">
    <Input required="" className="input" type="password" />
    <Label className="label" htmlFor="input">Enter Password</Label>
  </ContainerInput>
  <a>Forgot your password?</a>
  <Button className="submit-btn">Sign In</Button>

        </Form>
        </>
    )
}

export default Login