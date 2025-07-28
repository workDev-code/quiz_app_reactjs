import {SELECT_ANSWER, NEXT_QUESTION, RESET_QUIZ} from "../constants/quizActionTypes"
import {initialState} from "../data"


export function quizReducer(state, action) {
    switch(action.type){
        case SELECT_ANSWER:
            return {
                ...state,
                // cập nhật state ở đây
            };
        case NEXT_QUESTION:
            return {
                ...state,
                // cập nhật state ở đây
            };    

        case RESET_QUIZ:
            return {
                ...state,
                // cập nhật state ở đây
            };
        default:
            return state; // nếu không có action nào khớp thì return lại state cũ
    }
}