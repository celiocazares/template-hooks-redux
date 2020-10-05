const videos = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_VIDEOS':
            debugger
            return { ...state, videosList: ["teste"] }
        case 'ADD_VIDEO':
            return { ...state }
        case 'DELETE_VIDEO':
            return { ...state, }
        default:
            return state
    }
}

export default videos