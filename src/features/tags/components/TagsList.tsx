import { FunctionComponent } from "react";
import "./TagsList.css";
import { useLoaderData } from "react-router-dom";
import { TagProps } from "./TagProps";
import { Tag } from "./Tag";
import './Tag.css';

export const action = async () => {
  const { items } = await fetch(
    `https://api.stackexchange.com/2.3/tags?order=desc&sort=name&site=stackoverflow`
  ).then((res) => res.json());
  return items;
};
export const TagsList: FunctionComponent = (): JSX.Element => {
  const tags = useLoaderData() as TagProps[];

  return (
    <div id="tags-list">
      <div className="tags-list-header">
        <h2>Tags</h2>
        <p>
          A tag is a keyword or label that categorizes your question with other,
          similar questions. Using the right tags makes it easier for others to
          find and answer your question.
        </p>
      </div>
      <div className="tags-list-container">
        {tags.map((tag) => (
          <Tag {...tag} />
        ))}
      </div>
    </div>
  );
};
