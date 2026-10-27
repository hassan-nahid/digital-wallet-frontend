import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface IProps {
  children: ReactNode;
}

const CommonLayouts = ({ children }: IProps) => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-[#F3F6F4]">
      <Navbar />
      <div className="grow w-full">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayouts;