import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ReducerActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case "SORT": {
            const copyState = [...state]
            return copyState.sort((a, b) => {
                if (action.payload.value === 'up') {
                    return a.name > b.name ? 1 : -1;
                } else
                    return a.name > b.name ? -1 : 1;
            })
        }
        case "CHECK":{
            return state.filter(u => u.age >= action.payload.value)
        }
        default:
            return state
    }
}

export type ReducerActionType = SortAcType | CheckAcType;

export type SortAcType = ReturnType<typeof sortAC>
export const sortAC = (value: 'up' | 'down') => {
    return {
        type: "SORT",
        payload: {value}
    } as const
}

export type CheckAcType = ReturnType<typeof checkAC>
export const checkAC = (value:number) => {
    return {
        type: "CHECK",
        payload:{value}
    } as const
}