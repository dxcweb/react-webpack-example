export default {
  namespace: "test",
  state: {
    num: 0,
  },
  effects: {
    *add(_, { put, select }) {
      const num = yield select(({ test }) => test.num);
      yield put({ type: "save", payload: { num: num + 1 } });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
