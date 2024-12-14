import { wrapper } from "./wrapper";

export const example = () => {
  console.log("Hola mundo!");
  console.log("Hola");
  console.log("mundo");

  console.log("!");
};

export const wrapExample = wrapper(example);

example();

wrapExample();
