import { InfoButton } from "./InfoButton";

export const Hero = () => {
  return (
    <div className="container relative mx-auto text-center text-white pt-8 2xl:pt-14 ">
      <InfoButton />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 md:w-14 md:h-14 mx-auto"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>

      <h1 className="text-4xl md:text-5xl font-medium tracking-wider pt-4 uppercase">
        Localizador
      </h1>
      <h2 className="text-4xl md:text-5xl font-Allenia tracking-widest uppercase">
        de CEP
      </h2>
    </div>
  );
};
