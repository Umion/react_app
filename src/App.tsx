import { useEffect, useRef, useState } from "react";
import { apiGetComments } from "./api";
import { CommentModel } from "./api/model";
import { TheHeader } from "./components/application/TheHeader";
import { CommentInput } from "./components/CommentInput";
import { CommentItem } from "./components/CommentItem";

function App() {
  const [comments, setComments] = useState<CommentModel[]>([]);
  const commentsEndRef = useRef<null | HTMLDivElement>(null);

  const removeComment = (id: number) => {
    const data = comments.filter((item) => item.id !== id);
    setComments(data);
  };

  const addComment = (newComment: CommentModel) => {
    setComments([...comments, newComment]);
    scrollToBottom();
  };

  const scrollToBottom = () => {
    commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await apiGetComments();
      setComments(data.comments);
    }
    fetchData();
  }, []);

  return (
    <div className="main">
      <TheHeader />
      <div className="main__content">
        <div className="content">
          <div className="container">
            {!comments.length ? (
              <p style={{ textAlign: "center" }}>
                No data. Your comment can be the first
              </p>
            ) : (
              <>
                {comments.map((item: CommentModel) => {
                  return (
                    <CommentItem
                      key={item.id}
                      item={item}
                      onRemove={removeComment}
                    />
                  );
                })}
              </>
            )}
            <div style={{ height: "100px" }} ref={commentsEndRef} />
          </div>
        </div>
        <CommentInput onCreate={addComment} />
      </div>
    </div>
  );
}

export default App;
