// Action Creators
export function addQuote(quote) {
  return {
    type: "quotes/add",
    payload: quote,
  };
};

export function removeQuote(id) {
  return {
    type: "quotes/remove",
    payload: id,
  };
};

export function upvoteQuote(id) {
  return {
    type: "quotes/upvote",
    payload: id,
  }
}

export function downvoteQuote(id) {
  return {
    type: "quotes/downvote",
    payload: id,
  }
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload];

    case "quotes/remove":
      return state.filter((quote) => quote.id !== action.payload);

    case "quotes/upvote":
      const up = [...state].find((quote) => quote.id === action.payload)
      up.votes += 1
      return [...state].map((quote) => quote.id === action.payload ? up : quote)

    case "quotes/downvote":
      const dn = [...state].find((quote) => quote.id === action.payload)
      dn.votes === 0 ? dn.votes = 0 : dn.votes -= 1
      return [...state].map((quote) => quote.id === action.payload ? dn : quote)

    default:
      return state;
  }
}
