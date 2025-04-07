export const ProfileDropdown = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/33bd33de098b36029cead892125122ff84b79cac"
        alt="Profile"
        className="w-11 h-11 rounded-[22px]"
      />
      <div className="flex flex-col">
        <div className="text-[#363636] text-[13px] font-semibold">
          Juan Pérez
        </div>
        <div className="text-[#707082] text-[13px]">Admin</div>
      </div>
      <button className="focus:outline-none">
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="#707082" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
          }}
        />
      </button>
    </div>
  );
};
