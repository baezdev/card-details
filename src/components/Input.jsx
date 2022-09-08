export const Input = ({ label, ...props }) => {
  return (
    <div>
      <label
        className="block mb-1 text-sm font-medium tracking-wider uppercase"
        htmlFor=""
      >
        {label}
      </label>
      <div className="p-px border rounded-lg focus-within:bg-gradient-to-r focus-within: from-violet focus-within:to-violet2">
        <input
          className="w-full p-3 text-lg font-medium rounded-md outline-none placeholder:text-gray-400"
          {...props}
        />
      </div>
    </div>
  );
};
