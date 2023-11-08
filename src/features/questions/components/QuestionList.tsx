import { useLoaderData } from "react-router-dom";
import { Question } from "./Question";
import { FunctionComponent } from "react";
import { QuestionProps } from "./QuestionProps";
import "./QuestionList.css";

export const action = async() => {
  const { items } = await fetch(
    `https://api.stackexchange.com/2.3/questions?page=1&sort=activity&order=desc&site=stackoverflow`
  ).then((res) => res.json());
  return items;
}

export const QuestionList: FunctionComponent = (): JSX.Element => {
  const questions = useLoaderData() as QuestionProps[];

  return (
    <div id="question-list">
      <div className="question-list-header">
        <h2>All questions</h2>
        <div>{questions.length} questions</div>
      </div>
      <div className="questions-list-container">
        {questions.map((question, index) => (
          <li key={index}>
            <Question {...question} />
          </li>
        ))}
      </div>
    </div>
  );
};
