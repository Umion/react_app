import { useEffect } from "react";
import { apiGetComments } from "./api";
import { TheHeader } from "./components/application/TheHeader";
import { CommentItem } from "./components/CommentItem";

const comm = [
  {
    id: 1,
    body: "This is some awesome thinking!",
    postId: 100,
    user: {
      id: 63,
      username: "eburras1q",
    },
  },
  {
    id: 2,
    body: "What terrific math skills you’re showing!",
    postId: 27,
    user: {
      id: 71,
      username: "omarsland1y",
    },
  },
  {
    id: 3,
    body: "You are an amazing writer!",
    postId: 61,
    user: {
      id: 29,
      username: "jissetts",
    },
  },
];

function App() {
  useEffect(() => {
    async function fetchData() {
      const { data } = await apiGetComments();
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div style={{ paddingTop: "80px" }}>
      <TheHeader />
      <div className="container">
        {comm.map((item) => {
          return <CommentItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
