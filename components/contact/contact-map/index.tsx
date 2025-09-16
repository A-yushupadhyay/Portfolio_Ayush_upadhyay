"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ContactMapProps } from "../types";
import { MapSkeleton } from "@/components/contact/contact-map/map-skeleton";

export const ContactMap: React.FC<ContactMapProps> = ({
  src,
  className = "",
}) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <motion.div
      className={`w-full h-64 md:h-96 mb-10 rounded-xl overflow-hidden relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <AnimatePresence mode="wait">
        {!isLoaded && !hasError && (
          <motion.div
            key="skeleton"
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-default-100 rounded-xl"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MapSkeleton />
          </motion.div>
        )}

        {hasError ? (
          <motion.div
            key="error"
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-default-100 rounded-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center space-y-2">
              <div className="text-default-400 text-lg">📍</div>
              <p className="text-default-500 text-sm">Unable to load map</p>
            </div>
          </motion.div>
        ) : (
          <motion.iframe
            key="map"
            allowFullScreen
            animate={{ opacity: isLoaded ? 1 : 0 }}
            className="w-full h-full border-none filter grayscale invert"
            initial={{ opacity: 0 }}
            loading="lazy"
            src={src}
            style={{
              visibility: isLoaded ? "visible" : "hidden",
            }}
            title="Location Map"
            transition={{ duration: 0.5, ease: "easeOut" }}
            onError={handleError}
            onLoad={handleLoad}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};