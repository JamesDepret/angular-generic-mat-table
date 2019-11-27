import {UserData} from '../interfaces/user-data';

/** Demo code to make mock data */
/** Constants used to fill up our data base. */
const materials: string[] = [
  'Stones', 'Sand', 'Clay', 'Gravel', 'Loam', 'Silt'
];
const LICENSEPLATE: string[] = [
  '1-ABC-003', '1-AZE-998', '1-RTY-788', '1-UIO-568', 'PQS-521', 'DFG-568', '1-GHJ-210', 'JKL-765', '1-WXC-231', '1-WEO-501',
];

/** Builds and returns a new UserData object. */
export function createNewUserData(id: number): UserData {
  const name = LICENSEPLATE[Math.round(Math.random() * (LICENSEPLATE.length - 1))];

  let result =  {
    id: id.toString(),
    name: name,
    date: new Date(new Date().setDate(Math.round(Math.random() * 20))),
    volume: Math.round(Math.random() * 145 + 15).toString(),
    material: materials[Math.round(Math.random() * (materials.length - 1))]
  };
  return { ...result, rides: Math.round(parseInt(result.volume)/16) };
}
