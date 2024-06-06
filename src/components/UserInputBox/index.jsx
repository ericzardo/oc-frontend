function UserInputBox ({ placeholder, buttonText, onSubmit }) {
  return (
    <span
      className="flex flex-row items-center justify-between h-10 w-full rounded-2xl overflow-hidden bg-zinc-100 text-lg shadow-sm">

      <input
        required
        type="text"
        placeholder={placeholder}
        className="placeholder:text-zinc-800/40 text-zinc-800 bg-transparent outline-none py-2.5 px-4"
      />

      <button
        onSubmit={onSubmit}
        type="submit"
        title={buttonText}
        className="bg-blue-500 text-zinc-200 text-lg py-2.5 px-4 flex items-center justify-start text-left cursor-pointer select-none transition-colors duration-300 ease-out hover:bg-blue-800"
      />
    </span>
  );
}

export default UserInputBox;