import api from "@lib/axios";

const createChat = async (data) => {
  let res;
  await api.post("/admin/create-chat", data)
    .then(response => {
      if (!response.data) {
        const message = "Error creating new chats. Please try again.";
        throw new Error(message);
      }

      return response.data;

    })
    .catch(err => {

      if (!err.response) {

        const message = "Server did not respond. Please try later";
        throw new Error(message);
      }

      const { message } = err.response.data;
      throw new Error(message);
    });

  if (!res) throw new Error("Server did not respond.Please try later");

  return res;
};

export default createChat;