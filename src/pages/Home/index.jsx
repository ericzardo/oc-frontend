import { useState, useEffect, Fragment } from "react";
import { useSearchParams } from "react-router-dom";

import AlertModal from "@components/modals/AlertModal";

import useFetchChats from "@hooks/api/useFetchChats";

import Dropdown from "@components/Dropdown";
import InputModal from "@components/modals/InputModal";
import CloseModal from "@components/common/CloseModal";
import UserInput from "@components/forms/UserInput";
import Card from "@components/Card";

import { ArrowDown, ArrowRight } from "react-feather";

function Home () {
  const [searchParams] = useSearchParams();
  const [isError, setIsError] = useState(false);

  const { data: chats, isLoading, error } = useFetchChats();

  useEffect(() => {
    if (error) {
      setIsError(true);
    }
  }, [error]);

  if (isLoading) return <h1>Loading...</h1>;

  const isParamMatch = (param, value) => searchParams.get(param) == value;
  const isChatSelected = searchParams.get("chat");

  return (
    <div className="w-auto mx-auto max-w-screen-lg bg-zinc-300 flex flex-1 flex-wrap justify-between rounded-t-2xl shadow-md overflow-hidden">
      {chats &&
        chats.map((theme) => (
          <Fragment key={theme.name}>
            <Dropdown.Root
              key={theme.name}
              params={{
                key: "theme",
                value: theme.name,
                childrenKey: "chat",
              }}
            >
              {isParamMatch("theme", theme.name) ? (
                <ArrowDown />
              ) : (
                <ArrowRight />
              )}
              <Dropdown.Name name={theme.name} />
            </Dropdown.Root>

            {isParamMatch("theme", theme.name) && (
              <Dropdown.Content>
                {theme.chats.map((chat) => (
                  <Card.Root
                    key={chat.name}
                    params={{
                      key: "chat",
                      value: chat.name,
                    }}
                  >
                    <Card.Title title={chat.name} />
                    <Card.Footer
                      infos={[`${chat.onlineUsers} on-line`, chat.createdAt]}
                    />
                  </Card.Root>
                ))}
              </Dropdown.Content>
            )}
          </Fragment>
        ))}
      {isChatSelected && (
        <InputModal.Root>
          <InputModal.Title title="Joining a chat?" />
          <InputModal.Content content="Please enter your username to continue to the online chat" />
          <UserInput.Root>
            <UserInput.Input placeholder="Enter your username here!" />
            <UserInput.Button
              content={"Next"}
              onSubmit={() => console.log("submit!")}
            />
          </UserInput.Root>
        </InputModal.Root>
      )}

      {isError && (
        <AlertModal.Root onClose={() => setIsError(false)} model="error">
          <CloseModal
            onClose={() => setIsError(false)}
            size="sm"
            color="white"
          />
          <AlertModal.Content message={error.message} />
          <AlertModal.ProgressBar model="error" duration={10000} />
        </AlertModal.Root>
      )}
    </div>
  );
}

export default Home;
