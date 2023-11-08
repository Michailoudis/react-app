import { createBrowserRouter } from "react-router-dom";
import Index from "./Index";
import { QuestionList, action as questionsLoader } from "./features/questions/components/QuestionList";
import { ErrorPage } from "./ErrorPage";
import { Layout } from "./features/layout/components/Layout";
import { TagsList, action as tagsLoader } from "./features/tags/components/TagsList";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Index /> },
        {
          path: "questions",
          element: <QuestionList />,
          loader: questionsLoader,
          errorElement: <div>Oops! There was an error.</div>,
        },
        {
          path: "tags",
          element: <TagsList />,
          loader: tagsLoader,
          errorElement: <div>Oops! There was an error.</div>,
        }
      ],
    },
  ]);