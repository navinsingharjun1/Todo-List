function Inprogress({ submit }) {
    console.log(submit)
  
    return (
      <div className="card">
        <h2>Inprogress</h2>
        <ul className="ul">
          {submit.Inprogress && submit.Inprogress.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default Inprogress
  