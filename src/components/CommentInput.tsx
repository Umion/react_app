import { CommentModel } from "../api/model";

import { useState } from "react";
import { apiCreateComment } from "../api";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CommentInputProps = {
  onCreate: (comment: CommentModel) => void;
};

export function CommentInput({ onCreate }: CommentInputProps) {
  const [inProgress, setInProgress] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [commentData, setCommentData] = useLocalStorage<string>("comment", "");

  const showErrorMessage = () => {
    setShowWarning(true);
    setTimeout(() => {
      setShowWarning(false);
    }, 3000);
  };

  const submit = async () => {
    if (!commentData.trim().length) {
      showErrorMessage();
      return;
    }

    setInProgress(true);
    const comment = {
      body: commentData,
      postId: 44,
      user: {
        id: 33,
        username: "UserName",
      },
      createdAt: new Date(),
    };
    const res = await apiCreateComment(comment);
    if (res) {
      onCreate(res);
      setInProgress(false);
      setCommentData("");
    }
    setInProgress(false);
  };

  return (
    <div className="footer">
      <div className="container">
        <div>
          <textarea
            placeholder="Type message"
            className={`footer__input ${showWarning ? "warning" : ""}`}
            value={commentData}
            onInput={(e: React.FormEvent<HTMLTextAreaElement>) =>
              setCommentData((e.target as HTMLTextAreaElement).value)
            }></textarea>
        </div>
        <button
          disabled={inProgress}
          className="footer__button"
          onClick={submit}>
          Send
        </button>
      </div>
    </div>
  );
}
