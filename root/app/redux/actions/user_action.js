

exports.getAction = () => {
    return function (dispatch) {
        dispatch({
            type: 'GET'
        });
    }
};


exports.addAction = (User) => {
  return function(dispatch){
      dispatch({
          type:'ADD',
          User
      });
  }
}


exports.deleteAction = (correo) =>{
    return function(dispatch){
        dispatch({
            type:'DELETE',
            correo
        });
    }
}