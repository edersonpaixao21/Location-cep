import { IData } from "./IData";
import toast from "react-hot-toast";

export const Data = ({ rua, bairro, cidade, estado, ddd }: IData) => {
  const handleCopyClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copiado para área de transferência.");
  };
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 items-center justify-between gap-4 mt-3 mb-6 p-2">
      <div className="text-gray-200 font-medium grid">
        <p className="px-2 pb-1">Rua:</p>
        <button
          type="button"
          onClick={() => handleCopyClipboard(rua)}
          className="py-3 md:py-4 rounded-xl px-5 w-80 md:w-full outline-none backdrop-blur-sm overflow-x-auto
          backdrop-brightness-125 ring-primary text-gray-200 bg-transparent transition font-normal duration-300 hover:ring-2"
        >
          {rua}
        </button>
      </div>
      <div className="text-gray-200 font-medium grid">
        <p className="px-2 pb-1">Bairro:</p>
        <button
          type="button"
          onClick={() => handleCopyClipboard(bairro)}
          className="py-3 md:py-4 rounded-xl px-4 w-80 md:w-full outline-none backdrop-blur-sm overflow-x-auto
          backdrop-brightness-125 ring-primary text-gray-200 bg-transparent transition font-normal duration-300 hover:ring-2"
        >
          {bairro}
        </button>
      </div>
      <div className="text-gray-200 font-medium grid">
        <p className="px-2 pb-1">Cidade:</p>
        <button
          type="button"
          onClick={() => handleCopyClipboard(cidade)}
          className="py-3 md:py-4 rounded-xl px-4 w-80 md:w-full outline-none backdrop-blur-sm overflow-x-auto
          backdrop-brightness-125 ring-primary text-gray-200 bg-transparent transition font-normal duration-300 hover:ring-2"
        >
          {cidade}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 col-start-2 text-center">
        <div className="text-gray-200 font-medium grid">
          <p className="px-2 pb-1">Estado:</p>
          <button
            type="button"
            onClick={() => handleCopyClipboard(estado)}
            className="py-3 md:py-4 rounded-xl px-4 w-full outline-none backdrop-blur-sm overflow-x-auto
            backdrop-brightness-125 ring-primary text-gray-200 bg-transparent transition font-normal duration-300 hover:ring-2"
          >
            {estado}
          </button>
        </div>
        <div className="text-gray-200 font-medium grid">
          <p className="px-2 pb-1">DDD:</p>
          <button
            type="button"
            onClick={() => handleCopyClipboard(ddd)}
            className="py-3 md:py-4 rounded-xl px-4 w-full outline-none backdrop-blur-sm overflow-x-auto
            backdrop-brightness-125 ring-primary text-gray-200 bg-transparent transition font-normal duration-300 hover:ring-2"
          >
            {ddd}
          </button>
        </div>
      </div>
    </div>
  );
};
