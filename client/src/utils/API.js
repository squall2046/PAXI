import axios from "axios";

export default {

  createPackBtn: (packInfo) => {
    console.log("reactAPI client req:", "packInfo");
    return axios.post("/api/pack/create", packInfo);
  },

  findPacks: () => {
    console.log("reactAPI client req: find all packs");
    return axios.get("/api/pack/find");
  },

  updateStatus: (packId) => {
    console.log("reactAPI client req: carrier picked");
    return axios.put("/api/pack/pick/" + packId);
  },

  findUnpicked: () => {
    console.log("reactAPI client req: find unpicked packs");
    return axios.get("/api/pack/find/unpicked");
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

  findUser: (id) => {
    return axios.get("/findUser/" + id);
  }

};
