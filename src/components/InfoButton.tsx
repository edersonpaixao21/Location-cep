import { Popover, Transition } from "@headlessui/react";

export const InfoButton = () => {
  return (
    <Popover className="absolute top-5 right-10 ">
      <Popover.Button
        className="outline-none focus:backdrop-blur-sm focus:backdrop-brightness-150 
        hover:backdrop-blur-sm hover:backdrop-brightness-150 rounded-full transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-9 h-9 rounded-full p-1 outline-none transition cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      </Popover.Button>

      <Transition
        enter="transition transform duration-300"
        enterFrom="opacity-0 scale-0"
        enterTo="opacity-1 scale-100"
        leave="transition transform duration-300"
        leaveFrom="opacity-1 scale-100"
        leaveTo="opacity-0 scale-0"
      >
        <Popover.Panel className="z-10 w-72 absolute backdrop-blur-md backdrop-brightness-125 text-white p-3 rounded-lg right-2">
          <div className="space-y-1 text-right">
            <p>
              Desenvolvido em:
              <span className="text-orange-200 font-semibold ml-1">26/09/2022</span>
            </p>
            <p>
              Ver mais projetos:
              <a
                href="https://github.com/edersonpaixao21"
                target="_blank"
                className="font-semibold text-orange-200 ml-1"
              >
                Portfólio
              </a>
            </p>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
