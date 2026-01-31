import { Camera, Clock, Home, Search, Layers, Sparkles } from 'lucide-react';

const historicalData = {
  "clues": {
    "wear_patterns": [
      {
        "feature": "Negative Rug Ghosting",
        "description": "A sharp, rectangular color contrast on the oak floor. The protected area is a deep honey-oak, while the perimeter is grayed and brittle.",
        "indication": "Suggests a 9x12 wool rug was stationary for 20+ years, protecting the original polyurethane finish from UV oxidation."
      },
      {
        "feature": "Arcuate Floor Scratches",
        "description": "Radial 'swish' marks in the floor finish located 3 feet from the north window.",
        "indication": "Repeated movement of a heavy swivel chair or a frequent-use rocking chair, typical of a primary reading nook."
      },
      {
        "feature": "Heel-Strike Compression",
        "description": "Localized wood fiber crushing in a narrow path between the hallway entrance and the far corner.",
        "indication": "A high-traffic 'desire path' indicating a doorway or frequently used cabinet once existed in the corner now occupied by a decorative plant."
      }
    ],
    "structural_logic": [
      {
        "feature": "Thermal Tracking / Ghosting",
        "description": "Vertical dark streaks on the plaster wall, spaced precisely 16 inches apart.",
        "indication": "Soot and dust accumulation over cold wall studs, revealing the skeletal framing and suggesting poor insulation historically."
      },
      {
        "feature": "Orphaned Baseboard Gap",
        "description": "A 24-inch section of baseboard where the molding profile doesn't match the rest of the room.",
        "indication": "Evidence of a 'ghost door' or service entrance that was roughly patched during a mid-century conversion."
      },
      {
        "feature": "Plaster 'Scar' Line",
        "description": "A horizontal hairline crack and slight bulge at the 9-foot mark on 12-foot walls.",
        "indication": "A historic picture rail was removed; the 'scar' is the seam where the wall was replastered to create a seamless modern look."
      }
    ]
  },
  "deduction": "The room exhibits a 'palimpsest' effect where structural removals (fireplaces, service doors) were masked but never fully erased. The concentration of floor wear near the window confirms the room has always prioritized natural light, transitioning from a social parlor to a solitary workspace. The electrical 'ghosting' (patched outlets 4 feet high) suggests a mid-life period as a specialized facility (possibly a medical office) before returning to residential use.",
  "reconstructed_layout": {
    "Era_1_Modern_Current": "Minimalist home office. Furniture is floating (not touching walls), prioritizing 'Zoom' aesthetics and open floor space. All tech is wireless, masking the lack of modern outlet placement.",
    "Era_2_30_Years_Ago": "High-density residential. The room was likely partitioned with a temporary 'flex' wall. Evidence: The ceiling shows a faint linear patch where a tension-rod room divider or drywall track once ran.",
    "Era_3_50_to_80_Years_Ago": "Formal Victorian Parlor. Centered around a now-covered hearth. Layout was symmetrical, with heavy velvet curtains (indicated by deep-set bracket holes in the window casing) and a central 'social island' where the rug-ghosting is most prominent."
  }
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-500/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Powered by Gemini 3
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 tracking-tight">
            Room History <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Reconstruction</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Unveiling the hidden stories within architectural spaces through AI-powered analysis
          </p>
        </header>

        <div className="mb-16">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl overflow-hidden shadow-2xl aspect-video relative border border-emerald-500/20">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-700/50 to-slate-800/50">
              <div className="text-center">
                <Camera className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <p className="text-slate-200 text-lg font-medium">Video Analysis Placeholder</p>
                <p className="text-slate-400 text-sm mt-2">Your room scan will appear here</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Search className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl font-bold text-white">Discovered Clues</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                Wear Patterns
              </h3>
              <div className="space-y-4">
                {historicalData.clues.wear_patterns.map((pattern, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:bg-slate-800/70 transition-all border border-emerald-500/20 hover:border-emerald-500/50 backdrop-blur-sm">
                    <h4 className="font-bold text-emerald-300 mb-2">{pattern.feature}</h4>
                    <p className="text-slate-300 text-sm mb-3">{pattern.description}</p>
                    <div className="bg-emerald-500/10 border-l-4 border-emerald-500 p-3 rounded">
                      <p className="text-slate-200 text-sm">{pattern.indication}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                Structural Logic
              </h3>
              <div className="space-y-4">
                {historicalData.clues.structural_logic.map((structure, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:bg-slate-800/70 transition-all border border-cyan-500/20 hover:border-cyan-500/50 backdrop-blur-sm">
                    <h4 className="font-bold text-cyan-300 mb-2">{structure.feature}</h4>
                    <p className="text-slate-300 text-sm mb-3">{structure.description}</p>
                    <div className="bg-cyan-500/10 border-l-4 border-cyan-500 p-3 rounded">
                      <p className="text-slate-200 text-sm">{structure.indication}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 rounded-2xl p-8 shadow-2xl text-white border border-emerald-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Expert Deduction</h2>
              </div>
              <p className="text-lg leading-relaxed text-emerald-50">
                {historicalData.deduction}
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl font-bold text-white">Historical Layers</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-slate-700/50 hover:border-slate-600/50 backdrop-blur-sm group">
              <div className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 text-white border-b border-slate-600/50 group-hover:from-slate-600 group-hover:to-slate-500 transition-all">
                <Home className="w-10 h-10 mb-3 text-slate-200" />
                <h3 className="text-2xl font-bold mb-2">Modern Era</h3>
                <p className="text-slate-300 text-sm">Present Day</p>
              </div>
              <div className="p-6">
                <p className="text-slate-200 leading-relaxed">
                  {historicalData.reconstructed_layout.Era_1_Modern_Current}
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-emerald-500/30 hover:border-emerald-500/60 backdrop-blur-sm group">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-500 p-6 text-white border-b border-emerald-400/30 group-hover:from-emerald-500 group-hover:to-emerald-400 transition-all">
                <Home className="w-10 h-10 mb-3 text-white" />
                <h3 className="text-2xl font-bold mb-2">Recent History</h3>
                <p className="text-emerald-100 text-sm">30 Years Ago</p>
              </div>
              <div className="p-6">
                <p className="text-slate-200 leading-relaxed">
                  {historicalData.reconstructed_layout.Era_2_30_Years_Ago}
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-cyan-500/30 hover:border-cyan-500/60 backdrop-blur-sm group">
              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-6 text-white border-b border-cyan-400/30 group-hover:from-cyan-500 group-hover:to-blue-500 transition-all">
                <Home className="w-10 h-10 mb-3 text-white" />
                <h3 className="text-2xl font-bold mb-2">Victorian Era</h3>
                <p className="text-cyan-100 text-sm">50-80 Years Ago</p>
              </div>
              <div className="p-6">
                <p className="text-slate-200 leading-relaxed">
                  {historicalData.reconstructed_layout.Era_3_50_to_80_Years_Ago}
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-16 text-center text-slate-400 text-sm">
          <p>Historical reconstruction powered by advanced AI analysis</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
