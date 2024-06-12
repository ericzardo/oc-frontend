import Interface from "@components/actions/Interface";
import LabeledInput from "@components/forms/LabeledInput";
import DropdownInput from "@components/forms/DropdownInput";

const themes = [
  { id: 1, name: "Space", createdAt: null, updatedAt: null },
  { id: 2, name: "Dev and Code", createdAt: null, updatedAt: null },
];

const CreateChat = () => {
  return (
    <Interface
      title={"Create new Chat"}
      submitButton={true}
      cancelButton={true}
    >
      <LabeledInput id="themes" labelText="Select a Theme: ">
        <DropdownInput placeholder="Choose here!" custom="Custom Theme">
          {themes.map((theme) => (
            <option key={theme.name} value={theme.name}>
              {theme.name}
            </option>
          ))}
        </DropdownInput>
      </LabeledInput>

      <LabeledInput id="chat-name" labelText="Enter Chat Name: ">
        <input
          type="text"
          placeholder="Example: Clean Code"
          name="chat-name"
          id="chat-name"
          className="bg-zinc-100 text-zinc-800 p-2.5 rounded-md"
        />
      </LabeledInput>

      <LabeledInput
        id="chat-desc"
        labelText="Enter Chat Description (Optional): "
      >
        <textarea
          name="chat-desc"
          id="chat-desc"
          placeholder="..."
          className="bg-zinc-100 text-zinc-800 p-2.5 rounded-md"
        ></textarea>
      </LabeledInput>
    </Interface>
  );
};

export default CreateChat;