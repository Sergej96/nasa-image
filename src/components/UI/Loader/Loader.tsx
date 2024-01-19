import { FC } from "react";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  return (
    <div className="fixed top-0 left-0 h-dvh w-dvw z-10 bg-white bg-opacity-50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-blue-500">
        <div
          className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
