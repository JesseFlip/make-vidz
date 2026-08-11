import React, { useState, useEffect } from 'react';

// Reusable SVG Icons for a self-contained, sleek UI
const Icons = {
  Play: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>,
  Copy: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>,
  Check: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>,
  ChevronRight: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>,
  ChevronLeft: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>,
  Wand: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>,
  Music: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>,
  Video: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"></path><rect x="2" y="6" width="14" height="12" rx="2" ry="2"></rect></svg>,
  Scissors: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>,
  Upload: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>,
  ExternalLink: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>,
  Sparkles: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
};

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [topic, setTopic] = useState("Running to the lobby for free burritos");
  const [vibe, setVibe] = useState("High-stakes anime battle, suspenseful thriller");
  const [copied, setCopied] = useState(false);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const generatePrompt = () => {
    return `Act as an expert anime director and viral short-form video creator. I want to create a highly dramatic, short anime-style POV skit for TikTok/Reels/Shorts.

Topic: ${topic}
Vibe: ${vibe}

Please do the following:

PART 1: THE SCRIPT
Write a fast-paced script including on-screen text, sound effects, music cues, and Voiceover (VO) lines.

PART 2: GENERATE THE VIDEO
Using your built-in video generation tool, please generate the actual video for this skit based on the script. Apply a high-quality, cinematic style that perfectly matches the "${vibe}" vibe. Include dynamic camera movements, striking lighting, and expressive character actions to bring the concept to life!`;
  };

  const handleCopy = () => {
    const text = generatePrompt();
    // Using execCommand as a robust fallback for iFrame environments
    const textArea = document.createElement("textarea");
    textArea.value = text;
    // Move outside the screen to make it invisible
    textArea.style.position = "absolute";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
      markStepComplete(1); // Auto-complete prompt step when copied
    } catch (err) {
      console.error('Copy failed', err);
    }
    document.body.removeChild(textArea);
  };

  const markStepComplete = (stepIndex) => {
    setCompletedSteps(prev => {
      const newSet = new Set(prev);
      newSet.add(stepIndex);
      return newSet;
    });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const steps = [
    {
      title: "The Setup",
      icon: <Icons.Wand />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-300">Welcome to the AI Studio Walkthrough. First, let's define the concept for your video so we can generate your custom Director's Blueprint.</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-purple-400 mb-1">What is the video about? (Topic)</label>
              <input 
                type="text" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                placeholder="e.g., Running to the lobby for free burritos"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-400 mb-1">What is the cinematic style? (Vibe)</label>
              <input 
                type="text" 
                value={vibe}
                onChange={(e) => setVibe(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                placeholder="e.g., High-stakes anime battle, suspenseful thriller"
              />
            </div>
          </div>
          <button 
            onClick={() => { markStepComplete(0); nextStep(); }}
            className="w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-purple-900/20 flex items-center justify-center gap-2 transition-all"
          >
            Generate My Blueprint <Icons.Play />
          </button>
        </div>
      )
    },
    {
      title: "The Blueprint",
      icon: <Icons.Copy />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Here is your tailored Mega-Prompt. Copy this text—it contains everything Gemini needs to construct your video from scratch.</p>
          
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-900 border border-slate-700 rounded-lg p-4 h-64 overflow-y-auto font-mono text-sm text-slate-300">
              <pre className="whitespace-pre-wrap">{generatePrompt()}</pre>
            </div>
          </div>

          <button 
            onClick={handleCopy}
            className={`w-full py-3 px-6 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
              copied 
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500' 
                : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
            }`}
          >
            {copied ? <><Icons.Check /> Copied to Clipboard!</> : <><Icons.Copy /> Copy Prompt to Clipboard</>}
          </button>
        </div>
      )
    },
    {
      title: "Open Gemini",
      icon: <Icons.ExternalLink />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-300">Now that you have your prompt copied, it's time to head over to Gemini to start the generation process.</p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="text-white font-medium mb-1">Navigate to Gemini</h4>
                <p className="text-sm text-slate-400">Open a new browser tab and go to <a href="https://gemini.google.com" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 underline">gemini.google.com</a>. Sign in with your Google or Gmail account.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="text-white font-medium mb-1">Paste Your Prompt</h4>
                <p className="text-sm text-slate-400">Paste the Blueprint you copied in the previous step directly into the main chat box.</p>
              </div>
            </div>
            
            <div className="p-3 bg-amber-900/20 border border-amber-500/30 rounded-lg text-sm text-amber-200 flex items-center gap-3">
              <span className="text-xl">⚠️</span> 
              <strong>Important:</strong> Do not hit the send/submit button just yet! Move on to the next step first.
            </div>
          </div>
          
          <label className="flex items-center gap-3 p-4 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors mt-4">
            <input 
              type="checkbox" 
              checked={completedSteps.has(2)}
              onChange={() => markStepComplete(2)}
              className="w-5 h-5 rounded border-slate-600 text-purple-600 focus:ring-purple-500 bg-slate-900"
            />
            <span className="text-white font-medium">I have pasted the prompt into Gemini</span>
          </label>
        </div>
      )
    },
    {
      title: "Generate Video",
      icon: <Icons.Sparkles />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-300">Before sending your prompt, you need to tell Gemini to process it using the video generation tool.</p>
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 shadow-inner">
            <ol className="space-y-6 relative border-l border-slate-700 ml-3">
              <li className="pl-6 relative">
                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                <h4 className="text-white font-bold text-lg mb-1">Click the Plus Symbol</h4>
                <p className="text-sm text-slate-400">Look down at the bottom of the chat interface, right next to where you pasted your text. Click the <strong>(+)</strong> symbol to open the attachments and tools menu.</p>
              </li>
              
              <li className="pl-6 relative">
                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                <h4 className="text-white font-bold text-lg mb-1">Add the Video Tool</h4>
                <p className="text-sm text-slate-400">From the menu that appears, select the <strong>"Generate a video"</strong> button to attach the video creation capability to your prompt.</p>
              </li>
              
              <li className="pl-6 relative">
                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                <h4 className="text-white font-bold text-lg mb-1">Hit Send!</h4>
                <p className="text-sm text-slate-400">Now, hit the <strong>Send/Submit</strong> button. Gemini will read your detailed blueprint and automatically generate your custom video from scratch.</p>
              </li>
            </ol>
          </div>

          <div className="text-center py-4">
            {completedSteps.size >= 3 ? (
              <div className="p-4 bg-emerald-900/30 border border-emerald-500/50 rounded-xl inline-block">
                <span className="text-emerald-400 font-bold flex items-center gap-2">
                  <Icons.Check /> All Steps Completed! Enjoy your video.
                </span>
              </div>
            ) : (
              <button 
                onClick={() => markStepComplete(3)}
                className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-purple-900/20 transition-all flex items-center justify-center gap-2 mx-auto"
              >
                <Icons.Check /> Mark Complete
              </button>
            )}
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans p-4 md:p-8 flex justify-center">
      <div className="max-w-3xl w-full">
        
        {/* Header */}
        <header className="mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 tracking-tight mb-2">
            AI Anime Studio
          </h1>
          <p className="text-slate-400">Your interactive guide to producing viral AI short films.</p>
        </header>

        {/* Progress Bar / Stepper */}
        <div className="mb-8">
          <div className="flex justify-between items-center relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                onClick={() => setCurrentStep(idx)}
                className={`flex flex-col items-center cursor-pointer transition-all ${currentStep === idx ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 shadow-lg transition-all ${
                  completedSteps.has(idx) 
                    ? 'bg-emerald-500 text-white' 
                    : currentStep === idx 
                      ? 'bg-purple-600 text-white ring-4 ring-purple-900/50' 
                      : 'bg-slate-800 text-slate-400'
                }`}>
                  {completedSteps.has(idx) ? <Icons.Check /> : step.icon}
                </div>
                <span className="text-xs font-semibold hidden md:block">{step.title}</span>
              </div>
            ))}
            {/* Connecting line */}
            <div className="absolute top-5 left-0 w-full h-1 bg-slate-800 -z-10 transform -translate-y-1/2">
               <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300"
                  style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
               ></div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/80 rounded-2xl p-6 md:p-8 shadow-2xl min-h-[400px] flex flex-col">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="p-2 bg-slate-800 rounded-lg text-purple-400">{steps[currentStep].icon}</span>
            {steps[currentStep].title}
          </h2>
          
          <div className="flex-grow">
            {steps[currentStep].content}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-10 pt-6 border-t border-slate-800">
            <button 
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                currentStep === 0 ? 'opacity-0 cursor-default' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              <Icons.ChevronLeft /> Back
            </button>
            
            <span className="text-slate-500 text-sm font-medium">
              Step {currentStep + 1} of {steps.length}
            </span>

            <button 
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                currentStep === steps.length - 1 
                  ? 'opacity-0 cursor-default' 
                  : 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/20'
              }`}
            >
              Next <Icons.ChevronRight />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}