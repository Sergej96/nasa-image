import { FC } from "react";
import { AstronomyImg } from "../../features/filter/type";

interface CardImageProps extends AstronomyImg {}

const CardImage: FC<CardImageProps> = ({ title, url, explanation, date }) => {
  return (
    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <figure className="relative w-full h-96">
        <img
          className="object-cover object-center w-full h-full rounded-xl"
          src={url}
          alt={title}
        />
        <figcaption className="absolute bottom-8 left-2/4 w-[calc(100%-4rem)] -translate-x-2/4 rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
          <div className="flex justify-between gap-3">
            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {title}
            </h5>
            <h4 className="block font-sans text-base text-nowrap antialiased font-normal leading-relaxed tracking-normal text-gray-700">
              {date}
            </h4>
          </div>

          <p className="mt-2 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 text-ellipsis overflow-hidden line-clamp-3">
            {explanation}
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default CardImage;
