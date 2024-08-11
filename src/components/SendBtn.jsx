import SendIcon from "../icons/SendIcon";

const SendBtn = () => {
  return (
    <>
      <button
        type="submit"
        className={`group flex min-h-12 w-fit min-w-32 items-center justify-center gap-2 rounded-full border-2 border-sky-500 px-4 text-lg font-medium hover:bg-sky-500 hover:text-slate-200 focus:bg-sky-500 focus:text-slate-200 dark:border-sky-300 dark:text-slate-300 dark:hover:bg-sky-300 dark:hover:text-slate-700 dark:focus:bg-sky-300 dark:focus:text-slate-700`}
      >
        <SendIcon
          className={
            "group-hover:rotate-45 group-hover:transition-all group-hover:duration-300"
          }
        />
        <span className="group-hover:hidden">Send</span>
      </button>
    </>
  );
};

export default SendBtn;
