import transactionApi from "../api/transaction.api";
import { defaultImg } from "../assets/images";

export const getBalance = async (): Promise<number | null> => {
  try {
    const rs: any = await transactionApi.balance();
    return rs.balance;
  } catch (balanceError) {
    console.error("Error fetching balance:", balanceError);
    return null;
  }
};

export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = defaultImg;
};

export const deepEqual = (obj1: any, obj2: any) => {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) return false;

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
};