import { getRandomId } from '../utilities/helper'
import { defHttp } from './../utilities/axios'
import { CommentModel, CreateCommentModel, RawResponse } from './model'

enum Api {
  GET_COMMENTS = '/comments',
}

export const apiGetComments = (): Promise<RawResponse> => {
  return defHttp.get(Api.GET_COMMENTS, { params: { limit: 10 } })
}

export const apiCreateComment = (item: CreateCommentModel): Promise<CommentModel> => {
  const comment = {
    id: getRandomId(),
    ...item
  }
  return Promise.resolve(comment)
}
