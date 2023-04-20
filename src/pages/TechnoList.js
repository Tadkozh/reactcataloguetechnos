export default function TechnoList (props) {
  const { technos } = props // destructuring
  return (
    <div className='techno-list'>
      <h1>All Technos</h1>
      <div>
        { // On insère du JS dans du JSX
          technos.map(techno => ( // On insère du JSX dans du JS
            <div key={techno.technoid}>  {/* On insère du JS dans du JSX */}
              <h2>{techno.technoname}</h2>
              <h3>{techno.technocategory}</h3>
              <h3>{techno.technodescription}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}