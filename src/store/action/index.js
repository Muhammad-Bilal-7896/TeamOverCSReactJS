import firebase from '../../firebase/index';

const setCurrentKey = (data) => {
    console.log("Hello I am here The key is: ", data);
    return (dispatch) => {
        dispatch({ type: "SETCURRENTKEY", data: data })
    }
}

const get_Blog_all_data = () => {
    return (dispatch) => {
        let users = [];
        firebase.database().ref(`Projects/`).on('value', (snapshot) => {
            snapshot.forEach(function (data) {
                console.log("Haaha=>",data.val())
                users.push(data.val())
            })
            dispatch({ type: "GETBLOGDATA", data: users }) 
            //console.log(users)
        })        
    }
}



export {
    get_Blog_all_data,
    setCurrentKey
}