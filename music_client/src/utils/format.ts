import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";

export const formatTime = (sec_num: number): string => {
  let hours: number | string = Math.floor(sec_num / 3600);
  let minutes: number | string = Math.floor((sec_num - hours * 3600) / 60);
  let seconds: number | string = Math.floor(
    sec_num - hours * 3600 - minutes * 60
  );

  hours = hours < 10 ? (hours > 0 ? "0" + hours : 0) : hours;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return (hours !== 0 ? hours + ":" : "") + minutes + ":" + seconds;
};

export const formatCoin = (amount: number, currency = "EUR") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatRelativeTime = (dateString: string) => {
  const date = new Date(dateString);
  return formatDistanceToNow(date, { addSuffix: true, locale: vi });
};

export const formatCountNumber = (num: number): string => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
};
