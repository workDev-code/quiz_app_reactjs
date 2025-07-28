// Nhập reducer và các hằng số action
import { quizReducer } from "./useQuizReducer";
import { SELECT_ANSWER, NEXT_QUESTION, RESET_QUIZ } from "../constants/quizActionTypes";
import { initialState, QUESTIONS } from "../data";

// Reducer
export function quizReducer(state, action) {
    switch(action.type){
        case SELECT_ANSWER: {
            return {
                ...state,
                currentSelectedAnswer: action.payload
            };
        }

        case NEXT_QUESTION: {
            const isLastQuestion = state.currentQuestionIndex === QUESTIONS.length - 1;
            return {
                ...state,
                currentQuestionIndex: isLastQuestion ? state.currentQuestionIndex : state.currentQuestionIndex + 1,
                currentSelectedAnswer: null,
                submittedAnswers: [...state.submittedAnswers, state.currentSelectedAnswer],
                isQuizFinished: isLastQuestion
            };
        }

        case RESET_QUIZ:
            return initialState;

        default: 
            return state;
    }
}
