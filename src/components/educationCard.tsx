import Image from "next/image";
import Link from "next/link";

interface EducationCardProps {
  title: string;
  link: string;
  date: string;
  imageSrc: string;
  details: string[];
  isImageLeft?: boolean;
}

const EducationCard: React.FC<EducationCardProps> = ({
  title,
  link,
  date,
  imageSrc,
  details,
  isImageLeft = false
}) => {
  if (isImageLeft) return (
    <>
      <div className="relative flex justify-center items-center">
        <Image alt={title} src={imageSrc} width={350} height={100} className="rounded-lg" />
      </div>
      <div className="relative flex flex-col justify-center">
        <Link href={link} target="_blank" rel="noreferrer" className="z-10">
          <div className="bg-slate-800/80 text-white p-4 rounded-lg shadow-lg -ml-16 z-10 hover:scale-105 hover:shadow-[0_0_15px] hover:shadow-blue-800 transition">
            <div className="text-2xl font-semibold border-b-2 border-blue-500">{title}</div>
            <div className="text-sm text-gray-300 mt-1">{date}</div>
            <ul className="list-disc ms-5 mt-2 text-gray-200">
              {details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </Link>
      </div>
    </>
  )
  return (
    <>
      <div className="relative flex flex-col justify-center">
        <Link href={link} target="_blank" rel="noreferrer" className="z-10">
          <div className="bg-slate-800/80 text-white p-4 rounded-lg shadow-lg -mr-16 z-10 hover:scale-105 hover:shadow-[0_0_15px] hover:shadow-blue-800 transition">
            <div className="text-2xl font-semibold border-b-2 border-blue-500">{title}</div >
            <div className="text-sm text-gray-300 mt-1">{date}</div>
            <ul className="list-disc ms-5 mt-2 text-gray-200">
              {details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div >
        </Link >
      </div >
      <div className="relative flex justify-center items-center">
        <Image alt={title} src={imageSrc} width={250} height={100} className="rounded-lg" />
      </div>
    </>
  );
};

export default EducationCard;
