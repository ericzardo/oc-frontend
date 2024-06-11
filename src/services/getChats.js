import api from "@lib/axios";

const getChats = async () => {
  await api.get(`/get-chats`)
    .then(response => {
      if (!response.data || response.data.chats) {
        const message = "Error loading website informations. Please try again.";
        // Handle error
      }

      return response.data.chats;
    })
    .catch(err => {
      if (!err.response) {
        const message = "Server did not respond. Please try again later";
        // Handle error
      }

      const { message } = err.response.data;
      // Handle error
    });
};

export default getChats;