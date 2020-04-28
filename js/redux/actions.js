import { CHANGE_PAGE } from './actionTypes'

export const changePage = content => ({
  type: CHANGE_PAGE,
  text: content
}) 

export const timeClicked = content => ({
  type: 'TIME_CLICKED',
  text: content,
})