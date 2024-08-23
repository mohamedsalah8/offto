import Center from "./Center";

export default function Title({
  title,
  subTitle,
}: {
  title?: string;
  subTitle?: string;
}) {
  return (
    <Center>
      <div className="flex text-center  w-full mt-[96px] mb-[24px] flex-col gap-[5px] justify-center items-center">
        {title && <h2 className="text-[2rem] font-[500]">{title}</h2>}
        {subTitle && (
          <div className="text-darkColor-400 text-[1.2rem]">{subTitle}</div>
        )}
      </div>
    </Center>
  );
}
