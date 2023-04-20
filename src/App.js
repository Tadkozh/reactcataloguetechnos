// Imports pas par défaut
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Imports par défaut
import Home from './pages/Home';
import Menu from './components/Menu';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import './css/app.css';

function App() {
  const [technos, setTechnos] = useState([]) // technos = getter ; setTechnos = setter
  // stockage de toutes les technos ajoutées. Ca commence par un tableau vide qui va s'enrichir par la suite
  // [{name: 'React', category: 'front', description: 'learn React' }, {}, {}]

  function handleAddTechno(techno) {     
    console.log('handleAddTechno', techno);
  }
  // Sera appelée dans le composant TechnoAdd, et les props vont être "remontées" vers le parent Apps
  // Cela permettra ensuite de redescendre ces props vers le cousin TehnoList

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

        <Route path='/list' element={<TechnoList />} />
      </Routes>
    </>
  );
}

export default App;
