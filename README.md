**QuickCV – AI-Powered Resume Builder**

**Live Demo - – Check out the deployed app on Vercel!**
https://quickcv-woad.vercel.app/
 
**Summary**
QuickCV – An AI-powered resume generator that lets users effortlessly create, edit, and download professional resumes by providing their details and skills. Built with React, Tailwind CSS, and Spring Boot, it integrates Ollama AI (easily swappable with any AI model) and uses Clerk for secure login authentication.

**🧠 What This Project Does**

QuickCV enables users to:

🔐 Register & Login securely via Clerk Authentication
🤖 Generate resumes using AI (Ollama, easily switchable to other LLMs)
📝 Edit and regenerate resume content multiple times
📄 Export ATS-friendly, text-based A4 PDFs
☁️ Store user authentication securely in the cloud
🏗️ Demonstrate a scalable React + Spring Boot full-stack architecture


**Tech Stack**

🎨 Frontend
React (Vite) – Fast and modern frontend framework
Tailwind CSS + DaisyUI – Stylish, responsive UI
React Router – Multi-page navigation
Clerk Authentication – Cloud-based login/register
React-To-Print – Export ATS-friendly PDFs
Additional npm packages: axios, react-icons, react-hot-toast and others

⚙️ Backend
Spring Boot – REST API development
AI prompt processing – Send resume prompts to LLM
Dependency Management – Initial dependencies from Spring Initializr, later extended via Maven repositories

🤖 AI Layer
Ollama Local LLM – Generates resume content( used deepseek-r1:7b model ) 
Easily switchable to OpenAI, Mistral, Claude, or any REST-based LLM

🔐 Authentication
Clerk – Provides login/register modals, session handling, protected routes, and cloud-managed user storage

📸 Screenshots
See the screenshots/ folder for images of the app.
Example pages include:
Home Page
Resume Generation Page
Generated PDF Preview

**🧩 Application Flow**

User
  │
  ▼
Frontend (React + Tailwind + Clerk)
  │
  ├── If not logged in → Clerk Modal Auth
  │
  ▼
Protected Routes (/generate-resume)
  │
  ▼
Backend (Spring Boot)
  │
  ├── Receives prompt
  ├── Processes AI request (Ollama)
  │
  ▼
AI Layer (Ollama or selected LLM)
  │
  ▼
Generated Resume Data (JSON/Text)
  │
  ▼
Rendered Resume (React)
  │
  ▼
Export as ATS-friendly A4 PDF


**🔄 System Architecture Overview**

Frontend
UI rendering & styling
Route protection & session handling via Clerk
Resume preview and PDF export

Backend
Accepts resume prompts via REST API
Sends requests to AI model and formats response
Returns structured JSON resume data

AI Layer
Generates professional resume content
Easily replaceable with any LLM provider

**🛠️ Setup Guide**

🔹 **Prerequisites**

Node.js v18+, npm
Java 21+, Maven
Ollama installed locally
VS Code or any other IDE.
Clerk account (free tier)
Vercel account(to deploy)

**⚛️ Frontend Setup (React + Vite)**

Navigate to frontend folder:
cd QuickCV-frontend

Install dependencies:
npm install

If setting up manually, install these additional packages:
npm install react-router-dom @clerk/clerk-react react-hot-toast react-to-print tailwindcss daisyui axios react-icons

Setup environment variables in .env:
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
VITE_API_BASE_URL=http://localhost:8080

Run frontend locally:
npm run dev

Frontend runs at: http://localhost:5173

**☕ Backend Setup (Spring Boot)**
Navigate to backend folder:
cd QuickCV-backend
Download initial dependencies via Spring Initializr in IntelliJ. Later, add additional dependencies via Maven repositories as needed.

Install project dependencies:
mvn clean install

Configure and run Ollama (or your chosen AI model):
ollama run llama3

Run backend:
mvn spring-boot:run

Backend runs at: http://localhost:8080

**🔐 Clerk Authentication Setup**
Create a free account at Clerk
Create a new application and copy the Publishable Key
Add key to frontend .env
Authentication includes: login/register modal, session handling, protected routes, and displaying user name in navbar.

**📄 PDF Export**
Uses React-To-Print
Generates selectable, ATS-friendly A4 PDFs
Print-safe CSS applied

**🔐 Security Considerations**
Protected routes using Clerk
Resume generation blocked if not authenticated
Backend separated from authentication logic
No passwords stored locally; cloud-managed authentication


**🚀 Future Enhancements**
💳 Subscription Model: Free tier vs Paid tier with unlimited generations and premium AI models
🧠 AI-Based Interview Preparation: Auto-generated interview questions, mock simulations
📊 ATS Scoring System: Keyword optimization, resume scoring
💼 Job Portal Integration: Smart job matching and auto-apply
💬 AI Chat Assistant: Resume improvements & career advice
📧 Automatic Email System: Send resumes directly to recruiters, generate cover letters
📈 Scalability: Database for resume history, role-based access, multi-AI switching, microservices-ready

**👨‍💻 Author**

Rahul Raj
LinkedIn - https://linkedin.com/in/rahulraj201220
