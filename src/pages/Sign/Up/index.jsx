import { useForm } from "react-hook-form";

import InputModal from "@components/modals/InputModal";
import Input from "@components/forms/Input";
import Button from "@components/forms/Button";

function SignUp () {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <InputModal.Root closeButton={false} size={"xl"}>
      <InputModal.Title title="Meet new people!" />
      <InputModal.Content content="Sign up now to talk and meet with strangers" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-3"
      >
        <div className="flex flex-col gap-0.5">
          <Input
            placeholder="Username"
            name="username"
            ps={""}
            {...register("username", {
              required: true,
              maxLength: 25,
              minLength: 4,
            })}
          />
          <em className="text-zinc-600 text-xs">
            *Obs: This username is displayed to others*
          </em>
        </div>

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

        <Button type="submit" buttonContent={"Continue"} />

        <div className="w-full flex gap-2 justify-center items-center">
          <p className="text-zinc-600">Have an account?</p>
          <a href="/sign-in" className="text-blue-500">
            Log in here
          </a>
        </div>
      </form>
    </InputModal.Root>
  );
}

export default SignUp;
