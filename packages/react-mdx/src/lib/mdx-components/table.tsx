interface ITableProps {
  headers: string[];
  rows: string[][];
}

export const Table = ({ headers, rows }: ITableProps) => (
  <table>
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

// export const MdxTable = ({ caption, headers, rows }: ITableProps) => (
//   <Table>
//     {caption && <TableCaption>{caption}</TableCaption>}
//     <TableHeader>
//       <TableRow>
//         {headers.map((header, index) => (
//           <TableHead key={index}>{header}</TableHead>
//         ))}
//       </TableRow>
//     </TableHeader>
//     <TableBody>
//       {rows.map((row, rowIndex) => (
//         <TableRow key={rowIndex}>
//           {row.map((cell, cellIndex) => (
//             <TableCell key={cellIndex}>{cell}</TableCell>
//           ))}
//         </TableRow>
//       ))}
//     </TableBody>
//   </Table>
// );
