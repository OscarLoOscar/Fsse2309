import Header from "../component/Header";
import { Container, Row, Col } from "react-bootstrap";
import SearchBox from "../component/SearchBox";
import CarparkResults from "../component/ CarparkResults";
import { useEffect, useState } from "react";
import { InfoVacancyData, VehicleType } from "../../data/InfoVacancyData";
import { mergeToVacancyInfo } from "../../utils/DataUtil"
import * as CarParkApi from "../../api/CarParkApi"

export default function LandingPage() {
  const [data, setData] = useState<InfoVacancyData[] | undefined>(undefined);
  const [districtFilter, setDistrictFilter] = useState<string>("");
  const [vehicleFilter, setVehicleFilter] = useState<VehicleType>("privateCar");

  const fetchInfoVacancyData = async () => {
    const carParkInfoData = await CarParkApi.getCarParkInfoData();
    const vacancyData = await CarParkApi.getCarParkVacancyData();

    if (carParkInfoData && vacancyData) {
      setData(mergeToVacancyInfo(carParkInfoData, vacancyData));
    }
  }
  useEffect(() => {
    fetchInfoVacancyData();
  }, [])

  return (
    // <React.Fragment>
    // <Header children={undefined} />
    <Container>
      <Header children={undefined} />
      <Row>
        <Col>
          <SearchBox
            districtFilter={districtFilter}
            setDistrictFilter={setDistrictFilter}
            vehicleTypeFilter={vehicleFilter}
            setVehicleTypeFilter={setVehicleFilter}
          />

          <CarparkResults data={data} districtFilter={districtFilter} vehicleFilter={vehicleFilter} />
        </Col>
      </Row>
    </Container>
    // </React.Fragment>
  );
}

