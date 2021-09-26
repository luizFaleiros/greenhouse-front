import { TextField, Button, FormGroup } from '@mui/material';
import React, { FunctionComponent, useState } from 'react';
import { LoginService } from "./services/login-service";

interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => {
    const [state, setState] = useState({ email: "", password: "" })
    const [error, setError] = useState({ error: false, text: "" })
    const loginService: LoginService = new LoginService();
    const hadleChange = (e: any) => {
        const { name, value } = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        loginService.login({ email: state.email, senha: state.password }).
        then((response)=> setError(response))
    }
    return (
        <section>
            <form onSubmit={(event) => {
                handleLogin(event);
            }}>

                <TextField
                    value={state.email}
                    id="email"
                    error={error.error}
                    helperText={error.text}
                    name="email"
                    onChange={hadleChange}
                    label="Email"
                    placeholder="Email"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    value={state.password}
                    id="password"
                    name="password"
                    type="password"
                    label="Senha"
                    onChange={hadleChange}
                    placeholder="Senha"
                    variant="outlined"
                    margin='normal'
                    fullWidth
                />
                <Button
                    type="submit"
                    color='primary'
                    variant="contained"
                >
                    Logar
                </Button>
            </form>
        </section>
    );
}

export default Login;

function LoginModel(LoginModel: any): [any, any] {
    throw new Error('Function not implemented.');
}


function setEmail(value: string): void {
    throw new Error('Function not implemented.');
}


function setSenha(value: string): void {
    throw new Error('Function not implemented.');
}
