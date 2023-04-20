export default function TechnoList (props) {
  const { technos } = props // destructuring
  return (
    <div className='techno-list'>
      <h1>All Technos</h1>
      <div>
        {
          technos.map(techno => (
            <div>
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