import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewRegistration = () => {
    const [data,changeData] = useState([])
    
    const fetchData = () => {
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(
            (response) => {
                changeData(response.data)
            }

        ).catch()

    }

useEffect(
    () => {
        fetchData()
    },[]
)

  return (
    <div>
<NavigationBar />
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            
                                                 
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Registration Number</th>
      <th scope="col">Full Name</th>
      <th scope="col">Branch</th>
      <th scope="col">SSLC Mark</th>
      <th scope="col">Plus Two Mark</th>
      <th scope="col">UG Mark</th>
      <th scope="col">PG Mark</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
      (value,index) => {
        return(
          <tr>
      <th scope="row">{value.regNo}</th>
      <td>{value.fullName}</td>
      <td>{value.branch}</td>
      <td>{value.sslcMark}</td>
      <td>{value.plusTwoMark}</td>
      <td>{value.ugMark}</td>
      <td>{value.pgMark}</td>
    </tr>
        )
      }
    )}

  </tbody>
</table>
                                       
                 
                
            </div>
        </div>
    </div>
</div>

    

  )
}

export default ViewRegistration