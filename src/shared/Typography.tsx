interface HeadingProps {
  styles?: string;
  title: string;
  style?: object;
}
export const Heading2: React.FC<HeadingProps> = ({
  styles,
  title,
  style,
  ...props
}) => {
  return (
    <h2
      className={`${styles} text-[16px] md:text-[20px] text-black dark:text-white font-normal underline`}
      style={style}
      {...props}
    >
      {" "}
      {title}
    </h2>
  );
};

export const PLarge = ({ children, styles }: any) => {
  return (
    <p
      className={`${styles} text-[14px] sm:text-[18px] leading-[20px] sm:leading-[27px] text-black dark:text-white`}
    >
      {" "}
      {children}
    </p>
  );
};

export const ListItem = ({ children, styles }: any) => {
  return (
    <li
      className={`text-[14px]  sm:text-[16.8px] leading-[20px] sm:leading-[25.2px] text-black dark:text-white  flex gap-[10px] items-center ${styles}`}
    >
      <span className="w-[7px] h-[7px] rounded-full bg-black dark:bg-white"></span>{" "}
      {children}
    </li>
  );
};
const Typrography = {
  H2: Heading2,
  PLarge,
  ListItem,
};
export default Typrography;
