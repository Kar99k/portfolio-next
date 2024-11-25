import Link from "next/link";

import SectionTemplate from "../templates/SectionTemplate";

const Contact = () => {
  return (
    <SectionTemplate>
      <div>Lets Connect</div>
      <div className="">
        <div className="text-gray-8 max-w-screen-md">
          If you&#39;d like to talk about a potential project or just say hi !,{" "}
          <br />
          send me a email at{" "}
          <Link
            className="text-orange-10"
            href="mailto:vkarthikeyan1@outlook.com"
            target="_blank"
          >
            vkarthikeyan1@outlook.com
          </Link>
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Contact;
