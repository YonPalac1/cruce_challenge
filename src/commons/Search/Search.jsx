import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchResultados } from "../../redux/dataReducer";
import useForm from "../../hooks/useForm";

export const Search = () => {
  const showSearchInput = useSelector((state) => state.data.showSearchInput);
  const [{ keywords }, handleInputChange, reset] = useForm({
    keywords: "",
  });
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (keywords !== "") {
      dispatch(searchResultados(keywords));
      reset();
    }
  };

  return (
    <div
      className={
        showSearchInput === false ? "hidden md:hidden" : "block md:block"
      }
    >
      <div className="p-3 relative max-w-[1024px] mx-auto text-center">
        <label className="relative block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.83336 5.5C10.2655 5.49974 10.6808 5.6673 10.9917 5.96736C11.3027 6.26741 11.4849 6.6765 11.5 7.10834C11.4991 7.3187 11.4559 7.52673 11.3728 7.72001C11.2898 7.91329 11.1687 8.08787 11.0167 8.23334C10.9386 8.31081 10.8766 8.40297 10.8343 8.50452C10.792 8.60607 10.7702 8.71499 10.7702 8.825C10.7702 8.93501 10.792 9.04393 10.8343 9.14548C10.8766 9.24703 10.9386 9.3392 11.0167 9.41667C11.0939 9.49541 11.1859 9.55805 11.2875 9.60096C11.389 9.64388 11.4981 9.66621 11.6084 9.66667C11.8258 9.66798 12.0351 9.58424 12.1917 9.43334C12.5009 9.13027 12.7464 8.76849 12.9138 8.36923C13.0813 7.96997 13.1672 7.54128 13.1667 7.10834C13.1514 6.23443 12.7935 5.40149 12.17 4.78893C11.5465 4.17637 10.7074 3.8332 9.83336 3.83334C9.61235 3.83334 9.40039 3.92113 9.24411 4.07741C9.08783 4.23369 9.00003 4.44566 9.00003 4.66667C9.00003 4.88768 9.08783 5.09964 9.24411 5.25592C9.40039 5.41221 9.61235 5.5 9.83336 5.5Z"
                fill="#8C8C8C"
              />
              <path
                d="M1.50003 16.3333C1.6097 16.334 1.71842 16.3129 1.81995 16.2715C1.92148 16.23 2.01383 16.1689 2.0917 16.0917L5.75003 12.425C6.91402 13.3403 8.3526 13.8365 9.83336 13.8333C11.1519 13.8333 12.4408 13.4423 13.5372 12.7098C14.6335 11.9773 15.488 10.9361 15.9926 9.71789C16.4971 8.49972 16.6292 7.15927 16.3719 5.86607C16.1147 4.57286 15.4798 3.38497 14.5474 2.45262C13.6151 1.52027 12.4272 0.885336 11.134 0.628101C9.84076 0.370866 8.50032 0.502889 7.28214 1.00747C6.06397 1.51206 5.02278 2.36654 4.29023 3.46287C3.55769 4.5592 3.1667 5.84813 3.1667 7.16667C3.16356 8.64743 3.65972 10.086 4.57503 11.25L0.908364 14.9083C0.830257 14.9858 0.768262 15.078 0.725955 15.1795C0.683647 15.2811 0.661865 15.39 0.661865 15.5C0.661865 15.61 0.683647 15.7189 0.725955 15.8205C0.768262 15.922 0.830257 16.0142 0.908364 16.0917C0.986231 16.1689 1.07858 16.23 1.18011 16.2715C1.28164 16.3129 1.39036 16.334 1.50003 16.3333ZM9.83336 2.16667C10.8223 2.16667 11.789 2.45991 12.6112 3.00932C13.4335 3.55873 14.0743 4.33962 14.4528 5.25325C14.8312 6.16688 14.9302 7.17222 14.7373 8.14212C14.5444 9.11203 14.0682 10.0029 13.3689 10.7022C12.6696 11.4015 11.7787 11.8777 10.8088 12.0706C9.83891 12.2635 8.83358 12.1645 7.91995 11.7861C7.00632 11.4076 6.22542 10.7668 5.67602 9.94452C5.12661 9.12227 4.83336 8.15558 4.83336 7.16667C4.83336 5.84059 5.36015 4.56882 6.29783 3.63114C7.23551 2.69345 8.50728 2.16667 9.83336 2.16667Z"
                fill="#8C8C8C"
              />
            </svg>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="¿Qué estas buscando?"
            type="text"
            name="keywords"
            onChange={handleInputChange}
            value={keywords}
          />
        </label>
        <Link
        className="flex justify-center items-center pl-2 border border-slate-300 rounded-md py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm hover:border-sky-500"
        to="/listado-coleccionables" onClick={handleSearch}>
          Buscar
        </Link>
      </div>
    </div>
  );
};
