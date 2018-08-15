
export default {
  state:{
    show2:false,
    radio:0,
  },
  getters:{

  },
  mutations:{
    isShow(state){
      state.show2 = !state.show2
    },
    isRadio(state,ids) {
      ids = ids || 0
      state.radio = ids
    }
  }
}
