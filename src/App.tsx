import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "./redux/store";
import Loader from "./components/UI/Loader/Loader";

import { selectStateFilter } from "./features/filter/selectors";
import { DateArgs, Status } from "./features/filter/type";
import { fetchAstronomyImg } from "./features/filter/slice";
import Filter from "./components/Filter/Filter";
import CardImage from "./components/CardImage/CardImage";

function App() {
  const dispatch = useAppDispatch();
  const { startDate, endDate, status, items, error } = useSelector(selectStateFilter);
  const getAstronomyImg = useCallback(async (options: DateArgs) => {
    dispatch(fetchAstronomyImg(options));
  }, []);

  useEffect(() => {
    getAstronomyImg({
      startDate: startDate,
      endDate: endDate,
    });
  }, [startDate, endDate]);

  return (
    <div className="bg-white">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Astronomy Picture of the Day
          </h1>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <div className="grid gap-x-8 gap-y-10 grid-cols-4">
            <Filter />

            <div className="col-span-3">
              {status === Status.ERROR ? (
                <div className="text-center">
                  <h3 className="text-2xl mb-4">Error</h3>
                  <p className="text-gray-600">{error?.message}</p>
                </div>
              ) : (
                <div>
                  {status === Status.LOADING ? (
                    <Loader />
                  ) : (
                    <div className="grid">
                      {items.map((item) => (
                        <CardImage key={item.title} {...item} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
