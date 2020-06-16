export const state = () => ({
  answers : [],
  tags: []
});

export const mutations = {
  AnswerAdd (state, payload) {
    state.answer = state.answer.push(payload);
  },

  TagsUpdate (state, payload) {
    state.tags = payload
  },

  AnswersUpdate (state, payload) {
    state.answers = payload
  }
};

export const actions = {
  tagsUploader(context, value) {
    // コミットすることで状態変更が反映される
    context.commit('TagsUpdate', value)
  },

  AnswersUploader(context, value) {
    // コミットすることで状態変更が反映される
    context.commit('AnswersUpdate', value)
  }
};