function Completed ({submit}) {
    console.log(submit);
    
    return (
        <div className="card">
            <h2> Completed </h2>
            <ul className="ul">
                {submit.Completed && submit.Completed.map((item, index) => (
                    <li key={index}> {item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Completed