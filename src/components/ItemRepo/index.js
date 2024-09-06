import React from 'react';
import { ItemContainer } from './styles';

function ItemRepo({ repo, handleRemoveRepo, handleToggleFavorite }) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  const toggleFavorite = () => {
    handleToggleFavorite(repo.id);
  };

  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer" target="_blank" aria-label={`Ver o repositório ${repo.name}`}>Ver repositório</a><br />
        <button onClick={toggleFavorite} aria-label={repo.isFavorite ? `Desfavoritar ${repo.name}` : `Favoritar ${repo.name}`}>
          {repo.isFavorite ? 'Desfavoritar' : 'Favoritar'}
        </button>
        <button onClick={handleRemove} aria-label={`Remover ${repo.name}`}>Remover</button>
        <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
