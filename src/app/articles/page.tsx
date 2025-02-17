"use client";
import ArticleSection, { Section } from "@/components/articleSection"
import { useState } from "react";

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState("");
  const sections: Section[] = [
    {
      title: "General", articles: [
        {
          title: "7 proven mental models for engineering managers (9 minute read)",
          url: "https://zaidesanton.substack.com/p/mental-models-for-engineering-managers?utm_source=tldrwebdev",
          description: "There are seven mental models - Inversion, Inertia, Second-Order Thinking, Entropy, Hanlon's Razor, Bottlenecks, and Activation Energy - that can help engineering managers make better decisions and avoid costly mistakes."
        },
        {
          title: "Developer philosophy (7 minute read)",
          url: "https://qntm.org/devphilo",
          description: "Some key dev philosophies to follow include the importance of avoiding rewrites by managing technical debt early, the last 10% of a project often takes as much effort as the first 90%, and automating good practices to enforce consistency. Devs also need to account for edge cases, simplify code when possible, and write testable, obviously correct code rather than relying on implicit correctness.",
        },
        {
          title: "Software development topics I've changed my mind on after 10 years in the industry (3 minute read)",
          url: "https://chriskiehl.com/article/thoughts-after-10-years?utm_source=tldrwebdev",
          description: "A software dev reflects on their decade in the industry, revisiting opinions they had written down in the past. For example, contrary to their past beliefs, they now believe that typed languages are essential, that simplicity is not a given, etc.",
        },
        {
          title: "How to write a good design document (7 minute read)",
          url: "https://grantslatton.com/how-to-design-document?utm_source=tldrnewsletter",
          description: "This essay provides tips on how to write, organize, and edit an effective design document. A design document is a technical report that outlines the implementation strategy for a system in the context of tradeoffs and constraints. Its goal should be to convince the reader that the design is optimal given the situation. Writing a design document adds rigor to otherwise vague intuitions - it helps the author think better.",
        },
        {
          title: "You should write \"without bugs\" (6 minute read)",
          url: "https://korshakov.com/posts/no-bugs?utm_source=tldrwebdev",
          description: "There are two common extremes in software development: prioritizing speed over quality and prioritizing perfectionism over shipping. Both approaches lead to slowdowns, high costs, and burnout. Instead, use a \"no bugs\" mindset that focuses on writing clean, robust code from the outset, even if it initially seems slower."
        },
      ]
    },
    {
      title: "Web Dev", articles: [
        {
          title: "React Query - The Bad Parts (1 minute read)",
          url: "https://tkdodo.eu/blog/react-query-the-bad-parts?utm_source=tldrwebdev",
          description: "A slide deck on the tradeoffs made when choosing React Query. It's pretty good."
        },
        {
          title: "https://www.cerbos.dev/blog/statements-about-stateless?utm_source=tldrwebdev",
          url: "https://www.cerbos.dev/blog/statements-about-stateless?utm_source=tldrwebdev",
          description: "The core principles of stateless architecture are independent requests, external state management, idempotency, decoupled components, and horizontal scalability. The advantages of it are better resilience and scalability, while the disadvantages include increased network overhead and having to deal with more complex state management.",
        },
        {
          title: "Error Message Usability (5 minute read)",
          url: "https://www.uxtigers.com/post/heuristic-9-error-messages?utm_source=tldrdesign",
          description: "Jakob Nielsen's ninth usability heuristic emphasizes clear, actionable error messages that help users recognize, diagnose, and recover from issues. Effective design reduces frustration, saves time, and builds trust. Good error messages use plain language, specify problems, and offer solutions, ensuring users stay informed and engaged rather than confused or frustrated."
        },
        {
          title: "JavaScript Temporal is coming (5 minute read)",
          url: "https://developer.mozilla.org/en-US/blog/javascript-temporal-is-coming/?utm_source=tldrwebdev",
          description: "The Temporal API is a new JavaScript feature designed to replace the existing Date object. It addresses the limitations of the Date object, such as poor time zone support and unreliable parsing, by providing immutable objects, built-in time zone handling, and support for various calendar systems."
        },
        {
          title: "React Scan (GitHub Repo)",
          url: "https://github.com/aidenybai/react-scan?utm_source=tldrwebdev",
          description: "React Scan is a tool that automatically detects and highlights performance issues in React applications. Unlike other tools, it requires minimal code changes and provides clear visual cues to pinpoint problematic components."
        },
      ]
    },
    {
      title: "Design", articles: [
        {
          title: "Struggling With Colors? Learn Stunning Color Combos for Graphic Design (6 minute read)",
          url: "https://weandthecolor.com/struggling-with-colors-learn-stunning-color-combos-for-graphic-design/195085?utm_source=tldrdesign",
          description: "Combining colors in graphic design involves understanding the color wheel, relationships, and meanings."
        },
        {
          title: "Which Icons to NOT Use in 2025 (4 minute read)",
          url: "https://blog.logrocket.com/ux-design/iconography-ux-2025/?utm_source=tldrdesign",
          description: "Icons must evolve to stay relevant. Obsolete designs like floppy discs, mail envelopes, and landline phones no longer resonate with modern users. Replacing these with intuitive, updated icons aligns with user expectations and technological advancements. Balancing innovation with familiarity ensures smoother transitions, helping UX designers cater to diverse audiences without sacrificing usability."
        },
      ]
    },
    {
      title: "AI", articles: [
        {
          title: "Deep Dive into LLMs (3 hour video)",
          url: "https://www.youtube.com/watch?v=7xTGNNLPyMI",
          description: "Andrej Karpathy has released an educational video that dives deep into many aspects of developing language models that covers pre-training, hallucination mitigation, and post training."
        },
        {
          title: "Beyond the AI MVP: What it really takes (7 minute read)",
          url: "https://blog.lawrencejones.dev/ai-mvp/?utm_source=tldrwebdev",
          description: "Most AI companies are stuck in the experimental phase and lack proper eval tools to measure and improve model performance. The “AI MVP trap” misleads teams into thinking an impressive prototype is nearly complete, when in reality, building a good AI product requires extensive eval suites and automated testing."
        },
        {
          title: "How to have a career even when OpenAI's o3 drops (15 minute read)",
          url: "https://pradyuprasad.com/writings/how-to-have-a-career-even-when-o3-drops/?utm_source=tldrnewsletter",
          description: "There is a real anxiety among students and junior professionals regarding AI and its effects on their careers. The future will belong to people whose work cannot be easily reduced to a dataset and those who can use AI to become even better at what they do. Some jobs are currently vulnerable because we can create clear benchmarks for performance. AI will amplify the gap between high performers and the rest."
        },
        {
          title: "Two Programming-with-AI Approaches (4 minute read)",
          url: "https://everything.intellectronica.net/p/two-programming-with-ai-approaches?utm_source=tldrwebdev",
          description: "There are two distinct, largely incompatible approaches for AI-assisted programming: dialog programming, where AI aids human coding, and commanding an AI to program autonomously."
        },
        {
          title: "My Afternoon Project Turned Into Four Days of AI Lies, USB Chaos, and Hard Lessons (12 minute read)",
          url: "https://nemo.foo/blog/day-4-of-an-afternoon-project?utm_source=tldrwebdev",
          description: "A developer initially planned a side project for an afternoon. However, it stretched into four days due to unreliable AI assistance and USB communication issues. Their reliance on AI for coding led to a buggy and unmaintainable codebase.",
        },
        {
          title: "Introducing Operator research preview (10 minute read)",
          url: "https://openai.com/index/introducing-operator/?utm_source=tldrwebdev",
          description: "OpenAI has released Operator, a research preview of an AI agent that uses a browser to complete web-based tasks for users. Powered by a new model called CUA, Operator can interact with websites by typing, clicking, and scrolling, handling tasks like filling out forms or booking travel."
        },
        {
          title: "7 Lessons from building a small-scale AI application (8 minute read)",
          url: "https://www.thelis.org/blog/lessons-from-ai?utm_source=tldrwebdev",
          description: "This developer built a small-scale AI assistant to learn about AI application development. He found that high-quality data and robust evaluation methods were more important than he first thought. Also, the training pipeline, not the model itself, represents core intellectual property."
        },
      ]
    }
  ]



  const filteredSections = sections.map((section) => ({
    ...section,
    articles: section.articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.articles.length > 0);
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <h2 className="text-3xl text-center">Articles</h2>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-4">
          <div className="font-extralight text-center">This page is a collection of articles I have found valuable on topics like software development, design, and AI. I saved them as a reference for key insights, best practices, and evolving industry trends. It also reflects the kind of content that influences my work and thinking as a developer.</div>
        </div>
      </div>
      <div className="flex justify-center my-4 gap-3">
        <label htmlFor="search" className="my-auto">Search:</label>
        <input
          type="text"
          id="search"
          placeholder="title, description"
          autoFocus
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded w-2/5 bg-transparent"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-start-2 col-span-2">
          {filteredSections.map(s => (
            <ArticleSection section={s} key={s.title} />
          ))}
        </div>
      </div>
    </div>
  )
}