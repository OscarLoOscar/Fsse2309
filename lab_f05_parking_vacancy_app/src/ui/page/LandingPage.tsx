import Header from "../component/Header";
import { Container } from "react-bootstrap";
import SearchBox from "../component/SearchBox";
import CarparkResults from "../component/ CarparkResults";
import { useEffect, useState } from "react";
import { DataInfo } from "../../data/DataInfo";
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
    <Container>
      <Header />
      <SearchBox />
      <CarparkResults data={data} districtFilter={districtFilter} vehicleFilter={vehicleFilter} />
    </Container>


  );
}

