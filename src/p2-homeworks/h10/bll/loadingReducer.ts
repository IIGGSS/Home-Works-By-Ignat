interface loadingAcInterface {
    type: 'ON'
}

const initState: boolean = false;

export const loadingReducer = (state = initState, action: loadingAcInterface): boolean => { // fix any
    switch (action.type) {
        case "ON": {
            return !state;
        }
        default:
            return state
    }
}


export const loadingAC = (): loadingAcInterface => {
    return {
        type: 'ON'
    } as const

} // fix any