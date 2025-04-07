export const SearchBar = () => {
  return (
    <div className="flex items-center border h-[38px] w-[238px] px-2 py-0 rounded-md border-solid border-[#E1E6E8]">
      <div className="w-8 h-8 flex items-center justify-center">
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.20078 15.6C12.7354 15.6 15.6008 12.7347 15.6008 9.20005C15.6008 5.66543 12.7354 2.80005 9.20078 2.80005C5.66616 2.80005 2.80078 5.66543 2.80078 9.20005C2.80078 12.7347 5.66616 15.6 9.20078 15.6Z" stroke="#707082" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.2007 17.2L13.7207 13.72" stroke="#707082" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
          }}
        />
      </div>
      <div className="w-px h-6 bg-[#E1E6E8] mx-2 my-0" />
      <input
        type="text"
        placeholder="Buscar"
        className="text-[#707082] text-xs bg-transparent border-none outline-none flex-1"
      />
    </div>
  );
};
