import { Hof, GenericFn } from "./types";

export const wrapper: Hof<GenericFn> = (fn) => {
  return (...args) => {
    console.log("inicio");
    fn(...args);
    const fnStr = fn.toString();
    console.log(fnStr);

    console.log("fin");
  };
};
