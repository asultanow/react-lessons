export const reducer = (state, action) => {
    switch (action) {
        case 'INC_A':
            return {...state, a: state.a + 10};
        case 'DEC_A':
            return {...state, a: state.a - 2};
        case 'INC_B':
            return {...state, b: state.b + 10};
        case 'DEC_B':
            return {...state, b: state.b - 2};
        default:
            return state;
    }
};
