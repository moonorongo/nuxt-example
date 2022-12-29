export default {
  setData(state, data) {
    const output = {};

    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      output[element.id] = element;
    }

    state.data = output;
  },
};
