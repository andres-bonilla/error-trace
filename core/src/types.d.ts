export interface HofConfig {
  [key: string]: string;
}
export interface GenericFn {
  (...args: unknown[]): unknown;
}
export type Hof<T extends GenericFn> = (
  fn: T,
  config?: HofConfig,
) => (...args: Params<T>) => Returns<T>;
