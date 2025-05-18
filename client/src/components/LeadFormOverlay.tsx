import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LeadGenerationForm } from '@/components/LeadGenerationForm';

interface LeadFormOverlayProps {
  delayInSeconds?: number;
}

export function LeadFormOverlay({ delayInSeconds = 10 }: LeadFormOverlayProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    // Only show the overlay if it hasn't been closed already
    if (!hasBeenClosed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delayInSeconds * 1000);

      return () => clearTimeout(timer);
    }
  }, [delayInSeconds, hasBeenClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setHasBeenClosed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-[#10002b] via-[#240046] to-[#3c096c] rounded-xl shadow-2xl max-w-md w-full relative"
          >
            <LeadGenerationForm variant="overlay" onClose={handleClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LeadFormOverlay;