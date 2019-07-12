/**
 * Created by 杜坤 on 2019/7/9.
 */
const getters = {
  card: (state) => state.app.cardType === 1 ? state.app.frontCard : state.app.behindCard,
  selectedObj: (state) => { // state === index.js中的module对象
    console.log(state)
    return state.app.selectedObj
  }
}

export default getters
