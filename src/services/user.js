import axios from "axios";

const apiURL = "https://api.github.com/";
const userApi = {
  fetchUser: (search) => {
    return axios.get(`${apiURL}search/users?q=${search}`);
  },
  fetchUsers: ()=>{
    return axios.get(`${apiURL}users`);
  },
  fetchUserInfo: (username)=>{
    return axios.get(`${apiURL}users/${username}`);
  },
  fetchUserRepo: (username)=>{
    return axios.get(`${apiURL}users/${username}/repos`);
  }
};


export default userApi