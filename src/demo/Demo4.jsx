import React, { useState } from 'react'
import empdata from './data.json'

export default function Demo4() {

const [data,setData] = useState(empdata)
  return (
    <div>
      <table border={2}>

        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>SALARY</td>
          </tr>
        </thead>

        <tbody>
            {
                data.map((emp,i) => (
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.salary}</td>
                    </tr>
                ))}
        </tbody>

      </table>
    </div>
  )
}
