interface ButtonProps {
  styles?: string;
  label: string;
  style?: object;
}
export const CommentButton: React.FC<ButtonProps> = ({
  styles,
  label,
  style,
  ...props
}) => {
  return (
    <button
      type="submit"
      {...props}
      className={` rounded-[30px]   bg-black  text-white   text-[14px]  sm:text-[16px] leading-[24.48px] tracking-[2px] hover:bg-[#8bc34a] transition-all ${styles}`}
      style={style}
    >
      {label}
    </button>
  );
};
