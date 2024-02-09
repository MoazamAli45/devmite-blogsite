import { MdKeyboardArrowDown } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
interface inputProps {
  styles?: string;
  style?: object;
  type?: string;
  label: string;
  rows?: number;
  cols?: number;
}

export const InputGroup: React.FC<inputProps> = ({
  styles,
  style,
  type = "text",
  label,
}) => {
  return (
    <div className={`flex flex-col gap-3 ${styles}`} style={style}>
      <label className="text-gray text-[14.4px] font-normal">{label}</label>
      <input
        type={type}
        className="border-x-none border-t-none bg-[#F5F5F5] dark:bg-black  rounded-[30px] border-b-[1px] border-solid border-[#ccc] py-[10px] px-[20px] text-[14.4px] leading-[24.48px]  focus:outline-none"
        style={{
          border: "1px solid #ccc",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        required
      />
    </div>
  );
};

export const InputArea: React.FC<inputProps> = ({
  styles,
  style,
  type = "text",
  rows = 10,
  cols = 30,
  label,
}) => {
  return (
    <div className={`flex flex-col gap-3 ${styles}`} style={style}>
      <label className="text-gray text-[14.4px] font-normal">{label}</label>
      <textarea
        className="border-x-none border-t-none bg-[#F5F5F5] dark:bg-black  rounded-[30px] border-b-[2px] border-solid border-[#ccc] py-[10px] px-[20px] text-[14.4px] leading-[24.48px]  focus:outline-none "
        rows={rows}
        cols={cols}
        style={{
          border: "1px solid #ccc",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        required
      ></textarea>
    </div>
  );
};

export const InputCheckbox = ({ label, id, name, value }: any) => {
  return (
    <div className="flex items-center gap-[10px]">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        className="h-[20px] w-[20px] bg-white accent-black dark:accent-white border-none outline-none focus:outline-none rounded-lg"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        required
      />
      <label htmlFor={id} className="text-gray text-[14.4px] font-normal">
        {" "}
        {label}
      </label>
    </div>
  );
};

export const SelectBox = ({
  styles,
  style,
  label,
  option1,
  option2,
  option3,
}: any) => {
  return (
    <div className={`flex flex-col gap-3 relative ${styles}`} style={style}>
      <label className="text-gray text-[14.4px] font-normal">{label}</label>

      <div className="relative inline-block">
        <select
          className=" w-full border-x-none border-t-none bg-[#F5F5F5] dark:bg-black rounded-[30px] border-b-[1px] border-solid border-[#ccc] py-[10px] px-[20px] text-[14.4px] leading-[24.48px] focus:outline-none appearance-none"
          style={{
            border: "1px solid #ccc",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          required
        >
          <option value="option1">{option1}</option>
          <option value="option2">{option2}</option>
          <option value="option3">{option3}</option>
        </select>
        <RiArrowDownSLine className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );
};
