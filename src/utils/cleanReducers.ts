/*
const createReducer = (handlers, initialState = {}) => (
  state = initialState,
  action,
) => {
  const handler = handlers[action.type]
  if (!handler)
    throw new Error(`Unknown action type: ${action.type}`)

  const nextState = handler(state, action)
  return { ...state, ...nextState }
}

export const actionTypes = {
  increment: 'increment',
  decrement: 'decrement',
}

const initialState = { count: 0 }

export const counterReducer = createReducer({
  // Now we don't need to manually spread current state,
  // we only need to return minimal changes required to preform our action
  [actionTypes.increment]: state => ({
    count: state.count + 1,
  }),
  [actionTypes.decrement]: state => ({
    count: state.count - 1,
  }),
}, initialState)
*/
export const actionTypes = {
  increment: 'increment',
  decrement: 'decrement',
}

/*
  Create handlers object with key/value pairs,
  where every key/value pair represents one case from previous switch statement.

  Key is actionType that will allow us to retrieve it's value, handler.

  Handler is a function that has same signature as reducer,
  it takes state and action as parameters, and returns new state.
*/
const handlers = {
  [actionTypes.increment]: state => ({
    ...state,
    count: state.count + 1,
  }),
  [actionTypes.decrement]: state => ({
    ...state,
    count: state.count - 1,
  }),
}

const initState = { count: 0 }
// modify to work with xstate
export const counterReducerClean = (state = initState, action) => {
  // Now we can take handler that we need by action.type
  const handler = handlers[action.type]
  // If we don't find handler we will throw error.
  // This way we cover our default case from previous switch statement.
  if (!handler)
    throw new Error(`Unknown action type: ${action.type}`)

  // At last, we call handler with state and action, and it should return a new state
  const nextState = handler(state, action)
  return nextState
}

const createReducer = (handlers, initialState = {}) => (
  state = initialState,
  action,
) => {
  const handler = handlers[action.type]
  if (!handler)
    throw new Error(`Unknown action type: ${action.type}`)

  const nextState = handler(state, action)
  return nextState
}

const initialState = { count: 0 }

export const counterReducer = createReducer({
  [actionTypes.increment]: state => ({
    ...state,
    count: state.count + 1,
  }),
  [actionTypes.decrement]: state => ({
    ...state,
    count: state.count - 1,
  }),
}, initialState)
