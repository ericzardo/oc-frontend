import PropTypes from "prop-types";
import { useForm, Controller, get } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

import ActionModal from "@components/modals/ActionModal";
import LabeledInput from "@components/forms/LabeledInput";
import DropdownInput from "@components/forms/DropdownInput";

import useFetchChats from "@hooks/api/useFetchChats";
import { useState } from "react";

DeleteChat.propTypes = {
  actionParam: PropTypes.string.isRequired,
};

function DeleteChat ({ actionParam }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const { data: themes, isLoading } = useFetchChats();
  const [selectedTheme, setSelectedTheme] = useState("");

  const { register, handleSubmit, control } = useForm();

  const filteredChats = selectedTheme
    ? themes.find((theme) => theme.name === selectedTheme)?.chats || []
    : [];

  const deleteCustomParam = (key) => {
    params.delete(key);

    setSearchParams(params);
  };

  const handleDeleteChat = (data) => {
    console.log(data);
  };

  const closeModal = () => deleteCustomParam(actionParam);
  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
    console.log(event.target);
  };
  console.log(themes);
  return (
    <ActionModal.Root onClose={closeModal}>
      <ActionModal.Title title="Delete a Chat" />
      <ActionModal.Content>
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
                  key={theme.name}
                  value={theme.name}
                  onClick={handleThemeChange}
                >
                  {theme.name}
                </option>
              ))}
          </DropdownInput.Selection>
        </LabeledInput>

        <LabeledInput id="chats" labelText="Select the Chat: ">
          <DropdownInput.Selection id="chats" required>
            <DropdownInput.Placeholder placeholder="Chats..." disabled hidden />
            {filteredChats &&
              filteredChats.map((chat) => (
                <option
                  key={chat.name}
                  value={chat.name}
                  {...register("chat-name")}
                >
                  {chat.name}
                </option>
              ))}
          </DropdownInput.Selection>
        </LabeledInput>
      </ActionModal.Content>
      <ActionModal.Footer
        onCancel={closeModal}
        onSubmit={handleSubmit(handleDeleteChat)}
      />
    </ActionModal.Root>
  );
}

export default DeleteChat;
