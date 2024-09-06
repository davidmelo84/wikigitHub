import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import { Container } from './styles';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);
  const [visibleRepos, setVisibleRepos] = useState(5);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);
    if (data.id) {
      const isExist = repos.find(repo => repo.id === data.id);
      if (!isExist) {
        setRepos(prev => [...prev, { ...data, isFavorite: false }]);
        setCurrentRepo('');
      }
    } else {
      alert('Repositório não encontrado');
    }
  };

  const handleRemoveRepo = id => {
    setRepos(repos.filter(repo => repo.id !== id));
  };

  const handleToggleFavorite = id => {
    setRepos(repos.map(repo => repo.id === id ? { ...repo, isFavorite: !repo.isFavorite } : repo));
  };

  const loadMoreRepos = () => {
    setVisibleRepos(prevVisible => prevVisible + 5);
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="GitHub logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}>Buscar</Button>
      {repos.slice(0, visibleRepos).map(repo => (
        <ItemRepo 
          key={repo.id} 
          repo={repo} 
          handleRemoveRepo={handleRemoveRepo} 
          handleToggleFavorite={handleToggleFavorite}
        />
      ))}
      {visibleRepos < repos.length && (
        <Button onClick={loadMoreRepos}>Carregar mais</Button>
      )}
    </Container>
  );
}

export default App;
