import {SELECT_ANSWER, NEXT_QUESTION, RESET_QUIZ} from "../constants/quizActionTypes"
import {initialState, QUESTIONS} from "../data";

// Reducer
export function quizReducer(state, action) {
    switch(action.type){
        case SELECT_ANSWER: {
            return {
                ...state,
                currentSelectedAnswer: {
                    id: action.payload.id,
                    answer: action.payload.answer
                }
            };
        }
        case NEXT_QUESTION: {
            const isLastQuestion = state.currentQuestionIndex === QUESTIONS.length - 1;
            return {
                ...state,
                currentQuestionIndex: isLastQuestion ? state.currentQuestionIndex : state.currentQuestionIndex + 1,
                submittedAnswers: [...state.submittedAnswers, state.currentSelectedAnswer],
                currentSelectedAnswer: isLastQuestion ? state.currentSelectedAnswer: null,
                isQuizFinished: isLastQuestion
            };
        }
        case RESET_QUIZ:
            return initialState;
        default: 
            return state;
    }
}