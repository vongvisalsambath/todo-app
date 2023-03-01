import moment from "https://deno.land/x/momentjs@2.29.1-deno/mod.ts";

export const getCurrentTimestamp = () => {
  return moment().format('x');
}