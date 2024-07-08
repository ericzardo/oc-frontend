import { useForm } from "react-hook-form";

import InputModal from "@components/modals/InputModal";
import Input from "@components/forms/Input";
import Button from "@components/forms/Button";

function SignIn () {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <InputModal.Root closeButton={false} size={"xl"}>
      <InputModal.Title title="Welcome back" />
      <InputModal.Content content="Log in and start to talk with everyone" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-3"
      >
        <Input
          type="email"
          placeholder="Email"
          name="email"
          {...register("email", { required: true })}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          {...register("password", { required: true })}
        />

        <Button type="submit" buttonContent={"Sign In"} />

        <div className="w-full flex gap-2 justify-center items-center">
          <p className="text-zinc-600">Wait! An account?</p>
          <a href="/sign-up" className="text-blue-500">
            Sign up here
          </a>
        </div>
      </form>
    </InputModal.Root>
  );
}

export default SignIn;
