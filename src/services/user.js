import { USER_DATA } from "../models/userData.js"

const QueryUserById = (id) => {
    let user;
    USER_DATA.forEach ((userData) => {
        if (userData.id = id) 
            user = userData;
        });
    return user;
}


const QueryListOfUsers = () => {
    return USER_DATA;
    };

export {
    QueryListOfUsers,
    QueryUserById,
}