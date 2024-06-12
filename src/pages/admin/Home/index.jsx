import { useState } from "react";
import { Plus, X } from "react-feather";

import SectionWithActions from "@components/SectionWithActions";

import CreateChat from "@components/actions/CreateChat";
import DeleteChat from "@components/actions/DeleteChat";

const themes = [
  { id: 1, name: "Space", createdAt: null, updatedAt: null },
  { id: 2, name: "Dev and Code", createdAt: null, updatedAt: null },
];

function AdminHome () {
  const [action, setAction] = useState("");

  const renderActionComponent = (action) => {
    switch (action) {
    case "plus":
      return <CreateChat />;

    case "delete":
      return <DeleteChat />;

    default:
      setAction("");
      break;
    }
  };

  const handleAction = (actionName) => {
    if (action === actionName) return setAction("");

    setAction(actionName);
  };

  return (
    <div className="w-auto mx-auto max-w-screen-lg h-full py-5 px-8 bg-zinc-300 rounded-2xl shadow-md overflow-hidden">
      <h1 className="text-zinc-700 font-bold text-2xl my-6">Admin Dashboard</h1>
      <SectionWithActions title="Manage Chats">
        <button
          onClick={() => handleAction("plus")}
          className="bg-blue-500 text-zinc-50 w-8 h-8 rounded-full flex justify-center items-center p-0.5 transition-colors duration-300 ease-out hover:bg-blue-700"
        >
          <Plus />
        </button>
        <button
          onClick={() => handleAction("delete")}
          className="bg-blue-500 text-zinc-50 w-8 h-8 rounded-full flex justify-center items-center p-0.5 transition-colors duration-300 ease-out hover:bg-blue-700"
        >
          <X />
        </button>
      </SectionWithActions>

      {action && renderActionComponent(action)}
    </div>
  );
}

export default AdminHome;
