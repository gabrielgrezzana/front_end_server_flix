import * as Style from "./style";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import { Path } from "../../types/routes";
import { User } from "./types/type";
import { Api } from "../../data/api/api";

export function Registration() {
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const user: User = {
      name: e.currentTarget.nameUser.value,
      cpf: e.currentTarget.cpf.value,
      email: e.currentTarget.email.value,
      idade: Number(e.currentTarget.idade.value),
      role: "user",
      password: e.currentTarget.password.value,
      confirmPassword: e.currentTarget.confirmPassword.value,
    };

    const response = await Api.createUser(user);
    if (response) {
      navigate(Path.LOGIN);
    }
  }
  return (
    <Style.registro>
      <Style.registroLogin>
        <Style.titleRegister>Cadastro</Style.titleRegister>
        <Style.registroform onSubmit={handleSubmit}>
          <Style.input type="text" name="nameUser" placeholder="Nome completo"></Style.input>
          <Style.input type="text" name="cpf" placeholder="CPF"></Style.input>
          <Style.input type="text" name="email" placeholder="Email"></Style.input>
          <Style.input type="number" name="idade" placeholder="Idade"></Style.input>
          <Style.input type="text" name="password" placeholder="Senha"></Style.input>
          <Style.input type="text" name="confirmPassword" placeholder="Confirmação da senha"></Style.input>
          <Style.registroDivButton>
            <Style.registroButton type="submit">Enviar</Style.registroButton>
            <Style.registroButton
              onClick={() => {
                navigate(Path.LOGIN);
              }}
            >
              Voltar
            </Style.registroButton>
          </Style.registroDivButton>
        </Style.registroform>
      </Style.registroLogin>
    </Style.registro>
  );
}
