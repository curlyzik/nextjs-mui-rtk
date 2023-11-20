import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";
import { PiWarningCircleLight } from "react-icons/pi";

const displayErrorMessage = (message: string) =>
  toast.error(
    <div className="text-red-700 font-semibold text-sm capitalize">
      {message}
    </div>,
    {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      bodyClassName: "m-0 p-0",
      closeButton: (
        <div className="px-2">
          <AiOutlineClose className="text-red-700" />
        </div>
      ),
      className:
        "bg-red-50 border border-red-300 min-h-[20px] p-4 rounded-none sm:rounded-xl shadow-none m-0 mb-2",
      icon: <PiWarningCircleLight className="text-red-600 text-xl" />,
    }
  );

export default displayErrorMessage;
