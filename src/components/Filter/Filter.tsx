import { FC, useState } from "react";
import InputDate from "../UI/InputDate/InputDate";
import Button from "../UI/Button/Button";
import { formatDate } from "../../helpers/Date";
import { useAppDispatch } from "../../redux/store";
import { setFilter } from "../../features/filter/slice";

interface FilterProps {}

const Filter: FC<FilterProps> = () => {
  const [elStartDate, setElStartDate] = useState(formatDate(new Date(), "yyyy-mm-dd"));
  const [elEndDate, setElEndDate] = useState(formatDate(new Date(), "yyyy-mm-dd"));
  const dispatch = useAppDispatch();

  const updateFilterValue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      setFilter({
        startDate: elStartDate,
        endDate: elEndDate,
      })
    );
  };

  const onChangeStartDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setElStartDate(event.target.value);
  };

  const onChangeEndDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setElEndDate(event.target.value);
  };
  return (
    <form className="block" onSubmit={updateFilterValue}>
      <h2 className="text-2xl pb-2 mb-3 border-b border-gray-200">Filter</h2>
      <InputDate
        name="startDate"
        value={elStartDate}
        onChange={onChangeStartDate}
        max={formatDate(new Date(), "yyyy-mm-dd")}
      >
        Start date
      </InputDate>
      <InputDate
        name="endDate"
        value={elEndDate}
        onChange={onChangeEndDate}
        max={formatDate(new Date(), "yyyy-mm-dd")}
      >
        End date
      </InputDate>
      <Button type="submit">Filter</Button>
    </form>
  );
};

export default Filter;
