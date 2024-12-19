import { Button } from "@nextui-org/button";

const layout = ({ children }) => {
  return (
    <article className="container mx-auto max-w-screen-lg flex flex-col">
      {children}
    </article>
  );
};

export default layout;
