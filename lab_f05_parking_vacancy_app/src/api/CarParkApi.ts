import axios from "axios";
import { DataInfo } from "../data/DataInfo";
import { DataVacancy } from "../data/DataVacancy";

const vehicleTypes = "privateCar";
const apiUrl = `https://api.data.gov.hk/v1/carpark-info-vacancy`;

//export default  只可以有一個，move than that 要export const
export const getCarParkInfoData = async (): Promise<DataInfo> => {
  const response = await axios.get<DataInfo>(`${apiUrl}?data=info&vehicleTypes=${vehicleTypes}`);
  return response.data;
}

export const getCarParkVacancyData = async (): Promise<DataVacancy> => {
  const response = await axios.get<DataVacancy>(`${apiUrl}?data=vacancy&vehicleTypes=${vehicleTypes}`);
  return response.data;
}