const getDefaultState = () => {
  return {
    _answers: {
      userName: null,
      selectedOptions: [],
    },
    _scores: {
      g: 0,
      h: 0,
      r: 0,
      s: 0
    },
    _house: null
  };
};

export const state = getDefaultState;

export const getters = {
  getAnswers(state) {
    return state._answers;
  },
  getScores(state) {
    return state._scores;
  },
  getHouse(state) {
    return state._house;
  }
};

export const actions = {
  addSelectedOption({commit}, obj) {
    commit('ADD_SELECTED_OPTION', obj);
  },
  setUserName({commit}, str) {
    commit('SET_USER_NAME', str);
  },
  setScores({commit}) {
    commit('SET_SCORES');
  },
  setHouse({commit}) {
    commit('SET_HOUSE');
  }
};

export const mutations = {
  ADD_SELECTED_OPTION(state, obj) {
    state._answers.selectedOptions.push(obj);
  },
  SET_USER_NAME(state, str) {
    state._answers.userName = str;
  },
  SET_SCORES(state) {
    state._answers.selectedOptions.forEach(el => {
      for(let key in el.scores) {
        state._scores[key] += el.scores[key];
      }
    });
  },
  SET_HOUSE(state) {
    let max = 0;
    for(let key in state._scores) {
      if(state._scores[key] > max) {
        max = state._scores[key];
        state._house = key;
      }
    }

    switch (state._house) {
      case 'g':
        state._house = 'Gryffindor';
        break;
      case 'h':
        state._house = 'Hufflepuff';
        break;
      case 'r':
        state._house = 'Ravenclaw ';
        break;
      case 's':
        state._house = 'Slytherin';
        break;
      default:
        break;
    }
  }
};