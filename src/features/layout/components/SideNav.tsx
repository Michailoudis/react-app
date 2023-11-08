import { FunctionComponent } from "react";
import "./SideNav.css";
import { NavLink } from "react-router-dom";

const items = [
  { path: "questions", name: "Questions" },
  { path: "tags", name: "Tags" },
  { path: "users", name: "Users" },
  { path: "companies", name: "Companies" },
];
export const SideNav: FunctionComponent = (): JSX.Element => {
  return (
    <div id="sidevav">
      <nav>
        <p style={{ paddingLeft: "20px" }}>Public</p>
        <ul>
          {items.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
