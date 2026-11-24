
import React from 'react';
import { TECH_ICONS } from './techIcons';
import { TECH_STACK } from '../data/portfolioData';

// Official Simple Icons logos for tools without existing inline SVG paths.
const BRAND_LOGOS: Record<string, { slug: string; color: string }> = {
  HTML: { slug: 'html5', color: 'E34F26' },
  CSS: { slug: 'css3', color: '1572B6' },
  SQL: { slug: 'postgresql', color: '4169E1' },
  Excel: { slug: 'microsoftexcel', color: '217346' },
  Tableau: { slug: 'tableau', color: 'E97627' },
  'Power BI': { slug: 'powerbi', color: 'F2C811' },
  OpenCV: { slug: 'opencv', color: '5C3EE8' },
  GitHub: { slug: 'github', color: 'FFFFFF' },
  Unity: { slug: 'unity', color: 'FFFFFF' },
  'C#': { slug: 'csharp', color: '9B4F96' },
};

const TOOLS = TECH_STACK.map((label) => {
  const icon = TECH_ICONS.find(
    (i) => i.label.toLowerCase() === label.toLowerCase()
  );

  const brand = BRAND_LOGOS[label];

  return {
    label,
    color: icon?.color ?? (brand ? `#${brand.color}` : '#ff2a3b'),
    path: icon?.path ?? '',
    logoUrl: brand
      ? `https://cdn.simpleicons.org/${brand.slug}/${brand.color}`
      : '',
  };
});

/** Software & tools shown as tall capsules. */

export const SoftwareStrip: React.FC = () => (
  <div className="relative w-full max-w-7xl mt-24 z-10 flex flex-col items-center">
    <div className="red-halo" aria-hidden="true" />

    <span className="relative text-[#a31515] font-bold uppercase text-sm md:text-base tracking-[0.2em] mb-4">
      Languages &amp; Tools
    </span>

    <h3 className="relative text-4xl md:text-6xl font-black tracking-tight uppercase text-white mb-12">
      MY TECH STACK.
    </h3>

    <ul className="grid-blur relative flex flex-wrap justify-center gap-4 md:gap-6 list-none p-0 m-0">
      {TOOLS.map((tool) => (
        <li
          key={tool.label}
          className="matrix-item glass glass-grid-card group w-[132px] h-[190px] md:w-[148px] md:h-[216px] xl:w-[152px] xl:h-[224px] rounded-3xl flex flex-col items-center justify-center gap-5 px-2"
        >
          {tool.path ? (
            <svg
              viewBox="0 0 24 24"
              role="img"
              aria-label={`${tool.label} logo`}
              className="shrink-0 w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110"
              style={{
                fill: tool.color,
                filter: `drop-shadow(0 0 10px ${tool.color}55)`,
              }}
            >
              <path d={tool.path} />
            </svg>
          ) : tool.logoUrl ? (
            <img
              src={tool.logoUrl}
              alt={`${tool.label} logo`}
              loading="eager"
              className="shrink-0 w-14 h-14 md:w-16 md:h-16 object-contain transition-transform duration-300 group-hover:scale-110"
              style={{
                filter: `drop-shadow(0 0 10px ${tool.color}55)`,
              }}
              onError={(e) => {
                const img = e.currentTarget;
                img.style.display = 'none';

                const fallback = img.nextElementSibling as HTMLElement | null;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
          ) : null}

          <svg
            viewBox="0 0 24 24"
            role="img"
            aria-label={`${tool.label} logo`}
            className="hidden shrink-0 w-14 h-14 md:w-16 md:h-16 items-center justify-center"
          >
            <text
              x="12"
              y="17"
              textAnchor="middle"
              fontSize="16"
              fontWeight="800"
              fill={tool.color}
            >
              {tool.label.charAt(0).toUpperCase()}
            </text>
          </svg>

          <span className="text-xs md:text-sm font-semibold text-gray-400 group-hover:text-gray-100 transition-colors text-center leading-tight whitespace-pre-line">
            {tool.label}
          </span>
        </li>
      ))}
    </ul>
  </div>
);
