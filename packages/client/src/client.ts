import { logItems, customType } from "@lerna-test/utils";

export const extendedLog = () => {
  const items: customType[] = [
    { id: "ABC", count: 3 },
    { id: "DEF", count: 10 },
  ];
  logItems(items);
};
