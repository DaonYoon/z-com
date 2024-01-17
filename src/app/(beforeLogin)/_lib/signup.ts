"use server";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";

export async function onSubmit(prevstate: any, formData: FormData) {
  if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
    return { message: "no_id" };
  }
  if (!formData.get("name") || !(formData.get("name") as string)?.trim()) {
    return { message: "no_name" };
  }
  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password" };
  }
  if (!formData.get("image")) {
    return { message: "no_image" };
  }
  let shouldRedirect = false;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`, {
      method: "post",
      body: formData,
      credentials: "include",
    });

    if (response.status === 403) {
      return { message: "user_exists" };
    }

    shouldRedirect = true;

    await signIn("credentials", {
      username: formData.get("id"),
      password: formData.get("password"),
      redirect: false,
    });
  } catch (error) {
    console.log(error);
  }

  if (shouldRedirect) {
    redirect("/home"); // try/catch문 안에서 X
  }
}
