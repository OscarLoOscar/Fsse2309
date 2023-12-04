import Table from 'react-bootstrap/Table';
import CarparkResultsRow from './CarparkResultsRow';
import { InfoVacancyData, VehicleType } from '../../data/InfoVacancyData';
import { TableCell } from '@mui/material';

type Props = {
  data: InfoVacancyData[] | undefined;
  districtFilter: string;
  vehicleFilter: VehicleType;
}


const CarparkResults: React.FC<Props> = (props) => {
  const renderVacancyRowHeader = () => {
    if (props.vehicleFilter === "privateCar") {
      return <TableCell align='left'>Total Vacancy</TableCell>
    } else if (props.vehicleFilter === "LGV") {
      return <TableCell align='left'>LGV Vacancy</TableCell>
    } else if (props.vehicleFilter === "HGV") {
      return <TableCell align='left'>HGV Vacancy</TableCell>
    } else if (props.vehicleFilter === "coach") {
      return <TableCell align='left'>Coach Vacancy</TableCell>
    } else {
      return <TableCell align='left'>Motor Cycle Vacancy</TableCell>
    }
  };

  const renderResultTableRow = () => {
    if (props.data) {
      if (props.districtFilter === "") {
        return props.data.map(data => {
          return <CarparkResultsRow
            key={data.park_Id}
            data={data}
            vehicleType={props.vehicleFilter} />
        });
      } else {
        const filteredData = props.data.filter((data) =>
          data.district?.toLowerCase().includes(props.districtFilter.toLowerCase())
        );
        return filteredData.map((data) => (
          <CarparkResultsRow
            key={data.park_Id}
            data={data}
            vehicleType={props.vehicleFilter} />
        ));
      }
    } else {
      return null
    }
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Address</th>
            {renderVacancyRowHeader()}
            <th>Google Map</th>
          </tr>
        </thead>
        <tbody>
          {
            renderResultTableRow()
          }
        </tbody>
      </Table>
    </>
  );
}

export default CarparkResults;