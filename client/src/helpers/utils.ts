import moment from "moment";
import { CREATED_AT_FORMAT } from "./constants";

export const getUniqueId = (): number => +moment().add(2, "year").format('x');

export const getCurrentTimestamp = (): number => +moment().format('x');

export const formatTimestamp = (timestamp: number, format: string = CREATED_AT_FORMAT): string => moment(timestamp).format(format)