import React, { useState } from 'react';

const layers = [
  {
    key: 'master',
    label: 'Master Recording',
    short: 'The sound itself',
    streams: ['Streaming', 'Downloads & physical sales', 'Neighboring rights', 'Master use licensing'],
    body: 'The master is the specific recorded performance. Ownership earns income every time that recording is streamed, sold, broadcast or licensed — often the most visible and actively traded layer of a catalog.',
    investor: 'Highly liquid, data-rich cash flows that track global streaming adoption.',
  },
  {
    key: 'publishing',
    label: 'Publishing / Composition',
    short: 'The song as written',
    streams: ['Performance royalties (ASCAP, BMI, SESAC, PRS)', 'Mechanical royalties', 'Print & lyric licensing', 'Writer’s share & publisher’s share'],
    body: 'Every recording, cover, live performance and broadcast of a song pays the writers and publishers of the underlying composition. Publishing income can persist for decades beyond the original release.',
    investor: 'Long-duration, diversified income across many recordings of the same work.',
  },
  {
    key: 'sync',
    label: 'Sync & Media',
    short: 'Music meets picture',
    streams: ['Film & television', 'Advertising', 'Video games', 'Trailers & social content'],
    body: 'Synchronization licenses pair music with visual media. A single placement can reintroduce a classic to a new generation and lift income across every other layer.',
    investor: 'Upside driven by active stewardship and creative pitching.',
  },
  {
    key: 'emerging',
    label: 'Emerging Rights',
    short: 'The next frontier',
    streams: ['Spatial & immersive audio', 'Fitness & interactive platforms', 'AI & data licensing', 'Live and virtual experiences'],
    body: 'New formats and platforms continually create new ways for catalogs to earn. Thoughtful rights management positions works to benefit as these markets mature.',
    investor: 'Optionality on future formats, built into the asset.',
  },
];

const RoyaltyAnatomy = () => {
  const [active, setActive] = useState(0);
  const layer = layers[active];

  return (
    <section id="anatomy" className="py-20 md:py-28 lg:py-32 bg-surface border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mb-12 md:mb-16 animate-fade-in">
          <span className="eyebrow-gold mb-6 block">Anatomy of a Music Asset</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-balance">
            One song. <span className="italic text-gold">Many streams of value.</span>
          </h2>
          <p className="mt-6 text-foreground/60 leading-relaxed font-light">
            Select a layer to see how a single work generates income — and why each layer matters to rights holders and investors alike.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* Stacked layers */}
          <div className="md:col-span-5 space-y-3" role="tablist" aria-label="Rights layers">
            {layers.map((l, i) => {
              const on = i === active;
              return (
                <button
                  key={l.key}
                  role="tab"
                  aria-selected={on}
                  aria-controls="anatomy-panel"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`group w-full text-left border px-6 py-5 transition-all duration-300 flex items-center gap-5 ${on ? 'border-gold bg-gold/10 md:translate-x-3' : 'border-gold/20 bg-background hover:border-gold/50'}`}
                  style={{ marginLeft: `${i * 4}%`, width: `${100 - i * 4}%` }}
                >
                  <span className={`font-display text-2xl tabular-nums ${on ? 'text-gold' : 'text-foreground/30'}`}>0{i + 1}</span>
                  <span className="flex-1">
                    <span className={`block font-display text-xl md:text-2xl leading-tight ${on ? 'text-foreground' : 'text-foreground/70'}`}>{l.label}</span>
                    <span className="block text-xs uppercase tracking-[0.2em] text-foreground/40 mt-1">{l.short}</span>
                  </span>
                  <span className={`h-px transition-all duration-300 bg-gold ${on ? 'w-8' : 'w-0'}`} />
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div id="anatomy-panel" role="tabpanel" key={layer.key} className="md:col-span-7 border border-gold/25 bg-background p-8 md:p-10 animate-fade-in">
            {/* Waveform motif */}
            <div className="flex items-end gap-[3px] h-10 mb-8" aria-hidden="true">
              {Array.from({ length: 48 }).map((_, i) => (
                <span key={i} className="flex-1 bg-gold/60" style={{ height: `${20 + Math.abs(Math.sin((i + active * 7) * 0.55)) * 80}%` }} />
              ))}
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-light tracking-tight mb-4">{layer.label}</h3>
            <p className="text-foreground/70 leading-relaxed font-light mb-8">{layer.body}</p>
            <span className="eyebrow mb-4 block">Income Sources</span>
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {layer.streams.map(s => (
                <li key={s} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-2 w-3 h-px bg-gold shrink-0" />{s}
                </li>
              ))}
            </ul>
            <div className="border-t border-gold/15 pt-6">
              <span className="eyebrow-gold block mb-2">Investor Lens</span>
              <p className="font-display text-xl md:text-2xl italic font-light leading-snug">{layer.investor}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoyaltyAnatomy;
