function Pending ({submit}) {
    console.log(submit)

    return (
        <div className="card">
            <h2> Pending </h2>
            <ul>
                {submit.Pending && submit.Pending.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Pending