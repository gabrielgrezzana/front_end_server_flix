import * as Style from "./style";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Path } from "../../types/routes";
import { Api } from "../../data/api/api";
import { Loading } from "../utils/loading/loading";

export function Login() {
  const navigate = useNavigate();
  const [erro, setErro] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const LoginPayload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    const response = await Api.login(LoginPayload);
    setLoading(false);
    if (!response) {
      setErro(true);
      return;
    }
    navigate(Path.HOME);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Style.Body>
          <Style.Login>
            <Style.Form onSubmit={handleSubmit} error={erro}>
              <Style.titleLogin>Login</Style.titleLogin>
              <Style.input placeholder="email" type="email" name="email"></Style.input>
              <Style.input placeholder="password" type="password" name="password"></Style.input>
              <Style.ButtonRegister type="submit">Login</Style.ButtonRegister>
              <Style.Register>
                <Style.ButtonRegister
                  onClick={() => {
                    navigate(Path.REGISTRATION);
                  }}
                >
                  Fazer cadastro
                </Style.ButtonRegister>
              </Style.Register>
            </Style.Form>
          </Style.Login>
        </Style.Body>
      )}
    </>
  );
}
