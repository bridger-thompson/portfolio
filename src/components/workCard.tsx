import Link from "next/link";

interface WorkCardProps {
  title: string;
  link: string;
  date: string;
  details: string[];
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  link,
  date,
  details,
}) => {
  return (
    <div className="items-start w-full max-w-2xl mt-5">
      <div className="text-2xl">{title} - <Link href={link} target="_blank" rel="noreferrer">Snow College</Link></div>
      <div className="text-sm text-gray-300 mt-1 text-start">{date}</div>
      <ul className="list-none ms-5 mt-2 text-gray-200">
        {details.map((d, i) => (
          <li className="flex items-start" key={i}>
            <i className="fas fa-caret-right text-blue-500 mr-3 mt-1"></i>
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkCard;
