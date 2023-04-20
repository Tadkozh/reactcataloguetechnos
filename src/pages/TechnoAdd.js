// TechnoAdd est un dump component (un composant idiot) : il ne fait que récupérer les données
// Le Smart component, c'est app.js : il va gérer le stockage des données collectées pour pouvoir aussi les envoyer sur TechnoList
// app récupère chaque techno avec sa fonction handleAddTechno, qui va alienter le tableau useState technos

import { useState } from 'react';

export default function TechnoAdd(props) { // Passage des props de App vers TechnoAdd (du parent vers l'enfant) 
  //--> vérifiable dans l'onglet Components de l'extension React Developper Tools :
      //TechnoAdd
      //  props
      //    handleAddTechno: ƒ handleAddTechno() {}
      //    hello: "world"
      //    new entry: ""
  const [techno, setTechno] = useState({
    technoname: '',
    technocategory: '',
    technodescription: '',
  });

  const { handleAddTechno, a } = props //déstructuration 
  // https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript-fr

  // const techno = {
  //   name: 'React',
  //   category: 'front',
  //   description: 'Learn React',
  // }; // un objet en dur pour savoir si notre tuyauterie fonctionne
  //Chaque fois qu'on clique sur le bouton "Add Techno", on obtient bien dans la console :
          // handleAddTechno {name: 'React', category: 'front', description: 'Learn React'}
          // category: "front"
          // description: "Learn React"
          // name: "React"

  //Donc le passage de props fonctionne.

  function handleChange(evt) {
    const {name, value} = evt.target //déstructuring
    setTechno({...techno, [name]: value }) // immutabilité : on clone l'objet techno ..., et on ajoute la valeur récupérée
  }
  // Selon l'endroit, name vaut technoname, technocategory, technodescription
  // value, c'est à dire evt.target
  // Une seule fonction pour tous les champs !

  function handleSubmit(evt) {
    evt.preventDefault(); //pour éviter que toute la page se rafraichisse
    handleAddTechno(techno); // La fonction handleAddTechno réside dans app mais est passée dans les props (déstructuration ci-dessus)
    console.log('a', a); // props à valeur pédagogique issue de App
    setTechno({
      technoname: '',
      technocategory: '',
      technodescription: '',
    });
    // On reset techno pour signifier à l'utilisateur que sa validation du formulaire est prise en compte 
    // et éviter de rentrer plusieurs fois le même objet (mais n'évite pas de rentrer plusieurs fois un objet vide)
    // PB : Mon state techno est bien vidé, mais pas les champs du formulaire ???
  }

  return (
    <div className='techno-add'>
      <h1>Add a Techno</h1>
      <div>
        {/* <form onSubmit = {(evt) => handleAddTechno(evt)}> */}
        <form onSubmit = {(evt) => handleSubmit(evt)}>
          <label htmlFor='technoname'>Name</label>
          <br />
          <input type='text' name='technoname' id='technoname' 
            value={techno.technoname} // Associer le contenu du champ au technoname de l objet techno (useSate ci-dessus) 
            onChange={(evt) => handleChange(evt)} // Laisser la possiblité de changer le contenu du champs tant que formulaire n'est pas validé
            />
          <br />
          <label htmlFor='technocategory'>Category</label>
          <br />
          <select name='technocategory' id='technocategory' 
            value={techno.technocategory} 
            onChange={(evt) => handleChange(evt)} >
              <option value=''>Select a category</option>
              <option value='front'>Front</option>
              <option value='back'>Back</option>
              <option value='fullstack'>Full Stack</option>
              <option value='other'>Other</option>
          </select>
          <br />
          <label htmlFor='technodescription'>Description</label>
          <br />
          <textarea name='technodescription' id='technodescription' cols='30' rows='10' 
            value={techno.technodescription} 
            onChange={(evt) => handleChange(evt)} >
          </textarea>
          <br />
          <input type='submit' value='Add Techno' className='btn'/>
        </form>
      </div>
    </div>
  )
}