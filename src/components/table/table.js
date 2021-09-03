import React from 'react';
import cn from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'Column01', label: 'Column01', minWidth: 170 },
  { id: 'Column02', label: 'Column02', minWidth: 170 },
  { id: 'Column03', label: 'Column03', minWidth: 170 },
  { id: 'Column04', label: 'Column04', minWidth: 170 },
  { id: 'Column05', label: 'Column05', minWidth: 170 },
  { id: 'Column06', label: 'Column06', minWidth: 170 },
  { id: 'Column07', label: 'Column07', minWidth: 170 },
  { id: 'Column08', label: 'Column08', minWidth: 170 },
  { id: 'Column09', label: 'Column09', minWidth: 170 },
  { id: 'Column10', label: 'Column10', minWidth: 170 },
  { id: 'Column11', label: 'Column11', minWidth: 170 },
  { id: 'Column12', label: 'Column12', minWidth: 170 },
  { id: 'Column13', label: 'Column13', minWidth: 170 },
  { id: 'Column14', label: 'Column14', minWidth: 170 },
  { id: 'Column15', label: 'Column15', minWidth: 170 },
  { id: 'Column16', label: 'Column16', minWidth: 170 },
  { id: 'Column17', label: 'Column17', minWidth: 170 },
  { id: 'Column18', label: 'Column18', minWidth: 170 },
  { id: 'Column19', label: 'Column19', minWidth: 170 },
  { id: 'Column20', label: 'Column20', minWidth: 170 },
  { id: 'Column21', label: 'Column21', minWidth: 170 },
  { id: 'Column22', label: 'Column22', minWidth: 170 },
  { id: 'Column23', label: 'Column23', minWidth: 170 },
  { id: 'Column24', label: 'Column24', minWidth: 170 },
  { id: 'Column25', label: 'Column25', minWidth: 170 },
  { id: 'Column26', label: 'Column26', minWidth: 170 },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={cn("w-full")}>
      <TableContainer className={cn("max-h-full")}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  className={cn("min-w-min max-h-full p-1.5")}
                  key={column.id}
                  align={column.align}
                  // style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}