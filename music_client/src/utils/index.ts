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
