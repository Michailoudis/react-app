import { FunctionComponent } from "react";
import { TagProps } from "./TagProps";

export const Tag: FunctionComponent<TagProps> = ({name}: TagProps): JSX.Element => {
  return (
    <div id="tag">
      <h4>{name}</h4>
      <div className="tag-info">
        <div style={{flex: '50%'}}>1 qestion</div>
        <div>Created yesterday</div>
      </div>
    </div>
  );
};
