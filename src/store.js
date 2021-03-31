import {createStore} from 'redux'
import mockData from './data/zen-garden.json';

const getSiteData = async () => {
    // This would usually be an XHR request so mocking it with async function
    await setTimeout(() => {}, 1e3);
    return {
        data: mockData,
    }
}


const initialState = {
    siteData: {},
    lastValues: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SITE_DATA': 
            state = { 
                ...state, 
                siteData: action.payload,
            }
            break;
    }
    return state;
}
const store = createStore(reducer);

(async () => {
    const { data } = await getSiteData();
    store.dispatch({
        type: 'UPDATE_SITE_DATA',
        payload: data,
    });
})();

export default store;