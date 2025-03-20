import {
    QueryListOfUsers,
    QueryUserById,
} from "../services/user.js";

const GetAllUser = (req,res) => {
    const userList = QueryListOfUsers();

    return res.render("userAll", { userList })
    
}

const GetUser = (req,res) => {
    const userId = req.params.id;
    const userData = QueryUserById(userId);

    return res.render("userById", { userData })
}

export {
    GetAllUser,
    GetUser
}