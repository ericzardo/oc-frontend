import { useState } from "react";

import Interface from "@components/actions/Interface";
import LabeledInput from "@components/forms/LabeledInput";
import DropdownInput from "@components/forms/DropdownInput";

const data = [
  {
    name: "Space",
    chats: [
      {
        name: "Space name",
        onlineUsers: 280,
        createdAt: "10/06/2024",
      },
    ],
  },
  {
    name: "Dev and Code",
    chats: [
      {
        name: "Clean Code",
        onlineUsers: 1089,
        createdAt: "10/06/2024",
      },
    ],
  },
];

const DeleteChat = () => {
  const [selectedTheme, setSelectedTheme] = useState("");

  const handleThemeChange = (e) => {
    setSelectedTheme(e.target.value);
  };

  console.log(selectedTheme);
  const filteredChats = selectedTheme
    ? data.find((theme) => theme.name === selectedTheme)?.chats || []
    : [];

  return (
    <Interface title="Delete chat" submitButton={true} cancelButton={true}>
      <LabeledInput id="themes" labelText="Select a Theme: ">
        <DropdownInput
          onChange={handleThemeChange}
          placeholder="Choose here!"
          children={data.map((theme) => (
            <option key={theme.name} value={theme.name}>
              {theme.name}
            </option>
          ))}
        ></DropdownInput>
      </LabeledInput>

      <LabeledInput id="chats" labelText="Select the Chat ">
        <DropdownInput placeholder="Chats...">
          {filteredChats.map((chat) => (
            <option key={chat.name} value={chat.name}>
              {chat.name}
            </option>
          ))}
        </DropdownInput>
      </LabeledInput>
    </Interface>
  );
};

export default DeleteChat;
