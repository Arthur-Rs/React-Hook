import React, { useState, useEffect } from "react";

import { Container, ContainerRepos } from "./styles";

export default function Repos() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    //Pegar os repositorios da Api do github
    async function getRepositoriesApi() {
      const Https = "https://api.github.com/users/Arthur-Rs/repos";

      const response = await fetch(Https);
      const data = await response.json();
      const repos = await data.map((_data) => ({
        ..._data,
        favorite: false,
      }));

      setRepositories(repos);
    }

    getRepositoriesApi();
  }, []);

  function handleFavorite(id) {
    const newRepositories = repositories.map((repo) =>
      repo.id === id
        ? {
            ...repo,
            favorite: !repo.favorite,
          }
        : repo
    );

    setRepositories(newRepositories);
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
              <strong>{repos.name}</strong>
              <p>{repos.description}</p>
              <button
                onClick={() => {
                  handleFavorite(repos.id);
                }}
              >
                Favoritar
              </button>
            </ContainerRepos>
          </li>
        ))}
      </ul>
    </Container>
  );
}
