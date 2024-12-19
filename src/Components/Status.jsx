import { useState } from "react"
import Completed from "./Completed"
import Inprogress from "./Inprogress"
import Pending from "./Pending"

function Status({ submit }) {
  return (
    <>
      <div className="status">  
        <Inprogress submit={submit} />
        <Pending submit={submit} />
        <Completed submit={submit} />
      </div>
    </>
  )
}

export default Status
