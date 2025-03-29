import React from "react";
import { GlowingEffect } from "./ui/glowing-effect";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface InputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
  value: string;
  place: string;
  type?: "text" | "email" | "textarea";
}

const Input: React.FC<InputProps> = ({
  register,
  errors,
  value,
  place,
  type = "text",
}) => {
  return (
    <div
      className={`w-full relative rounded-md px-3 py-2 text-sm border 
      ${errors?.[value] ? "border-red-500" : "border-[#137de64d] "}`}
    >
      {/* Show glowing effect only if no error */}
      {!errors?.[value] && (
        <GlowingEffect
          spread={20}
          glow={true}
          disabled={false}
          proximity={60}
          inactiveZone={0}
          variant="default"
          borderWidth={2}
          className="absolute inset-0 w-full h-full rounded-md pointer-events-none"
        />
      )}

      {type === "textarea" ? (
        <textarea
          {...register(value)}
          placeholder={place}
          className="w-full bg-transparent outline-none font-blade-singer-cond tracking-widest text-sm relative z-10 resize-none  h-40 md:h-48 lg:h-36"
        />
      ) : (
        <input
          type={type} // Dynamically set input type
          {...register(value)}
          placeholder={place}
          className="w-full bg-transparent outline-none font-blade-singer-cond tracking-widest text-sm relative z-50"
        />
      )}

      {/* Display error message dynamically */}
      {/* {errors?.[value] && (
        <p className="text-red-500">{errors[value]?.message as string}</p>
      )} */}
    </div>
  );
};

export default Input;
