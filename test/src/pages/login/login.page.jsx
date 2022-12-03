import { useState } from "react"

function Login() {

    const loginFormInitial = {
        email: 'qwerty@example.com',
        password: '1234'
    }

    const [loginFormValue, setLoginFormValue] = useState(loginFormInitial);

    const handleSubmit = () => {
        console.log('handled')
    }
    const handleChange = (event, fieldName) => {
        let val = event.target.value;

        setLoginFormValue({ ...loginFormValue, [fieldName]: val })
        console.log(loginFormValue)

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    type="email"
                    onChange={e => handleChange(e, 'email')}
                    value={loginFormValue?.email || ''}
                ></input>
            </label>
            <br />
            <br />
            <label>
                Password:
                <input
                    type="password"
                    onChange={e => handleChange(e, 'password')}
                    value={loginFormValue?.password || ''}
                ></input>
            </label>
            <br />
            <br />
            <input type="submit" value="Log In" />
        </form>
    )
}

export default Login;