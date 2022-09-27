import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { Data } from "./Data";
import InputMask from "react-input-mask";
import { Transition } from "@headlessui/react";

export const Form = () => {
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [ddd, setDdd] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  // Tirando o traço e underline do CEP e retornando somente números
  const onlyNumberCEP = cep.replace(/-|_/g, "");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Caso não esteja preenchido
    if (!onlyNumberCEP) {
      toast.error("Por favor preencha o campo!");
    } else {
      // Caso não tenha preenchido os 8 números
      if (onlyNumberCEP.length !== 8) {
        toast.error("CEP Inválido");
      } else {
        getAdress(+onlyNumberCEP);
      }
    }
  };

  const getAdress = async (cep: number) => {
    setLoading(true);

    const apiURL = `https://viacep.com.br/ws/${cep}/json`;

    const res = await fetch(apiURL);
    
    // data neste caso é um objeto com todas as informações da API
    const data = await res.json();

    setRua(data.logradouro);
    setBairro(data.bairro);
    setCidade(data.localidade);
    setEstado(data.uf);
    setDdd(data.ddd);

    // Caso não exista o CEP
    if (data.erro) {
      toast.error("CEP informado não encontrado.");
      setError(true);
    } else {
      setError(false);
    }

    setLoading(false);
  };

  return (
    <form
      className="mt-8 md:mt-14 mx-auto container flex flex-col justify-center items-center"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="relative w-3/4 md:w-2/5">
        <InputMask
          mask="99999-999"
          className="py-4 md:py-4 w-full rounded-xl px-6 outline-none backdrop-blur-sm backdrop-brightness-125 placeholder:text-gray-300
          hover:ring-2 focus:ring-4 ring-primary text-white bg-transparent transition duration-300"
          placeholder="Digite um CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />

        <Transition
          show={onlyNumberCEP != ""}
          enter="transition transform duration-500"
          enterFrom="opacity-0 scale-0"
          enterTo="opacity-1 scale-100"
          leave="transition transform duration-300"
          leaveFrom="opacity-1 scale-100"
          leaveTo="opacity-0 scale-0"
          className="absolute right-6 top-0 h-full flex outline-none"
        >
          <button type="reset" onClick={() => setCep("")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 md:w-9 md:h-9 text-gray-100 bg-primary/50 rounded-full p-1 hover:ring-2 transition ring-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </Transition>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`mt-4 2xl:mt-8 py-4 px-8 2xl:px-14 backdrop-blur-sm outline-none focus:ring-2 ring-primary 
        flex gap-2 items-center backdrop-brightness-125 hover:bg-white/5 text-white rounded-xl transition disabled:cursor-not-allowed disabled:backdrop-brightness-105 disabled:text-gray-200`}
      >
        {loading ? (
          <svg
            className="animate-spin w-6 h-6 "
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4"
              stroke="rgb(229 231 235)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        )}
        <p>{loading ? "Procurando" : "Procurar"}</p>
      </button>

      <Transition
        show={error == false}
        enter="transition transform duration-500"
        enterFrom="opacity-0 -translate-y-10"
        enterTo="opacity-1 translate-x-0"
        leave="transition transform duration-500"
        leaveFrom="opacity-1 translate-y-0"
        leaveTo="opacity-0 -translate-y-10"
        className="border-t border-gray-200/50 mt-8"
      >
        <Data
          rua={rua}
          bairro={bairro}
          cidade={cidade}
          estado={estado}
          ddd={ddd}
        />
      </Transition>
    </form>
  );
};
