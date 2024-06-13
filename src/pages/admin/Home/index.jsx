import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Plus, X } from "react-feather";

import SectionWithActions from "@components/SectionWithActions";

import CreateChat from "@components/actions/CreateChat";
import DeleteChat from "@components/actions/DeleteChat";

function AdminHome () {
  const [action, setAction] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const params = new URLSearchParams(searchParams);

  const renderActionComponent = () => {
    switch (params.get("manage-chat")) {
    case "add":
      return <CreateChat />;

    case "delete":
      return <DeleteChat />;

    default:
      break;
    }
  };

  const handleAction = (action) => {
    if (params.get("manage-chat") == action) {
      params.delete("manage-chat");
    } else {
      params.set("manage-chat", action);
    }

    setSearchParams(params);
  };

  return (
    <div className="w-auto mx-auto max-w-screen-lg h-full py-5 px-8 bg-zinc-300 rounded-2xl shadow-md overflow-hidden">
      <h1 className="text-zinc-700 font-bold text-2xl my-6">Admin Dashboard</h1>
      <SectionWithActions title="Manage Chats">
        <button
          onClick={() => handleAction("add")}
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

      {renderActionComponent(action)}
    </div>
  );
}

export default AdminHome;
