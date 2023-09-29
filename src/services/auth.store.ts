import { authKey } from "@/constants/lacalstorage";
import { decodeToken } from "@/utilies/jwt";
import {
  setTolocalStrorage,
  getFromlocalStrorage,
} from "@/utilies/local.storage";

export const authUserInfo = ({ accessToken }: { accessToken: string }) => {
  setTolocalStrorage(authKey, accessToken);
};
export const getUserInfo = () => {
  const geTokencalStorageDat = getFromlocalStrorage(authKey);
  if (geTokencalStorageDat) {
    const decodeTokens = decodeToken(geTokencalStorageDat);
    return decodeTokens;
  }
};
export const isLoggedIn = () => {
  const geTokencalStorageDat = getFromlocalStrorage(authKey);
  return !!geTokencalStorageDat;
};
