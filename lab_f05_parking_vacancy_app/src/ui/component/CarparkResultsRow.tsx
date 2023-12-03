import React from "react";
import { InfoVacancyData, VehicleType } from "../../data/InfoVacancyData";
import { Button, TableCell, TableRow } from "@mui/material";

type Props = {
  data: InfoVacancyData,
  vehicleType: VehicleType
}
const CarparkResultsRow: React.FC<Props> = (props) => {
  return (
    <>
      <TableRow>
        <TableCell align="justify">
          {props.data.imageUrl &&
            <img
              src={props.data.imageUrl}
              height={100}
              
            />
          }
        </TableCell>
        <TableCell align="left">{props.data.name}</TableCell>
        <TableCell align="left">{props.data.displayAddress}</TableCell>
        <TableCell align="left">{props.data[props.vehicleType]}</TableCell>
        <TableCell align="left">
          <Button variant="contained" color="secondary" onClick={() => {
            window.open(`https://maps.google.com?q=${props.data.latitude},${props.data.longitude}`, '_blank')?.focus();
          }}>
            Map
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}
export default CarparkResultsRow;