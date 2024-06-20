import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Plus, X } from "react-feather";

import ActionHeader from "@components/ActionHeader";

import CreateChat from "@components/actions/CreateChat";
import DeleteChat from "@components/actions/DeleteChat";

function AdminHome () {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleAction = (key, action) => {
    const params = new URLSearchParams(searchParams);

    if (params.get(key) === action) {
      params.delete(key);
    } else {
      params.set(key, action);
    }

    setSearchParams(params);
  };

  const renderActionComponent = (key) => {
    const action = searchParams.get(key);

    switch (action) {
    case "add":
      return <CreateChat actionParam={key} />;
    case "delete":
      return <DeleteChat actionParam={key} />;
    default:
      return;
    }
  };

  const actionKey = "manage-chats";

  return (
    <div className="w-auto mx-auto max-w-screen-lg h-full flex flex-col gap-2 py-5 px-8 bg-zinc-300 rounded-2xl shadow-md overflow-hidden">
      <h1 className="text-zinc-700 font-bold text-2xl my-6">Admin Dashboard</h1>
      <ActionHeader.Root title="Manage Chats" actionParam="manage-chats">
        <ActionHeader.Actions>
          <ActionHeader.Action
            buttonContent={<Plus />}
            onClick={(key) => handleAction(key, "add")}
          />
          <ActionHeader.Action
            buttonContent={<X />}
            onClick={(key) => handleAction(key, "delete")}
          />
        </ActionHeader.Actions>
      </ActionHeader.Root>

      {renderActionComponent(actionKey)}
    </div>
  );
}

export default AdminHome;
