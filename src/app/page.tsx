import EducationCard from "@/components/educationCard";
import WorkCard from "@/components/workCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main>
        <div className="h-screen flex flex-col justify-start items-center pt-48 h-1/2">
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-3xl text-blue-400 animate-slide-down">Hello I&apos;m</div>
            <div className="text-7xl animate-slide-left">Bridger Thompson</div>
            <div className="text-gray-400 mt-2 animate-slide-up">A full-stack software engineer. Let&apos;s build something amazing.</div>
          </div>

          <div className="flex justify-center space-x-8 py-8 animate-slide-up">
            <Link href={"/#about"} className="px-6 py-2 text-xl rounded-lg hover:bg-slate-800 transition duration-300 text-blue-600">
              About Me <i className="ms-1 fa-solid fa-arrow-right-long" />
            </Link>
            <Link href={"/#projects"} className="px-6 py-2 text-xl rounded-lg hover:bg-slate-800 transition duration-300 text-blue-600">
              My Projects <i className="ms-1 fa-solid fa-arrow-right-long" />
            </Link>
          </div>
        </div>

        <div id="about">
          <div className="flex flex-col justify-center items-center px-4 sm:px-16">
            <h2 className="text-5xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-300 max-w-3xl text-center">
              I&apos;m a full-stack software engineer with a passion for creating high-quality, scalable solutions. With experience
              in both front-end and back-end development, I specialize in technologies like React, TypeScript, Python, Docker, and
              more. I thrive in dynamic environments and enjoy working on challenging problems to build something impactful.
            </p>

            <div className="grid grid-cols-2 gap-y-10 mt-20">
              <div className="flex items-center col-span-2 -mb-10">
                <h2 className="text-3xl mr-4">Education</h2>
                <div className="flex-1 border-t border-gray-600"></div>
              </div>
              <EducationCard title={"Western Governors University"}
                link={"https://wgu.edu"}
                date={"March 2025 - August 2025"}
                imageSrc={"/wgu.jpg"}
                details={["MS IT Management"]} />
              <EducationCard title={"Snow College"}
                link={"https://snow.edu"}
                date={"August 2018 - May 2024"}
                imageSrc={"/Snow College.jpg"}
                details={[
                  "Bachelors of Software Engineering",
                  "Web Development Emphasis",
                  "Graduated Valedictorian",
                ]}
                isImageLeft={true} />

              <div className="flex items-center col-span-2 mt-20">
                <h2 className="text-3xl mr-4">Work</h2>
                <div className="flex-1 border-t border-gray-600"></div>
              </div>
            </div>
            <WorkCard title={"Application Programmer Analyst"}
              link={"https://snow.edu"}
              date={"May 2024 - Current"}
              details={[
                "Managed a team of student interns, taking on responsibilities similar to a lead role in project execution and team management.",
                "Spearheaded the development of a state-of-the-art student portal and a comprehensive admissions CRM, transforming the user experience and streamlining workflows.",
                "Led full-stack development using technologies like React, TypeScript, Python, Bootstrap, Oracle, Postgres, Docker, and more to meet both technical and business requirements.",
                "Directed the deployment of applications on a scalable Kubernetes infrastructure.",
                "Supervised the ongoing maintenance and optimization of critical applications, ensuring peak performance, stability, and long-term usability.",
                "Facilitated effective collaboration between technical teams and non-technical stakeholders to ensure successful project delivery and clear communication.",
              ]} />
            <WorkCard title={"Software Development Intern"}
              link={"https://snow.edu"}
              date={"May 2022 - May 2024"}
              details={[
                "Independently contributed to several greenfield projects, showcasing strong problem-solving skills and initiative in taking ownership of new features.",
                "Rewrote and improved several legacy projects, significantly improving the performance and maintainability of key systems.",
                "Played a crucial role in launching a new student portal, from ideation through to deployment, elevating the user experience for thousands of students.",
                "Learned React, TypeScript, Python, Docker, and more while collaborating with senior developers for guidance and mentorship.",
                "Maintained and enhanced multiple applications, troubleshooting issues and continuously improving system reliability and user interface.",
              ]} />
          </div>
        </div>

        <div id="projects">
          <div className="flex flex-col justify-center items-center py-24 px-4 sm:px-16">
            <h2 className="text-5xl font-bold mb-8">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg hover:bg-blue-700">
                <h3 className="text-xl font-bold text-blue-400 mb-2">Project 1</h3>
                <p className="text-gray-300">Description of project 1. Brief overview of what the project does and its key features.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg hover:bg-blue-700">
                <h3 className="text-xl font-bold text-blue-400 mb-2">Project 2</h3>
                <p className="text-gray-300">Description of project 2. Brief overview of what the project does and its key features.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg hover:bg-blue-700">
                <h3 className="text-xl font-bold text-blue-400 mb-2">Project 3</h3>
                <p className="text-gray-300">Description of project 3. Brief overview of what the project does and its key features.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
