export default function TechnoItem(props) {
  const { techno } = props // destructuring
  return (
    <div>
      { // On insère du JS dans du JSX
        <div key={techno.technoid}> {/* On insère du JS dans du JSX */}
          <h2>{techno.technoname}</h2>
          <h3>Category</h3>
          <p>{techno.technocategory}</p>
          <h3>Description</h3>
          <p>{techno.technodescription}</p>
        </div>
      }
    </div>
  )
}