export const initialState =JSON.parse(localStorage.getItem("state")) || [];

export const reducer = (state, action) => {
    //const {type, payload}= action;
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    // Haddii action-ka lama yaqaan yahay, dib u celi state-ka
    case 'delete':
        return state.filter((todo) => todo.id !== action.payload); 

       case "toggle":
        return state.map((todo)=>todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : todo

    );
    case 'edit':
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );


       



    default:
        return state;
  }
};