type RepTC = {
  title: string;
  children: React.ReactElement | React.ReactNode;
};

const Action = ({ title, children }: RepTC) => {
  return (
    <div>
      <h1>{title}</h1>
      <div
        style={{
          display: "flex",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Action;
