import { toast } from 'react-toastify';

const displaySuccessMessage = (message: string) =>
  toast.success(
    <div className="text-green-700-700 font-semibold text-sm">{message}</div>,
    {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      bodyClassName: 'm-0 p-0 bg-[#fff]',
      className:
        'bg-[#F6FEF9] border border-[#6CE9A6] min-h-[20px] p-4 rounded-none sm:rounded-xl shadow-none m-0 mb-2',
    }
  );

export default displaySuccessMessage;
