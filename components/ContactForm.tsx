"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/lib/validation"; // Import the schema
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { PiShareNetworkDuotone } from "react-icons/pi";
import Input from "./Input";
import { useEffect, useRef } from "react";
import { Button } from "./ui/Moving-border";
import { Toaster, toast } from "react-hot-toast";
import Image from "next/image";
import { motion } from "framer-motion";

type FormData = z.infer<typeof formSchema>; // Extract TypeScript types from Zod schema

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CONFIRMATION_TEMPLATE_ID!, // New template for confirmation
        {
          name: data.name,
          email: data.email, // This ensures the email is sent to the sender
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      toast.success("Message sent Successfully!");
      console.log("Both emails sent successfully!");
      reset(); // Reset form after submission
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
      // alert("Failed to send message. Please try again.");
    }
  };
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        reset(); // Reset form fields and errors
      }
    };

    document.addEventListener("click", handleClickOutside);
    console.log("workinnggg");
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [reset]);

  return (
    <motion.div 
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.4 }} // Spring effect
    // viewport={{ once: true }}
      className="px-5 py-5 flex items-end justify-center  relative w-full lg:w-[75%] md:min-h-[75vh] gap-4 rounded-xl flex-col md:flex-row "
      style={{
        background:
          "linear-gradient(90deg, rgba(0,2,29,1) 42%, rgba(30,0,75,0.8015581232492998) 74%)",
      }}
    >
      {/* Form Section */}
      <div className="flex flex-col gap-4 xl:gap-2 w-full  flex-grow md:mx-6">
        <div className="text font-blade-singer-cond xl:mb-2">
          <div className="head flex items-center gap-2 text-lg md:text-xl">
            <h1 className="tracking-widest">Let’s Connect</h1>
            <PiShareNetworkDuotone />
          </div>
          <p
            className="font-sans text-[0.7rem] xl:text-sm hidden md:block py-1"
          >
            Feel free to connect for collaborations or to discuss exciting
            projects!
          </p>
        </div>

        {/* Form Container */}
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 flex-grow"
        >
          <Input
            register={register}
            errors={errors}
            place={"Name"}
            value={"name"}
            type="text"
          />
          <Input
            register={register}
            errors={errors}
            place="Email"
            value="email"
            type="email"
          />
          <Input
            register={register}
            errors={errors}
            place="Message.."
            value="message"
            type="textarea"
          />

          <Button
            as="button"
            type="submit"
            borderColor="#47c8ff"
            isSubmitting={isSubmitting} 
            containerClassName={`flex items-center justify-center h-10 mt-5 w-full rounded-md  
    ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""} 
  `}
            className="border-[#137de65e] md:bg-[#000000] bg-[#00000000]"
          >
            <div className="flex w-full items-center justify-center gap-2 font-blade-singer-cond tracking-widest text-[#47c8ff]">
              <p>{isSubmitting ? "Submitting..." : "Submit"}</p>
            </div>
          </Button>

        </form>
      </div>

      {/* Image Section */}
      <div
        className="w-full md:w-[25rem] lg:w-[32vw] xl:h-[27rem] flex-shrink-0 h-40 md:h-[80vh] shadow-lg md:shadow-2xl rounded-lg"
        style={{
          boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.9)", // Black shadow with reduced blur
        }}
      >
        <Image
          src="/robot.jpg"
          alt=""
          className="w-full h-full object-cover rounded-lg" 
          width={300}
          height={300}
        />
      </div>
      <Toaster
        toastOptions={{
          // className:"border-blue-600 border-2 ",
          success: {
            style: {
              background: "#18002f",
              color: "white",
              // borderColor:"",
              border: "1px solid  #0070ff",
            },
          },
          error: {
            style: {
              background: "#18002f",
              color: "white",
              // borderColor:"",
              border: "1px solid red",
            },
          },
        }}
        containerStyle={{
          top: '90%',
          // left: 20,
          // bottom: 20,
          // right: 20,
        }}
      />
    </motion.div>
  );
};

export default ContactForm;
