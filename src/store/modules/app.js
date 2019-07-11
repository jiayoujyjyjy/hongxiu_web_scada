/**
 * Created by 杜坤 on 2019/7/9.
 */
const app = {
  state: {
    cardType: 1,
    frontCard: null,
    behindCard: null,
    canvasState: null
  },
  mutations: {
    INIT_FRONTCARD: (state, fCanvas) => {
      state.frontCard = fCanvas
    },
    INIT_BEHINDCARD: (state, fCanvas) => {
      state.behindCard = fCanvas
    },
    SET_CANVASSTATE: (state, canvasState) => {
      state.canvasState = canvasState
    }
  },
  actions: {
    initFrontCard ({commit}, fCanvas) {
      commit('INIT_FRONTCARD', fCanvas)
    },
    initBehindCard ({commit}, fCanvas) {
      commit('INIT_BEHINDCARD', fCanvas)
    },
    setCanvasState ({commit}, canvasState) {
      commit('SET_CANVASSTATE', canvasState)
    },
    saveState ({commit, state}) {
      console.log('vuex saveState')
      console.log(state.frontCard.toJSON([
        'hasControls',
        'borderColor'
      ]))
      commit('SET_CANVASSTATE', state.frontCard.toJSON([
        'hasControls',
        'borderColor',
        'scaleX',
        'scaleY',
        'angle',
        'top',
        'left',
        'crossOrigin'
      ]))
    }
  }
}

export default app
