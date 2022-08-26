import { TableBody, TableContainer } from '@mui/material'
import { margin } from '@mui/system'
import React, { useEffect, useState } from 'react'

const Output = () => {
  const [input, setInput] = useState([])
  const api = "http://localhost:5000/items"
  const fatchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json()

      console.log(input)
      setInput(data)
    }
    catch (error) {
      console.log(error)
    };

  }
  useEffect(() => {

    fatchData(api);
  }, [])

  return (
    <div>
      {
        input.map((item, index) => {
          return (
            <>
              <TableContainer>
                <TableBody>
                  <div style={{ display: "flex" }}>
                    <h1 >{item.adhar}</h1> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <br/>
                    <br/><br/>
                    <p>{item.title}</p> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <br/>
                    <p>{item.description}</p>
                  </div>

                </TableBody>
              </TableContainer>

            </>

          )
        })
      }

    </div>
  )
}

export default Output






// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }






