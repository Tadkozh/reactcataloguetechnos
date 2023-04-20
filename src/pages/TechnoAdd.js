// TechnoAdd est un dump component (un composant idiot) : il ne fait que récupérer les données
// Le Smart component, c'est app.js : il va gérer le stockage des données collectées pour pouvoir aussi les envoyer sur TechnoList
// app récupère chaque techno avec sa fonction handleAddTechno, qui va alienter le tableau useState technos


export default function TechnoAdd(props) { // Passage des props de App vers TechnoAdd (du parent vers l'enfant) 
  //--> vérifiable dans l'onglet Components de l'extension React Developper Tools :
      //TechnoAdd
      //  props
      //    handleAddTechno: ƒ handleAddTechno() {}
      //    hello: "world"
      //    new entry: ""

  const { handleAddTechno, a } = props //déstructuration 
  // https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript-fr

  const techno = {
    name: 'React',
    category: 'front',
    description: 'Learn React',
  }; // un objet en dur pour savoir si notre tuyauterie fonctionne

  //Chaque fois qu'on clique sur le bouton "Add Techno", on obtient bien dans la console :
          // handleAddTechno {name: 'React', category: 'front', description: 'Learn React'}
          // category: "front"
          // description: "Learn React"
          // name: "React"

  //Donc le passage de props fonctionne.

  function handleSubmit(evt) {
    evt.preventDefault(); //pour éviter que toute la page se rafraichisse
    handleAddTechno(techno); // La fonction handleAddTechno réside dans app mais est passée dans les props (déstructuration ci-dessus)
    console.log('a', a); // props à valeur pédagogique issue de App
  }

  return (
    <div className='techno-add'>
      <h1>Add a Techno</h1>
      <div>
        {/* <form onSubmit = {(evt) => handleAddTechno(evt)}> */}
        <form onSubmit = {(evt) => handleSubmit(evt)}>
          <label htmlFor='techno-name'>Name</label>
          <br />
          <input type='text' name='techno-name' id='techno-name' />
          <br />
          <label htmlFor='techno-category'>Category</label>
          <br />
          <select name='techno-category' id='techno-category'>
            <option value=''>Select a category</option>
            <option value='front'>Front</option>
            <option value='back'>Back</option>
            <option value='fullstack'>Full Stack</option>
            <option value='other'>Other</option>
          </select>
          <br />
          <label htmlFor='techno-description'>Description</label>
          <br />
          <textarea name='techno-description' id='techno-description' cols='30' rows='10'></textarea>
          <br />
          <input type='submit' value='Add Techno' className='btn'/>
        </form>
      </div>
    </div>
  )
}