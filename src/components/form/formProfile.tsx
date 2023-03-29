import * as Style from "./style";
import { Path } from "../../types/routes";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { Api } from "../../data/api/api";
import { FormInput } from "./types/types";

export function Form() {
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data: FormInput = {
      userEmail: localStorage.getItem("email") || "",
      movie: e.currentTarget.movie.value,
      serie: e.currentTarget.serie.value,
      anime: e.currentTarget.anime.value,
    };

    const response = await Api.createPorfile(data);
    if (response) {
      navigate(Path.HOME);
    }
  }

  return (
    <Style.Form>
      <Style.FormData onSubmit={handleSubmit}>
        <Style.titles>Perfil</Style.titles>
        <Style.InputCard type="text" placeholder="digite o ID do filme" name="movie" />
        <Style.InputCard type="text" placeholder="digite o ID da série" name="serie" />
        <Style.InputCard type="text" placeholder="digite o ID do anime" name="anime" />
        <Style.divbuttonformProfile>
          <Style.buttonformProfile type="submit">Salvar</Style.buttonformProfile>
          <Style.buttonformProfile
            type="submit"
            onClick={() => {
              navigate(Path.HOME);
            }}
          >
            voltar
          </Style.buttonformProfile>
        </Style.divbuttonformProfile>
      </Style.FormData>
    </Style.Form>
  );
}
