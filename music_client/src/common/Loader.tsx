const Loader = () => {
  return (
    <div className="absolute z-99999  left-0 right-0 top-0 bottom-0 flex h-full items-center justify-center bg-white/80">
      <div className="h-16 w-16 animate-spin-1.5 rounded-full border-4 border-solid border-primary border-t-primary-300  border-b-primary-300"></div>
    </div>
  );
};

export default Loader;
