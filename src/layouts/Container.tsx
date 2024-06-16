interface ConatinerProps {
  children: React.ReactNode; // Accepts any valid React child
}

const Container: React.FC<ConatinerProps> = ({ children }) => {
  return (
    <section className="w-full flex justify-center px-3 md:px-6 " >
      <div className="max-w-[1400px]  w-full">{children}</div>
    </section>
  );
};
export default Container;
