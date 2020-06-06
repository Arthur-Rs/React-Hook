import React, { useState, useEffect } from "react";

import { Container, ContainerRepos, Info, HeaderRespos } from "./styles";

import { BsStar, BsStarFill } from "react-icons/bs";

import { GoEye, GoRepoForked, GoStar } from "react-icons/go";

import usePersistedState from "../../Utils/Hooks/usePersistedState";

export default function Repos() {
  const [repositories, setRepositories] = usePersistedState("repos", []);

  useEffect(() => {
    //Pegar os repositorios da Api do github
    if (!repositories === []) {
      async function getRepositoriesApi() {
        const Https = "https://api.github.com/users/Microsoft/repos";

        const response = await fetch(Https);
        const data = await response.json();
        const repos = await data.map((_data) => ({
          ..._data,
          favorite: false,
        }));

        setRepositories(repos);
      }

      getRepositoriesApi();
    }
  }, []);

  function handleFavorite(id) {
    const newRepositories = repositories.map((repo) => {
      if (repo.id === id) {
        return { ...repo, favorite: !repo.favorite };
      } else {
        return repo;
      }
    });

    console.log(newRepositories);
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

  return (
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
}
