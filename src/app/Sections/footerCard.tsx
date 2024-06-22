import Image from "next/image";

import { Text } from "@/components/ui/text";

type footerCardProps = {
  icon: string;
  title: string;
  text1: string;
  text2: string;
  text3: string;
};

const FooterCard = (props: footerCardProps) => {
  return (
    <div className="bg-white p-8 flex items-center rounded lg:mx-5 my-5 xl:my-0">
      <div className="p-4 mr-7 rounded-full bg-containerBackground">
        <Image src={props.icon} alt="Mail" width={30} height={30} />
      </div>
      <div>
        <Text className="mb-2" variant="h3">
          {props.title}
        </Text>
        <ul>
          <li>
            <Text variant="body1" color="text-tertiary">
              {props.text1}
            </Text>
          </li>
          <li>
            <Text variant="body1" color="text-tertiary">
              {props.text2}
            </Text>
          </li>
          <li>
            <Text variant="body1" color="text-tertiary">
              {props.text3}
            </Text>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterCard;
