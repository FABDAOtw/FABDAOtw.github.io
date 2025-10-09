import React, { useEffect, useState } from 'react';
import { StatsCard } from './StatsCard';
import HeroCover from '../Hero-page-cover-image.webp';

interface HeroProps {
  /** Leave in case you still want to control vertical feel */
  statsHeight?: number;
}
export function Hero({
  statsHeight = 184
}: HeroProps) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', {
      handleEvent: onScroll
    } as any, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll as any);
  }, []);
  const stats = [{
    label: 'PROJECTS with HYPERCERTS',
    value: '13+'
  }, {
    label: 'PARTICIPANTS',
    value: '53,000+'
  }, {
    label: 'FUNDING',
    value: '5,500+ USD'
  }];
  return <section className="
        md:sticky top-0 z-10 relative
        flex flex-col items-center justify-center
        px-6 pt-[192px] pb-[120px] md:px-[80px]
        bg-cover bg-center bg-no-repeat
      "
  /* If you want the hero to roughly fill the viewport, keep this.
     If not needed, remove the style line entirely. */ style={{
    backgroundImage: `url(${HeroCover})`,
    minHeight: `calc(100vh - 56px)`
  }}>
      {/* Dark overlay removed */}

      {/* Content sits above overlay */}
      <div className="relative z-10 w-full max-w-7xl">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-4 md:leading-[120%]">
            See the act. Track the fact
          </h1>
          <p className="text-lg md:text-2xl text-white max-w-4xl mx-auto">
            The Hypercerts Dashboard documents and verifies local public good
            contributions in Taiwan — turning actions into traceable facts and
            shared value.
          </p>
        </div>

        {/* Stats directly under the title */}
        <div className="mt-6 md:mt-10">
          {/* Optional: a subtle panel behind stats; remove if you want them floating */}
          <div className="rounded-2xl p-4 md:p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat, i) => <StatsCard key={i} label={stat.label} value={stat.value} />)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}
