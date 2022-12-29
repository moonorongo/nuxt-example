export default {
  modifyGlobal(context, text) {
    context.commit("setGlobal", text);
  },
};
