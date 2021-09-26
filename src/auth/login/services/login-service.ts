import api from "../../../api/api";
import LoginModel from "../models/LoginModel";

export class LoginService {

    async login(login: LoginModel) {
        return api.post('/Usuario/login', login).then((response) => {
            console.log("Logado")
            return { error: false, text: "" }
        })
        .catch((error) => {
            console.log(error)
            return { error: true, text: "Usuario ou senha invalidas" }
        }
        )
    }

}