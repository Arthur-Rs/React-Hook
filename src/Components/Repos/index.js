import React, { createContext } from "react";

import { Container, ContainerRepos, Info, HeaderRespos } from "./styles";
import { BsStar, BsStarFill } from "react-icons/bs";
import { GoEye, GoRepoForked, GoStar } from "react-icons/go";

import useRequestState from "../../Utils/Hooks/useRequestState";

import Request from "../../Utils/Functions/Request";

export let UpdateRepos = createContext(() => {});

export default function Repos() {
  const [repositories, setRepositories] = useRequestState(
    "Repositories",
    "Arthur-Rs"
  );

  const updateReposFromNewUser = () => {
    console.log("oi");
    const user = document.getElementById("user").value;
    Request(user).then((res) => {
      setRepositories(res);
    });
  };

  function handleFavorite(id) {
    const newRepositories = repositories.map((repo) => {
      if (repo.id === id) {
        return { ...repo, favorite: !repo.favorite };
      } else {
        return repo;
      }
    });
    setRepositories(newRepositories);
  }

  function getStar(favorite, id) {
    if (favorite === true) {
      return (
        <BsStarFill
          onClick={() => {
            handleFavorite(id);
          }}
        />
      );
    } else {
      return (
        <BsStar
          onClick={() => {
            handleFavorite(id);
          }}
        />
      );
    }
  }

  const Component = () => (
    <Container>
      <ul>
        {repositories.map((repos) => (
          <li
            favorite={repos.favorite === true ? "true" : "false"}
            key={repos.id}
          >
            <ContainerRepos>
              <HeaderRespos>
                <strong>{repos.name}</strong>
                {getStar(repos.favorite, repos.id)}
              </HeaderRespos>
              <p>{repos.description}</p>
              <Info>
                <div>
                  <span>{repos.language}</span>
                  <GoStar />
                  <span>{repos.stargazers_count}</span>
                  <GoEye />
                  <span>{repos.watchers_count}</span>
                  <GoRepoForked />
                  <span>{repos.forks_count}</span>
                </div>
                <button>Ver mais</button>
              </Info>
            </ContainerRepos>
          </li>
        ))}
      </ul>
    </Container>
  );

  const ComponentLoading = () => (
    <Container>
      <h1>Carregando...</h1>
    </Container>
  );

  if (repositories === []) {
    return ComponentLoading();
  } else {
    return Component();
  }
}
