"use client";
import { DictionaryType } from "@/lib/dictionary";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getSchema } from "@/validation";
import { Locale } from "@/i18n.config";
import MyPresentationPopup from "../my-popup/my-presentation-popup";

type Props = {
  dictionary: DictionaryType;
  lang: Locale;
};

const ContactForm = ({ dictionary, lang }: Props) => {
  let [open, setOpen] = useState(false);
  const schema = getSchema(lang);
  type FormValues = z.infer<typeof schema>;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (data: FormValues) => {
    setOpen(true);
  };

  return (
    <div>
      <MyPresentationPopup open={open} setOpen={setOpen} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto  space-y-6 rounded-md bg-[#F3F3F3] px-12 pb-12 pt-16 text-xl"
      >
        {" "}
        <div className=" w-full">
          <input
            {...register("name")}
            type="text"
            className={cn(
              "w-full  rounded-lg  bg-white px-2 py-2 text-[#3d4f5c] placeholder:text-[#939393]",
              errors.name && "border-red-600",
            )}
            placeholder={`${dictionary.form["name"]}*`}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <div className="py-1 text-xs text-red-600">
              {errors.name.message}
            </div>
          )}
        </div>
        <div className=" w-full">
          <input
            {...register("email")}
            type="text"
            className={cn(
              "w-full  rounded-lg  bg-white px-2 py-2 text-[#3d4f5c] placeholder:text-[#939393]",
              errors.email && "border-red-600",
            )}
            placeholder={`${dictionary.form["email"]}*`}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <div className="py-1 text-xs text-red-600">
              {errors.email.message}
            </div>
          )}
        </div>
        <div className=" w-full">
          <textarea
            rows={10}
            {...register("message")}
            className={cn(
              "w-full  rounded-lg  bg-white px-2 py-2 text-[#3d4f5c] placeholder:text-[#939393]",
              errors.name && "border-red-600",
            )}
            placeholder={`${dictionary.form["message"]}*`}
            aria-invalid={errors.message ? "true" : "false"}
          />
          {errors.message && (
            <div className="py-1 text-xs text-red-600">
              {errors.message.message}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="mx-auto block w-fit rounded-full bg-[#3D4F5C] px-8 py-2 text-white hover:opacity-75"
        >
          {dictionary.form["send"]}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
