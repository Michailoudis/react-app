import { FunctionComponent } from "react";
import "./Header.css";
export const Header: FunctionComponent = (): JSX.Element => {
  return (
    <header>
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"></img>
      <div>stack overflow</div>
      <div>About</div>
      <div>Products</div>
      <div>For Teams</div>
      <input placeholder="Search" />
    </header>
  );
};
