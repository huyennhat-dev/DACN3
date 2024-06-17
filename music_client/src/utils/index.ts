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
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  )
    return false;

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
};

export function createSlug(input: string) {
	const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
	const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------'
	const p = new RegExp(a.split('').join('|'), 'g')
	return input.toString().toLowerCase()
	.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
	.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
	.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
	.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
	.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
	.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
	.replace(/đ/gi, 'd')
	.replace(/\s+/g, '-') 
	.replace(p, c => b.charAt(a.indexOf(c)))
	.replace(/&/g, '-and-')
	.replace(/[^\w\-]+/g, '')
	.replace(/\-\-+/g, '-')
	.replace(/^-+/, '')
	.replace(/-+$/, '')
}
