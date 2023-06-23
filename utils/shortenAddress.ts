export const shortenAddress = (address: string) => {
  const prefixLength = 4;
  const suffixLength = 4;

  if (address.length <= prefixLength + suffixLength + 2) {
    return address; // Return the original address if it's already short or too short to be shortened
  }

  const prefix = address.slice(0, prefixLength + 2);
  const suffix = address.slice(-suffixLength);

  return prefix + '...' + suffix;
};
