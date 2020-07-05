export type customType = {
  id: string;
  count: number;
};

export const logItems = (items: customType[]) => {
  console.log("Items", JSON.stringify(items));
};
