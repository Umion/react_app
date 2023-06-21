export interface RawResponse {
  data: DataResponse
  [key: string]: any
}

export interface DataResponse {
  comments: CommentModel[]
  limit: number
  skip: number
  total: number
}

export interface CommentModel {
  id: number;
  body: string;
  postId: number;
  user: UserModel
  createdA?: Date;
}

export interface UserModel {
  id: number;
  username: string;
}

export type CreateCommentModel = Omit<CommentModel, 'id'>
