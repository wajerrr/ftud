import { parseISO, format } from 'date-fns';
type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>{format(date, "EEEE BBBBB, do 'of' MMMM y")}</time>
  );
};

export default DateFormatter;
