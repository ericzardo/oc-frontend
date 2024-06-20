import api from "@lib/axios";

const fetchThemes = async () => {
  let res;
  await api.get("/get-themes")
    .then(response => {
      if (!response.data || !response.data.themes) {
        const message = "Error sending chats informations. Please try again.";
        throw new Error(message);
      }

      res = response.data.themes || [];
    })
    .catch(err => {

      if (!err.response) {

        const message = "Server did not respond. Please try later";
        throw new Error(message);
      }

      const { message } = err.response.data;
      throw new Error(message);
    });

  if (!res) throw new Error("Server did not respond. Please try later");

  return res;
};

export default fetchThemes;