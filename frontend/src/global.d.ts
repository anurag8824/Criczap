import { IStaticMethods } from "preline/preline";

// global.d.ts
export {};

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
