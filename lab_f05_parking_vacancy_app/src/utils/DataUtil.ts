import { DataInfo } from "../data/DataInfo";
import { DataVacancy } from "../data/DataVacancy";
import { InfoVacancyData } from "../data/InfoVacancyData";

export function mergeToVacancyInfo(infoDataList: DataInfo, vacancyDataList: DataVacancy):
  InfoVacancyData[] {
  const infoVacancyList: InfoVacancyData[] = [];
  infoDataList.results.forEach((infoData) => {
    if (infoData) {
      const vacancyData = vacancyDataList.results.find((vacancyData) =>
        vacancyData.park_Id === infoData.park_Id
      );
      if (vacancyData) {
        const infoVacancyData: InfoVacancyData = {
          park_Id: infoData.park_Id,
          name: infoData.name,
          displayAddress: infoData.displayAddress,
          latitude: infoData.latitude,
          longitude: infoData.longitude,
          imageUrl: infoData.renditionUrls?.carpark_photo ?? infoData.renditionUrls?.square,
          privateCar: vacancyData.privateCar ? vacancyData.privateCar[0].vacancy : 0,
          LGV: vacancyData.LGV ? vacancyData.LGV[0].vacancy : 0,
          HGV: vacancyData.HGV ? vacancyData.HGV[0].vacancy : 0,
          motorCycle: vacancyData.motorCycle ? vacancyData.motorCycle[0].vacancy : 0,
          coach: vacancyData.coach ? vacancyData.coach[0].vacancy : 0
        }
        infoVacancyList.push(infoVacancyData);
      }
    }
  })
  return infoVacancyList;
}