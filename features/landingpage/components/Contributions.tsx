"use client"
import ShimmerText from '@/components/kokonutui/shimmer-text';
import React from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const Contributions = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const username = "devflins2";

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative space-y-6 bg-transparent px-8 flex flex-col justify-center items-center pt-20 pb-20 w-full overflow-hidden">
      {/* Ambient Glow for Contributions */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1 }}
        className="relative z-10 flex justify-center flex-col mt-30 mb-11 items-center"
      >
        <ShimmerText className='text-6xl' text={"MY CONTRIBUTIONS"} />
        <ShimmerText className='text-5xl' text={"THIS YEAR"} />
      </motion.div>

      {/* Contribution Graph Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.1 }}
        className="relative z-10 w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/10"
      >
        {/* The calendar needs its own container for horizontal scrolling on mobile */}
        <div className="overflow-x-auto text-white flex justify-center">
          <GitHubCalendar
            username={username}
            colorScheme="dark"
            blockSize={14}
            blockMargin={5}
            fontSize={16}
            renderBlock={(block, activity) => (
              <g
                data-tooltip-id="react-tooltip"
                data-tooltip-content={`${activity.count} contributions on ${activity.date}`}
              >
                {block}
              </g>
            )}
          />
          <ReactTooltip id="react-tooltip" style={{ backgroundColor: "#121212", color: "#fff" }} />
        </div>
      </motion.div>
    </div>
  )
}

export default Contributions
