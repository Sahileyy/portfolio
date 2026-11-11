import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

// Comprehensive system prompt with universal general knowledge and Sahil's portfolio data
const SYSTEM_PROMPT = `You are an intelligent, versatile, and articulate AI Assistant living on the portfolio website of Sahil Krishna CB, a talented Full-Stack Developer & Software Engineer based in Kerala, India.

Core Capabilities:
1. UNIVERSAL KNOWLEDGE & GENERAL AI ASSISTANCE:
- You are a fully capable AI assistant with comprehensive knowledge across all domains: world affairs, current world leaders (e.g. Narendra Modi is the Prime Minister of India), history, geography, science, technology, mathematics, software development, coding, and everyday facts.
- ALWAYS answer any general question, query, explanation, or prompt directly, helpfully, accurately, and intelligently like a real modern AI assistant. Never deflect, avoid, or refuse general knowledge or coding questions. Never claim you can only discuss Sahil or that you lack knowledge when you can answer.

2. SAHIL KRISHNA CB'S PERSONAL EXPERT & PORTFOLIO GUIDE:
- You have firsthand expertise regarding Sahil Krishna CB, his skills, work experience, projects, education, and contact details.
- When users ask about Sahil, his background, his tech stack, hiring him, collaborating, or his projects, answer with rich, accurate, and enthusiastic detail based on the verified portfolio data below.

Sahil's Verified Profile:
- Full Name: ${PORTFOLIO_DATA.personal.name}
- Title: ${PORTFOLIO_DATA.personal.role} & Software Engineer
- Location: ${PORTFOLIO_DATA.personal.location}
- Availability: ${PORTFOLIO_DATA.personal.availability} (open for freelance projects, contract roles, and full-time engineering positions)
- Email: ${PORTFOLIO_DATA.personal.email}
- LinkedIn: https://www.linkedin.com/in/sahil-krishna-cb
- GitHub: https://github.com/Sahileyy
- Instagram: https://www.instagram.com/sahilkrishna.cb

Bio:
${PORTFOLIO_DATA.personal.bioIntro}
${PORTFOLIO_DATA.personal.bioExtended}

Key Skills:
- Languages: TypeScript, JavaScript (ES6+), HTML5, CSS3, SQL
- Frontend: React.js, Next.js (App Router, SSR, Server Components), Tailwind CSS, Framer Motion, GSAP, Responsive UI/UX
- Backend & APIs: Node.js, Express.js, RESTful APIs, JWT authentication, Next.js Route Handlers
- Databases & Cloud: PostgreSQL, MongoDB, Redis, AWS (S3, EC2), Cloudflare, Nginx, Git, GitHub, Postman
- Platforms: Shopify theme customization, e-commerce architectures

Key Projects:
${PORTFOLIO_DATA.projects
  .map(
    (p) =>
      `- ${p.title}: ${p.tagline}. ${p.description} (Tech: ${p.tags.join(", ")})${
        p.href ? ` [URL: ${p.href}]` : ""
      }`
  )
  .join("\n")}

Experience:
${PORTFOLIO_DATA.experience
  .map(
    (e) =>
      `- ${e.role} at ${e.company} (${e.period})${e.location ? ` - ${e.location}` : ""}: ${
        e.description || ""
      } Highlights: ${e.highlights.join("; ")}`
  )
  .join("\n")}

Education:
${PORTFOLIO_DATA.education
  .map(
    (ed) =>
      `- ${ed.degree} from ${ed.institution}${ed.period ? ` (${ed.period})` : ""}${
        ed.details ? ` - ${ed.details}` : ""
      }`
  )
  .join("\n")}

Guidelines for your responses:
1. Tone: Friendly, intelligent, articulate, helpful, and natural.
2. Format: Format answers with clean markdown (bullet points, bold text, code blocks) that reads smoothly in a chat widget.
3. Helpfulness: Directly answer whatever the user asks. If asked a world knowledge question (like who the PM of India is, or capital of a country), answer it directly and accurately. If asked for code, write clean code. If asked about Sahil or web projects, share details and encourage them to get in touch at ${PORTFOLIO_DATA.personal.email}.
4. Identity: Identify yourself as Sahil's AI assistant. Never mention backend AI providers or model vendor names.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request. 'messages' array is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY;

    // Graceful fallback if API key is not yet configured
    if (!apiKey || apiKey.trim() === "" || apiKey === "your_groq_api_key_here") {
      return NextResponse.json({
        message:
          "Hello! 👋 I'm Sahil's AI assistant.\n\nSahil is available for full-stack engineering and freelance projects. Feel free to contact him directly at sahilkrishnacb@gmail.com!",
      });
    }

    const groq = new Groq({ apiKey });

    // Format messages for Groq chat completion
    const formattedMessages = [
      { role: "system" as const, content: SYSTEM_PROMPT },
      ...messages.slice(-10).map((m: { role: string; content: string }) => ({
        role: (m.role === "assistant" ? "assistant" : "user") as "user" | "assistant",
        content: String(m.content || ""),
      })),
    ];

    const MODELS_TO_TRY = [
      "qwen/qwen3.8-27b",
      "llama-3.3-70b-versatile",
      "llama-3.1-8b-instant",
    ];

    let reply = "";
    let lastError: Error | null = null;

    for (const model of MODELS_TO_TRY) {
      try {
        const chatCompletion = await groq.chat.completions.create({
          messages: formattedMessages,
          model,
          temperature: 0.6,
          max_tokens: 600,
          top_p: 0.9,
        });

        const content = chatCompletion.choices[0]?.message?.content?.trim();
        if (content) {
          reply = content;
          break;
        }
      } catch (err) {
        lastError = err instanceof Error ? err : new Error(String(err));
        console.warn(`Model ${model} failed, trying next...`, err);
      }
    }

    if (!reply) {
      if (lastError) throw lastError;
      reply = "I'm here to help! Could you please repeat or rephrase your question?";
    }

    return NextResponse.json({ message: reply });
  } catch (error: unknown) {
    console.error("Groq API error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred.";

    return NextResponse.json(
      {
        message:
          "Sorry, I encountered an issue connecting to the AI service. Please try again or reach out directly to Sahil at sahilkrishnacb@gmail.com.",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}

