import { combineReducers, legacy_createStore as createStore } from "redux";
import { expenseReducer } from "../reducer/expenses";

const reducer = combineReducers({
    expenses : expenseReducer,
});
const initialState= {};

const store = createStore(reducer, initialState)

export default store