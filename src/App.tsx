import { SideBar } from './components/SideBar';
import { Content } from './components/Content';


import './styles/global.scss';
import { useState } from 'react';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleSelectedGenreId(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar handleSelectedGenreId={handleSelectedGenreId}/>
      <Content selectedGenreId={selectedGenreId}/>
    </div>
  )
}