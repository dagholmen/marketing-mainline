'use client';

import { motion } from 'motion/react';

import { IdentityGraph } from './identity-graph';

export function AnimatedIdentityGraph() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="h-full w-full overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
    >
      <IdentityGraph />
    </motion.div>
  );
}
