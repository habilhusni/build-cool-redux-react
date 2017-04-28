const initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS': {
      const newDatas = action.payload;
      return newDatas;
    }
    default: return state;
  }
};

export default dataReducer;
