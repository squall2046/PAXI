import axios from "axios";

export default {
  createPackBtn: (packInfo) => {
    console.log("reactAPI client side:", packInfo);
    return axios.post("/api/pack/create", packInfo);
  },

  findPacks: () => {
    console.log("reactAPI client side: find all packs");
    return axios.get("/api/pack/find");
  },

  updateStatus: (packId) => {
    console.log("reactAPI client side: carrier picked");
    return axios.put("/api/pack/pick/" + packId);
  },

  findUnpicked: () => {
    console.log("reactAPI client side: find unpicked packs");
    return axios.get("/api/pack/find/unpicked");
  },
};
