export const isValidEthereumAddress = (address: string) => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    // Địa chỉ không hợp lệ nếu không có 40 ký tự hex hoặc không bắt đầu bằng '0x'
    return false;
  } else if (
    /^(0x)?[0-9a-f]{40}$/.test(address) ||
    /^(0x)?[0-9A-F]{40}$/.test(address)
  ) {
    // Địa chỉ hợp lệ nếu có 40 ký tự hex và bắt đầu bằng '0x'
    return true;
  } else {
    // Các trường hợp khác không hợp lệ
    return false;
  }
};


