import React from 'react'

export default function Demo3() {

const courses = ["OS","OS","AWS","FSAD","MSWD"]
const count = courses.length || 0   



  return (
    <div>
        <h1>No Of Courses = {count}</h1>
        <table border={2}>

            <thead>
                <tr>
                    <th>SL.NO</th>
                    <th>COURSE</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((v,i) => (
                    <tr key = {i}>
                        <td>{i+1}</td>
                        <td>{v}</td>
                    </tr>
                ))}
            </tbody>

        </table>

    </div>
  )
}
