import userIcon from "../assets/icons/user.svg";
import closeIcon from "../assets/icons/cross.svg";
import { CommentModel } from "../api/model";
import { fotmatDate } from "../utilities/helper";

type CommentProps = {
  onRemove: (id: number) => void;
  item: CommentModel;
};

export function CommentItem({ item, onRemove }: CommentProps) {
  return (
    <div className="item">
      <img
        src={closeIcon}
        className="item__remove"
        onClick={() => onRemove(item.id)}
      />
      <div className="item__title">
        <img style={{ width: "30px" }} src={userIcon}></img>
        <span>{item.user.username}</span>
      </div>
      <p>{item.body}</p>
      <span className="item__date">
        {fotmatDate(item.createdAt || new Date())}
        {/* // default data always will be updated after render */}
      </span>
    </div>
  );
}
