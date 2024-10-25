import { addDays } from "date-fns";
import { atom } from "jotai";
import type { DateRange } from "react-day-picker";

const defaultStartDate = new Date(2023, 11, 18);

export const dateRangeAtom = atom<DateRange | undefined>({
  from: defaultStartDate,
  to: addDays(defaultStartDate, 6),
});
