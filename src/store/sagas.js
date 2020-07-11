import { takeEvery,put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreators';
import axios from 'axios'

// generater es 语法 ， 学吧
function* mySagas() {
  yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
  // axios.get('https://www.easy-mock.com/mock/5f088cf93d75a643f8c853b7/example/getlist').then(
  //   (res) => {
  //     let data = res.data.data.list
  //     let action = getListAction(data)
  //     put(action)
  //   })
  const res = yield axios.get('https://www.easy-mock.com/mock/5f088cf93d75a643f8c853b7/example/getlist')
  const action = getListAction(res.data.data.list)
  yield put(action)
}

export default mySagas