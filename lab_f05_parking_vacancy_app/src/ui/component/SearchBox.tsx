import { FormControl, MenuItem, Select, InputLabel, TextField, Button } from "@mui/material";
import { VehicleType } from "../../data/InfoVacancyData";

type Props = {
  districtFilter: string,
  setDistrictFilter: React.Dispatch<React.SetStateAction<string>>,
  vehicleTypeFilter: VehicleType,
  setVehicleTypeFilter: React.Dispatch<React.SetStateAction<VehicleType>>
}

export default function SearchBox(props: Props) {
  return (
    <form style={{
      marginTop: "16px",
      padding: "24px",
      border: "1px solid black",
      borderRadius: "4px",
    }}>
      <TextField id="outlined-basic"
        label="District"
        variant="outlined"
        value={props.districtFilter}
        onChange={(e) => props.setDistrictFilter(e.currentTarget.value)}
        fullWidth
      />
      <FormControl style={{ marginTop: "16px" }}>
        <InputLabel>Vechicle Type</InputLabel>
        <Select
          value={props.vehicleTypeFilter}
          label="Vehicle Type"
          onChange={(event) => {
            props.setVehicleTypeFilter(event.target.value as VehicleType)
          }}
        >
          <MenuItem value={"privateCar"}>Private Car</MenuItem>
          <MenuItem value={"LGV"}>LGV</MenuItem>
          <MenuItem value={"HGV"}>HGV</MenuItem>
          <MenuItem value={"motorCycle"}>Motor Cycle</MenuItem>
          <MenuItem value={"coach"}>Coach</MenuItem>
        </Select>
        <Button variant="contained">
          Search
        </Button>
      </FormControl >
    </form>
  );
}
