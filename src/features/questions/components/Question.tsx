import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { QuestionProps } from "./QuestionProps";
import "./Question.css";

export const Question: FunctionComponent<QuestionProps> = ({
  score,
  answer_count,
  view_count,
  link,
  title,
  tags,
  owner,
}: QuestionProps): JSX.Element => {
  return (
    <div className="question-item">
      <ul className="question-item-left-side">
        <li>{score} votes</li>
        <li>{answer_count} answers</li>
        <li>{view_count} views</li>
      </ul>
      <section style={{ paddingRight: "20px" }}>
        <Link color="teal.600" to={link}>
          {title}
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          non fuga quod? Laboriosam, minima omnis. Ipsam minima fugiat
          reiciendis nulla at distinctio itaque sapiente sint consequuntur
          nesciunt, a quidem officiis!
        </p>
        <div className="question-item-footer">
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="user">{owner.display_name}</div>
        </div>
      </section>
    </div>
  );
};
