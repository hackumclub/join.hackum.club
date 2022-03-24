import {
  Grid as RGrid,
  Row as RRow,
  Col as RCol,
} from "react-flexbox-grid/dist/react-flexbox-grid";

export const Grid = ({ children, ...props }) => {
  return <RGrid {...props}>{children}</RGrid>;
};

export const Row = ({ children, ...props }) => {
  return <RRow {...props}>{children}</RRow>;
};

export const Col = ({ children, ...props }) => {
  return <RCol {...props}>{children}</RCol>;
};
