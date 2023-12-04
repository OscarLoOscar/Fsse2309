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
        {props.data[props.vehicleType] > 0 && (
          <>
          <TableCell align="justify">
            {props.data.imageUrl &&
              <img
                src={props.data.imageUrl}
                // height={100}
                width={300} />}
          </TableCell><TableCell align="left">{props.data.name}</TableCell><TableCell align="left">{props.data.displayAddress}</TableCell>
            <TableCell align="center">{props.data[props.vehicleType]}</TableCell><TableCell align="left">
              <Button variant="contained"
                color="secondary"
                onClick={() => {
                  window.open(`https://maps.google.com?q=${props.data.latitude},${props.data.longitude}`, '_blank')?.focus();
                }}>
                Map
              </Button>
            </TableCell>
            </>
        )}
      </TableRow>
    </>
  );
}
export default CarparkResultsRow;