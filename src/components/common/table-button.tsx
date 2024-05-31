import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const TableButton = ({ children, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "h-9 w-9 md:w-[45px] md:h-[45px] rounded border grid place-content-center hover:bg-gray-50 transition ",
        className
      )}
    >
      {children}
    </button>
  );
};
