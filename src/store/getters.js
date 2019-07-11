/**
 * Created by 杜坤 on 2019/7/9.
 */
const getters = {
  card: (state) => state.app.cardType === 1 ? state.app.frontCard : state.app.behindCard
}

export default getters
