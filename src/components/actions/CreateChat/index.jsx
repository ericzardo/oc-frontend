import PropTypes from "prop-types";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

import ActionModal from "@components/modals/ActionModal";
import LabeledInput from "@components/forms/LabeledInput";
import DropdownInput from "@components/forms/DropdownInput";

import useFetchThemes from "@hooks/api/useFetchThemes";

CreateChat.propTypes = {
  actionParam: PropTypes.string.isRequired,
};

function CreateChat ({ actionParam }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const { data: themes, isLoading } = useFetchThemes();

  const { register, handleSubmit, control } = useForm();

  const deleteCustomParam = (key) => {
    params.delete(key);

    setSearchParams(params);
  };

  const handleCreateChat = (data) => {
    console.log(data);
  };

  const onChangeDropdown = () => deleteCustomParam("custom");
  const closeModal = () => deleteCustomParam(actionParam);

  const handleCustomTheme = () => {
    const customKey = "custom";

    if (params.get(customKey)) params.delete(customKey);
    params.set(customKey, "themes");

    setSearchParams(params);
  };

  const isCustomThemeSelected = params.get("custom") === "themes";

  return (
    <ActionModal.Root onClose={closeModal}>
      <ActionModal.Title title="Add new Chat" />
      <ActionModal.Content onSubmit={handleCreateChat}>
        <LabeledInput id="themes" labelText="Select a Theme: ">
          <Controller
            control={control}
            name="theme-name"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <DropdownInput.Selection
                id="themes"
                defaultValue={isCustomThemeSelected ? "custom" : "DEFAULT"}
                required
              >
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
                      onClick={onChangeDropdown}
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                    >
                      {theme.name}
                    </option>
                  ))}
                <DropdownInput.CustomOption
                  content="Custom Theme"
                  onClick={handleCustomTheme}
                  value="custom"
                />
              </DropdownInput.Selection>
            )}
          />

          {isCustomThemeSelected && (
            <DropdownInput.CustomInput placeholder="New Theme" />
          )}
        </LabeledInput>

        <LabeledInput id="chat-name" labelText="Enter Chat Name: ">
          <input
            type="text"
            placeholder="Example: Clean Code"
            id="chat-name"
            {...register("chat-name")}
            className="bg-zinc-100 text-zinc-800 p-2.5 rounded-md"
          />
        </LabeledInput>

        <LabeledInput
          id="chat-desc"
          labelText="Enter Chat Description (Optional): "
        >
          <textarea
            id="chat-desc"
            placeholder="..."
            {...register("chat-description")}
            className="bg-zinc-100 text-zinc-800 p-2.5 rounded-md"
          ></textarea>
        </LabeledInput>
      </ActionModal.Content>
      <ActionModal.Footer
        onCancel={closeModal}
        onSubmit={handleSubmit(handleCreateChat)}
      />
    </ActionModal.Root>
  );
}

export default CreateChat;
