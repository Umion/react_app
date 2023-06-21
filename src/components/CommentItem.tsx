import userIcon from "../assets/icons/user.svg";
import closeIcon from "../assets/icons/cross.svg";
import { CommentModel } from "../api/model";

export function CommentItem({ item }: { item: CommentModel }) {
  const removeCommetn = (id: number) => {
    console.log("removeCommetn", id);
  };

  return (
    <div className="item">
      <img
        src={closeIcon}
        className="item__remove"
        onClick={() => removeCommetn(item.id)}
      />
      <div className="item__title">
        <img style={{ width: "30px" }} src={userIcon}></img>
        <span>{item.user.username}</span>
      </div>
      <p>{item.body}</p>
      <span className="item__date">12.12.12</span>
    </div>
  );
}
