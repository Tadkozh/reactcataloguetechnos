// Imports pas par défaut
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import './css/app.css';

// Imports par défaut
import Home from './pages/Home';
import Menu from './components/Menu';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';

// Hook personnalisé
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [technos, setTechnos] = useState([]) // technos = getter ; setTechnos = setter
  // stockage de toutes les technos ajoutées. Ca commence par un tableau vide qui va s'enrichir par la suite
  // [{name: 'React', category: 'front', description: 'learn React' }, {}, {}]

  const STORAGE_KEY = "technos";
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []) // Custom hook

  // Au premier montage du composant
  useEffect(() => {
    setTechnos(storedTechnos);
    console.log('useEffect with []')
  }, [])

  // Au rerender chaque fois qu'une techno change
  useEffect(() => {
    setStoredTechnos(technos);
    console.log("useEffect with [technos]");
  }, [technos])

  function handleAddTechno(techno) {     
    console.log('handleAddTechno', techno);
    setTechnos([...technos, {...techno, technoid: uuidv4()}])
  }
  // Sera appelée dans le composant TechnoAdd, et les props vont être "remontées" vers le parent Apps
  // Cela permettra ensuite de redescendre ces props vers le cousin TechnoList

  function handleDeleteTechno(id) {
    setTechnos(technos.filter((tech) => tech.technoid !== id))
  }
  // Sera exécutée depuis le bouton Delete dans TechnoItem, après être passée par Technolist (props drilling)

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/add' element={<TechnoAdd handleAddTechno={handleAddTechno} hello='world' a={10} />} /> 
        {/* Passage des props de App vers TechnoAdd (du parent vers l'enfant) */}
        {/* Passage en props de la fonction handleAddTechno pour l'utiliser dans TechnoAdd) */}
        {/* hello='world' : deuxième props à valeur pédagogique */}
        {/* a='b' : troisième props à valeur pédagogique */}

        {/* Après transfert de props on constate dans l'onglet Components de l'extension React Developper Tools :
        TechnoAdd
          props
            a: "b"
            handleAddTechno: ƒ handleAddTechno() {}
            hello: "world"
            new entry: "" */}

        <Route path='/list' element={<TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno} />} />
      </Routes>
    </>
  );
}

export default App;
