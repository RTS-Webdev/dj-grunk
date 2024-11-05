export const convertEuroToDKK = (euroAmount: number): number => {
    const exchangeRate = 7.45;
    return Number((euroAmount * exchangeRate).toFixed(2));
};
