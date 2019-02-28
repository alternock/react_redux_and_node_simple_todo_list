
let initialState = [
  { nombre: 'pepe', correo: 'pepe@gmail.com' },
  { nombre: 'juan', correo: 'juan@gmail.com' },
  { nombre: 'vanessa', correo: 'vanessa@gmail.com' }
];


let userReducer = (state = initialState, actions) => {

  switch (actions.type) {

    case ('GET'):
      return {
        ...state
      }
    case ('ADD'):
      return state.concat([actions.User]);

    case ('DELETE'):
      return state.filter((users) => {
        if (users.correo !== actions.correo) {
          return users.correo;
        }
      });
    default:
      return state;
  }

}


export default userReducer;