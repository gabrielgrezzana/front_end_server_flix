import * as Style from "./style";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Path } from "../../types/routes";
import chevron from "../../assets/images/chevron.png";

type teste = {
  image: string;
};

export function Home() {
  const navigate = useNavigate();

  const [stateMovie, setStateMovie] = useState<teste[]>([]);
  const [stateAnime, setStateAnime] = useState<teste[]>([]);
  const [stateSerie, setStateSerie] = useState<teste[]>([]);

  useEffect(() => {
    fetch("http://localhost:5173/static/movies.json")
      .then((res) => res.json())
      .then(setStateMovie);

    fetch("http://localhost:5173/static/series.json")
      .then((res) => res.json())
      .then(setStateSerie);

    fetch("http://localhost:5173/static/animes.json")
      .then((res) => res.json())
      .then(setStateAnime);
  }, []);

  function logout() {
    localStorage.removeItem("token");
    navigate(Path.LOGIN);
  }

  return (
    <Style.Home>
      <Style.Menu>
        <Style.MenuHomeDiv
          onClick={() => {
            navigate(Path.FORM);
          }}
        >
          crar perfil
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv
          onClick={() => {
            navigate(Path.PROFILE);
          }}
        >
          acessar perfil
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv
          onClick={() => {
            navigate(Path.FORM_MOVIE);
          }}
        >
          Adicionar um novo filme
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv
          onClick={() => {
            navigate(Path.MOVIES);
          }}
        >
          Visualizar todos os filmes
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv
          onClick={() => {
            navigate(Path.FORM_SERIE);
          }}
        >
          Adicionar uma nova série
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv
          onClick={() => {
            navigate(Path.SERIES);
          }}
        >
          Vizualizar todas as Séries
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv
          onClick={() => {
            navigate(Path.FORM_ANIME);
          }}
        >
          Adicionar um novo Anime
        </Style.MenuHomeDiv>
        <Style.MenuHomeDiv
          onClick={() => {
            navigate(Path.ANIMES);
          }}
        >
          Visualizar todos os Animes
        </Style.MenuHomeDiv>
      </Style.Menu>
      <Style.PageHome>
        <h3>Movies</h3>
        <Style.carouselHomeMovie>
          <Style.whapperHomeMovie>
            <Style.arrowLeftMovie src={chevron} alt="chevron" />
            <Style.carousel>
              {stateMovie.map((el) => {
                console.log(el);
                return <Style.carouselItem src={el.image} alt="img" />;
              })}
            </Style.carousel>
            <Style.arrowRigthMovie src={chevron} alt="chevron" />
          </Style.whapperHomeMovie>
        </Style.carouselHomeMovie>
        <h3>Series</h3>
        <Style.carouselHomeMovie>
          <Style.whapperHomeMovie>
            <Style.arrowLeftSerie src={chevron} alt="chevron" />
            <Style.carousel>
              {stateSerie.map((el) => (
                <Style.carouselItem src={el.image} alt="img" />
              ))}
            </Style.carousel>
            <Style.arrowRigthSerie src={chevron} alt="chevron" />
          </Style.whapperHomeMovie>
        </Style.carouselHomeMovie>
        <h3>Animes</h3>
        <Style.carouselHomeMovie>
          <Style.whapperHomeMovie>
            <Style.arrowLeftAnime src={chevron} alt="chevron" />
            <Style.carousel>
              {stateAnime.map((el) => (
                <Style.carouselItem src={el.image} alt="img" />
              ))}
            </Style.carousel>
            <Style.arrowRigthAnime src={chevron} alt="chevron" />
          </Style.whapperHomeMovie>
        </Style.carouselHomeMovie>
      </Style.PageHome>
    </Style.Home>
  );
}
