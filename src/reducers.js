function reducer(state, { type, payload }) {
    if (type === 'OPEN_CLASS_MODAL')
        return { ...state, ...payload };
    if(type === 'CLOSE_CLS_M'){
        return { ...state, ...payload };
    }
    return state;
}

export default reducer;