import axios from "axios";

export default {
  createPackBtn: (packInfo) => {
    console.log("client side:", packInfo);
    return axios.post("/api/pack/create", packInfo);
  },

  findPacks: () => {
    console.log("find all packs");
    return axios.get("/api/pack/find");
  },
};
