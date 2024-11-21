import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";

const CountryComponent = (country: {
  name:
    | string
    | number
    | bigint
    | boolean
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
  native:
    | string
    | number
    | bigint
    | boolean
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
  capital:
    | string
    | number
    | bigint
    | boolean
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
  population: {
    toLocaleString: () =>
      | string
      | number
      | bigint
      | boolean
      | Iterable<ReactNode>
      | ReactPortal
      | Promise<AwaitedReactNode>
      | null
      | undefined;
  };
  currency:
    | string
    | number
    | bigint
    | boolean
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
  continent:
    | string
    | number
    | bigint
    | boolean
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
  languages: string[];
}) => {
  return (
    
  );
};

export default CountryComponent;
