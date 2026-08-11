// Static, at-a-glance version of the workflow. This is the landing page; the
// step-by-step interactive version lives behind the "#walkthrough" hash.

const VideoIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 8-6 4 6 4V8Z" />
    <rect x="2" y="6" width="14" height="12" rx="2" ry="2" />
  </svg>
);

// Subtle crosshatch behind the header, drawn in CSS so the page pulls no
// third-party image at render time.
const headerTexture = {
  backgroundImage:
    'repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0 1px, transparent 1px 14px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.5) 0 1px, transparent 1px 14px)',
};

const pageBackground = {
  backgroundImage:
    'radial-gradient(circle at 50% 0%, #3b0764 0%, transparent 50%), radial-gradient(circle at 100% 100%, #1e1b4b 0%, transparent 50%)',
};

export default function Infographic() {
  return (
    <div className="min-h-screen bg-[#0f172a] py-12 px-4 sm:px-8 text-slate-200 antialiased" style={pageBackground}>
      <main className="max-w-3xl mx-auto bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-[2rem] shadow-2xl overflow-hidden relative">

        {/* Header */}
        <header className="bg-gradient-to-br from-purple-900 to-indigo-900 p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={headerTexture} />
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20 shadow-[0_0_20px_rgba(168,85,247,0.4)] text-purple-400">
              <VideoIcon size={32} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-200 tracking-tight mb-4">
              The 4-Step Viral<br />AI Video Blueprint
            </h1>
            <p className="text-indigo-200 text-lg max-w-xl mx-auto font-medium">
              A visual guide to directing and generating cinematic short-form content natively using Google Gemini.
            </p>
          </div>
        </header>

        <div className="p-8 sm:p-12 relative">
          {/* Vertical connecting line running through the four step nodes */}
          <div className="absolute left-[39px] sm:left-[63px] top-12 bottom-12 w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-emerald-500 rounded-full opacity-50" />

          {/* Step 1 */}
          <section className="relative pl-16 sm:pl-24 mb-16">
            <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-slate-900 border-4 border-purple-500 flex items-center justify-center text-purple-400 font-bold text-xl shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10">
              1
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">Define Your Concept</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Before generating, you need a strong hook and a distinct visual style.
            </p>

            <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-700 space-y-4">
              <div>
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">The Topic (What happens?)</span>
                <div className="mt-1 bg-slate-800 p-3 rounded-lg text-slate-200 border-l-4 border-purple-500">
                  "Running to the lobby for free burritos"
                </div>
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">The Vibe (How does it look/feel?)</span>
                <div className="mt-1 bg-slate-800 p-3 rounded-lg text-slate-200 border-l-4 border-indigo-500">
                  "High-stakes anime battle, suspenseful thriller"
                </div>
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section className="relative pl-16 sm:pl-24 mb-16">
            <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-slate-900 border-4 border-indigo-500 flex items-center justify-center text-indigo-400 font-bold text-xl shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10">
              2
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">Copy The Blueprint</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Combine your Topic and Vibe into this exact "Mega-Prompt" template.
            </p>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-25" />
              <div className="relative bg-[#0d1117] rounded-xl border border-slate-700 p-5 overflow-hidden">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs text-slate-500 ml-2 font-mono">prompt.txt</span>
                </div>
                <pre className="font-mono text-xs sm:text-sm text-indigo-100 whitespace-pre-wrap leading-relaxed">
                  <span className="text-purple-400">Act as an expert anime director</span>
                  {' and viral short-form video creator. I want to create a highly dramatic, short anime-style POV skit for TikTok/Reels/Shorts.\n\n'}
                  <span className="text-emerald-400">Topic:</span>
                  {' Running to the lobby for free burritos\n'}
                  <span className="text-emerald-400">Vibe:</span>
                  {' High-stakes anime battle, suspenseful thriller\n\nPlease do the following:\n\n'}
                  <span className="text-yellow-400 font-bold">PART 1: THE SCRIPT</span>
                  {'\nWrite a fast-paced script including on-screen text, sound effects, music cues, and Voiceover (VO) lines.\n\n'}
                  <span className="text-yellow-400 font-bold">PART 2: GENERATE THE VIDEO</span>
                  {'\nUsing your built-in video generation tool, please generate the actual video for this skit based on the script. Apply a high-quality, cinematic style that perfectly matches the vibe. Include dynamic camera movements, striking lighting, and expressive character actions to bring the concept to life!'}
                </pre>
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section className="relative pl-16 sm:pl-24 mb-16">
            <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-slate-900 border-4 border-blue-500 flex items-center justify-center text-blue-400 font-bold text-xl shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10">
              3
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">Navigate &amp; Paste</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">Head to Gemini, sign in, and paste your Blueprint.</p>

            {/* Mock browser */}
            <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-lg">
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-4 border-b border-slate-700">
                <div className="flex gap-2">
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
                <div className="bg-slate-900 rounded-full flex-1 px-4 py-1.5 flex items-center gap-2 text-sm">
                  <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                  <span className="text-slate-300">gemini.google.com</span>
                </div>
              </div>
              <div className="p-6">
                <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700 text-sm text-slate-300 font-mono shadow-inner">
                  <span className="animate-pulse">|</span> Act as an expert anime director and viral short-form...
                </div>

                <div className="mt-4 bg-amber-950/40 border border-amber-600/50 rounded-lg p-3 flex items-start gap-3">
                  <div className="text-amber-500 mt-0.5">⚠️</div>
                  <div>
                    <strong className="text-amber-400 block mb-1">Crucial Step: Do not hit send yet!</strong>
                    <span className="text-amber-200/80 text-sm">
                      You have to tell Gemini to use the video tool before submitting. Move to Step 4.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step 4 */}
          <section className="relative pl-16 sm:pl-24 mb-4">
            <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-slate-900 border-4 border-emerald-500 flex items-center justify-center text-emerald-400 font-bold text-xl shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10">
              4
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">Attach Tool &amp; Generate</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Add the video capability, hit send, and watch the magic happen.
            </p>

            {/* Mock Gemini input area */}
            <div className="relative bg-slate-900 rounded-2xl p-6 border border-slate-700 text-center">
              <h3 className="text-slate-300 font-medium mb-4">Inside the Gemini Chat Input:</h3>

              <div className="bg-slate-800 rounded-full flex items-center p-2 border border-slate-600 mx-auto max-w-md relative">

                {/* Plus button, highlighted */}
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20" />
                  <div className="bg-slate-700 rounded-full w-10 h-10 flex items-center justify-center border-2 border-emerald-500 text-emerald-400 z-10 relative shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  </div>

                  <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-48 bg-emerald-600 text-white text-xs font-bold py-2 px-3 rounded-lg shadow-lg pointer-events-none">
                    1. Click the Plus symbol
                    <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-600 rotate-45" />
                  </div>
                </div>

                <div className="flex-1 text-left px-4 overflow-hidden whitespace-nowrap text-ellipsis text-sm text-slate-500 font-mono">
                  Act as an expert anime...
                </div>

                <div className="relative">
                  <div className="bg-indigo-600 rounded-full w-10 h-10 flex items-center justify-center text-white ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                  </div>
                  <div className="absolute -bottom-14 right-0 w-32 bg-indigo-600 text-white text-xs font-bold py-2 px-3 rounded-lg shadow-lg pointer-events-none z-20">
                    3. Hit Send/Submit!
                    <div className="absolute top-[-6px] right-4 w-3 h-3 bg-indigo-600 rotate-45" />
                  </div>
                </div>

                {/* Mock popup menu showing the video tool */}
                <div className="absolute top-14 left-0 bg-slate-800 border border-slate-600 rounded-xl shadow-2xl p-2 w-56 z-20">
                  <div className="bg-slate-700/50 flex items-center gap-3 p-3 rounded-lg border border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                    <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400">
                      <VideoIcon size={16} />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-bold text-white">Generate a video</div>
                      <div className="text-xs text-slate-400">2. Select this tool</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-24 bg-gradient-to-r from-emerald-900/50 to-teal-900/50 border border-emerald-500/30 rounded-xl p-4 text-emerald-200">
                <strong>Result:</strong> Gemini will read your script and automatically process the video frames, handing you back a completed cinematic short!
              </div>
            </div>
          </section>

          {/* Hand-off into the interactive builder */}
          <div className="mt-12 text-center">
            <a
              href="#walkthrough"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-purple-900/20 transition-all"
            >
              Build your own blueprint
            </a>
            <p className="text-slate-500 text-sm mt-3">
              Step through it interactively and copy a prompt tailored to your idea.
            </p>
          </div>
        </div>

        <footer className="bg-slate-900 p-6 text-center border-t border-slate-800">
          <p className="text-slate-500 text-sm font-medium">Generated via Gemini AI Workflow Guide</p>
        </footer>
      </main>
    </div>
  );
}
