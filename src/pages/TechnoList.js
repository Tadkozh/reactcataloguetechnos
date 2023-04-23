import TechnoItem from "../components/TechnoItem"

export default function TechnoList (props) {
  const { technos, handleDeleteTechno } = props // destructuring
  return (
    <div className='techno-list'>
      <h1>All Technos</h1>
      <div>
        { // On insère du JS dans du JSX
          technos.map(techno => ( // On insère du JSX dans du JS
            <TechnoItem techno={techno} key={techno.technoid} handleDeleteTechno={handleDeleteTechno} />          
          ))
        }
      </div>
    </div>
  )
}