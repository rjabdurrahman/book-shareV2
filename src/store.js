import { createStore } from 'redux';
import reducer from './reducers'

const store = createStore(reducer, {addClsModal: false});

export default store;