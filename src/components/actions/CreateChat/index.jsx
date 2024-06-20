import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

import Interface from "@components/actions/Interface";
import LabeledInput from "@components/forms/LabeledInput";
import DropdownInput from "@components/forms/DropdownInput";

import useFetchThemes from "@hooks/api/useFetchThemes";

const CreateChat = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const { data: themes, isLoading, error } = useFetchThemes();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (error) {
      setIsError(true);
    }
  }, [error]);

  const { register, handleSubmit } = useForm();

  const handleCreateChat = (data) => {
    console.log(data);
  };

  const onChangeDropdown = () => {
    params.delete("custom");

    setSearchParams(params);
  };

  const handleCustomTheme = () => {
    const key = "custom";

    if (params.get(key)) params.delete(key);
    params.set(key, "themes");

    setSearchParams(params);
  };

  const isCustomThemeSelected = params.get("custom") === "themes";

  return (
    <Interface.Root>
      <Interface.Title title="Add new Chat" />
      <Interface.Content onSubmit={handleCreateChat}>
        <LabeledInput id="themes" labelText="Select a Theme: ">
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
                  {...register("theme-name")}
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
          {isCustomThemeSelected && (
            <DropdownInput.CustomInput placeholder="New Theme" />
          )}
        </LabeledInput>

        <LabeledInput id="chat-name" labelText="Enter Chat Name: ">
          <input
            type="text"
            placeholder="Example: Clean Code"
            id="chat-name"
            {...register("chatName")}
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
            {...register("chatDescription")}
            className="bg-zinc-100 text-zinc-800 p-2.5 rounded-md"
          ></textarea>
        </LabeledInput>
      </Interface.Content>
      <Interface.Footer withCancel withSubmit />
    </Interface.Root>
  );
};

export default CreateChat;
