import axios from "axios";

export default {

  userRegister: function (newUserObj) {
    return axios.post("/register", newUserObj)
  },

  userLogin: function (userObj) {
    return axios.post("/login", userObj)
  },

  userLogout: function () {
    return axios.get("/logout")
  },

  createPackBtn: (packInfo) => {
    console.log("reactAPI client req:", "packInfo");
    return axios.post("/api/pack/create", packInfo);
  },

  findUserPacks: (userId) => {
    console.log("reactAPI client req: find all packs");
    return axios.get("/api/pack/find/" + userId);
  },

  findAllPacks: () => {
    console.log("reactAPI client req: find all packs");
    return axios.get("/api/pack/findall");
  },

  findUnpicked: () => {
    console.log("reactAPI client req: find unpicked packs");
    return axios.get("/api/pack/findunpicked");
  },

  // updateCarrier: (userId, packId) => {
  //   console.log("reactAPI client req: carrier picked");
  //   return axios.put(`/api/pack/carrier/${userId}/${packId}`);
  // },

  updatePackStatus: (packId) => {
    console.log("reactAPI client req: carrier picked");
    return axios.put("/api/pack/pick/" + packId);
  },

  // createUserBtn: (userInfo) => {
  //   console.log("reactAPI client req:", "userInfo");
  //   return axios.post("/api/user/create", userInfo);
  // },
  // findUserBtn: (userLogInfo) => {
  //   console.log("reactAPI client req: find the user to login");
  //   return axios.post("/api/user/find", userLogInfo);
  // },
  // logout: () => {
  //   console.log("reactAPI client req: find the user to login");
  //   return axios.get("/logout");
  // },

  // findUser: (id) => {
  //   return axios.get("/findUser/" + id);
  // }

};
