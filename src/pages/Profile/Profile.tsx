import * as Style from "./Style";
import { Select } from "../../components/options/select";
import { useState, useEffect } from "react";
import { Animes, Movies, Series } from "./types/types";
import { Api } from "../../data/api/api";
import { useNavigate } from "react-router-dom";
import { Path } from "../../types/routes";

export function Profile() {
  const [selectValue, setSelectValue] = useState<string>("");
  const [movie, setMovie] = useState<Movies[]>([]);
  const [serie, setSerie] = useState<Series[]>([]);
  const [anime, setAnime] = useState<Animes[]>([]);
  const navigate = useNavigate();

  const options = ["Movies", "Series", "Animes"];

  async function getProfileMovies() {
    const data = await Api.getMovie();
    setMovie(data);
  }

  async function getProfileSeries() {
    const data = await Api.getSerie();
    setSerie(data);
  }

  async function getProfileNamine() {
    const data = await Api.getAnime();
    setAnime(data);
  }

  useEffect(() => {
    getProfileMovies();
    getProfileSeries();
    getProfileNamine();
  }, []);

  return (
    <Style.profileDiv>
      <Style.profileHeader>
        <h1>Perfil do Usuário</h1>
      </Style.profileHeader>
      <Style.profilebuttonSair
        onClick={() => {
          navigate(Path.HOME);
        }}
      >
        Voltar
      </Style.profilebuttonSair>
      <Style.profileBody>
        <Select options={options} selectOptions={setSelectValue} />
        {selectValue === "Movies" && (
          <>
            {movie.map((a) => {
              return (
                <Style.profileElement key={a.id}>
                  <Style.profileCard>
                    <h3>{a.title}</h3>
                    <Style.profileImg src={a.image} alt="img" />
                    <p>{a.description}</p>
                    <p>{a.avaliation}</p>
                  </Style.profileCard>
                </Style.profileElement>
              );
            })}
          </>
        )}
        {selectValue === "Series" && (
          <>
            {serie.map((b) => {
              return (
                <Style.profileElement key={b.id}>
                  <Style.profileCard>
                    <h3>{b.title}</h3>
                    <Style.profileImg src={b.image} alt="img" />
                    <p>{b.description}</p>
                    <p>{b.avaliation}</p>
                  </Style.profileCard>
                </Style.profileElement>
              );
            })}
          </>
        )}
        {selectValue === "Animes" && (
          <>
            {anime.map((c) => {
              return (
                <Style.profileElement key={c.id}>
                  <Style.profileCard>
                    <h3>{c.title}</h3>
                    <Style.profileImg src={c.image} alt="img" />
                    <p>{c.description}</p>
                    <p>{c.avaliation}</p>
                  </Style.profileCard>
                </Style.profileElement>
              );
            })}
          </>
        )}
      </Style.profileBody>
    </Style.profileDiv>
  );
}
