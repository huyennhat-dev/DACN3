import transactionApi from "../api/transaction.api";

export const getBalance = async (): Promise<number | null> => {
    try {
      const rs: any = await transactionApi.balance();
      return rs.balance;
    } catch (balanceError) {
      console.error('Error fetching balance:', balanceError);
      return null; // Return null in case of an error
    }
  };