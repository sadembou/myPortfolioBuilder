import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "@/data/styles";
import { SectionWrapper } from "@/hoc";
import { slideIn } from "@/lib/motion";
import { contactFormType } from "@/lib/utils";


const Contact = ({data}:{data:any}) => {
  const dataContactForm = data?.["contactForm"] as contactFormType;
  const success = data?.["success"] as string;
  const failure = data?.["failure"] as string;
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: form.name,
          to_name: "My Portfolio",
          from_email: form.email,
          to_email: "yann@tyril.fo",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert(success)
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error: Error
        ) => {
          setLoading(false);
          console.error(error);

          alert(failure);
        }
      );
  };

  return (
    <div
      className="xl:mt-12 flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>{dataContactForm.title}</p>
        <h3 className={styles.sectionHeadText}>{dataContactForm.titlePlaceholder}</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'> {dataContactForm.title} </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={dataContactForm.titlePlaceholder}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium md:w-[500px]'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{dataContactForm.emailTitle}</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={dataContactForm.emailPlaceholder}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'> {dataContactForm.messageTitle} </span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={(e)=>handleMessage(e)}
              placeholder={dataContactForm.namePlaceholder}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");