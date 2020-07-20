export const state = () => ({
  count: 0,
  count2: 5,
  count3: 0,
})

// mutations で state の値を書き換える処理
export const mutations = {
  countUp: function (state) {
    state.count++
  },
  reset: function (state, a) {
    state.count = 0 + a
  },
  countMore: function (state) {
    state.count = state.count * 2
  },


  countUp2: function (state) {
    state.count2++
  },
  reset2: function (state, a) {
    state.count2 = 0 + a
  },
  countMore2: function (state) {
    state.count2 = state.count2 * 2
  },

  countUp3: function (state) {
    state.count3++
  },
  reset3: function (state, number) {
    state.count3 = 0 + number
  },
  countMore3: function (state) {
    state.count3 = state.count3 * 2
  }

}

export const actions = {
  countUp3(context) {
    context.commit("countUp3")
  },
  reset3(context, number) {
    context.commit("reset3", number)
  },
  countMore3(context) {
    context.commit("countMore3")
  }
}
