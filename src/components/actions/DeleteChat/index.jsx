import { useState, useEffect } from "react";

import Interface from "@components/actions/Interface";
import LabeledInput from "@components/forms/LabeledInput";
import DropdownInput from "@components/forms/DropdownInput";

import useFetchChats from "@hooks/api/useFetchChats";

const DeleteChat = () => {
  const [selectedTheme, setSelectedTheme] = useState("");

  const { data: themes, isLoading, error } = useFetchChats();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (error) {
      setIsError(true);
    }
  }, [error]);

  const handleThemeChange = (e) => {
    setSelectedTheme(e.target.value);
  };

  const filteredChats = selectedTheme
    ? themes.find((theme) => theme.name === selectedTheme)?.chats || []
    : [];

  const handleDeleteChat = () => {
    console.log("delete chat");
  };
  return (
    <Interface.Root>
      <Interface.Title title="Delete chat" />
      <Interface.Content onSubmit={handleDeleteChat}>
        <LabeledInput id="themes" labelText="Select a Theme: ">
          <DropdownInput.Selection id="themes" required>
            <DropdownInput.Placeholder
              placeholder="Choose here!"
              disabled
              hidden
            />
            {themes &&
              themes.map((theme) => (
                <option
                  onClick={handleThemeChange}
                  key={theme.name}
                  value={theme.name}
                >
                  {theme.name}
                </option>
              ))}
          </DropdownInput.Selection>
        </LabeledInput>

        <LabeledInput id="chats" labelText="Select the Chat: ">
          <DropdownInput.Selection id="themes" required>
            <DropdownInput.Placeholder placeholder="Chats..." disabled hidden />
            {filteredChats &&
              filteredChats.map((chat) => (
                <option key={chat.name} value={chat.name}>
                  {chat.name}
                </option>
              ))}
          </DropdownInput.Selection>
        </LabeledInput>
      </Interface.Content>
      <Interface.Footer withCancel withSubmit />
    </Interface.Root>
  );
};

export default DeleteChat;
