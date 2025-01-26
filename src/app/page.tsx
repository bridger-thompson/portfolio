import Link from "next/link";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main>
        <div className="h-screen flex flex-col justify-start items-center pt-48 h-1/2">
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-3xl text-blue-400 animate-slide-down">Hello,</div>
            <div className="text-7xl animate-slide-left">I&apos;m Bridger Thompson</div>
            <div className="text-gray-300 mt-2 animate-slide-up">A full-stack software engineer. Let&apos;s build something amazing.</div>
          </div>

          <div className="flex justify-center space-x-8 py-8 animate-slide-up">
            <Link href={"/#about"} className="px-6 py-2 text-xl rounded-lg hover:bg-blue-900 transition duration-300">
              About Me <i className="ms-1 fa-solid fa-arrow-right-long" />
            </Link>
            <Link href={"/#projects"} className="px-6 py-2 text-xl rounded-lg hover:bg-blue-900 transition duration-300">
              My Projects <i className="ms-1 fa-solid fa-arrow-right-long" />
            </Link>
          </div>
        </div>

        <div className="h-screen bg-gray-900" id="about">
          <div className="flex flex-col justify-center items-center py-24 px-4 sm:px-16">
            <h2 className="text-5xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-300 max-w-3xl text-center">
              I&apos;m a full-stack software engineer with a passion for creating high-quality, scalable solutions. With experience
              in both front-end and back-end development, I specialize in technologies like React, TypeScript, Python, Docker, and
              more. I thrive in dynamic environments and enjoy working on challenging problems to build something impactful.
            </p>
          </div>
        </div>

        <div className="h-screen bg-gray-800" id="projects">
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
