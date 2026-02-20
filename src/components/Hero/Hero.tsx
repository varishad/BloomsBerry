'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1] as const,
        },
    },
};

const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1] as const,
        },
    },
};

const Hero = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center bg-[url('/IMG_3416.webp')] bg-cover bg-right pt-20 overflow-hidden">
            {/* Dark Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10" />

            {/* Animated background subtle zoom */}
            <motion.div
                className="absolute inset-0 bg-[url('/IMG_3416.webp')] bg-cover bg-right"
                initial={{ scale: 1.3 }}
                animate={{ scale: 1.2 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                aria-hidden="true"
            />

            {/* Decorative floating elements */}
            <motion.div
                className="absolute top-1/4 left-10 w-2 h-2 bg-white/30 rounded-full z-20"
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                aria-hidden="true"
            />
            <motion.div
                className="absolute top-1/3 right-20 w-3 h-3 bg-white/20 rounded-full z-20"
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                aria-hidden="true"
            />
            <motion.div
                className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full z-20"
                animate={{
                    y: [0, -15, 0],
                    opacity: [0.25, 0.5, 0.25],
                }}
                transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                }}
                aria-hidden="true"
            />

            {/* Main Content */}
            <motion.div
                className="relative z-20 max-w-[1200px] w-full px-6 md:px-12 text-left text-white"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Established Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-6"
                >
                    <p className="font-body text-white/80 text-xs md:text-sm tracking-[0.3em] uppercase">
                        Established 2025
                    </p>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-display mb-8 tracking-wide leading-[1.15] drop-shadow-2xl"
                    style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="block font-bold"
                    >
                        The Purest
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="block italic font-medium tracking-wider"
                    >
                        Essence of Taste
                    </motion.span>
                </motion.h1>

                {/* Subtitle/Description */}
                <motion.div variants={itemVariants} className="relative">
                    <motion.div
                        className="w-16 h-0.5 bg-white/50 mb-6"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    />
                    <p className="text-base md:text-lg lg:text-xl font-body mb-10 opacity-90 tracking-wide max-w-2xl">
                        A botanical sanctuary where culinary heritage meets contemporary organic innovation. Discover the art of modern dining.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    variants={buttonVariants}
                    className="flex flex-col sm:flex-row gap-4 items-start"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full bg-[#5F8F72] text-white hover:bg-[#7FA88A] transition-all duration-300 px-10 py-7 text-lg font-semibold shadow-lg shadow-black/20"
                        >
                            <Link href="#menu">Explore Menu</Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="rounded-full border-2 border-white bg-transparent text-white hover:bg-[#AFC8B2] hover:text-[#2D3A2F] hover:border-[#AFC8B2] transition-all duration-300 px-10 py-7 text-lg font-semibold"
                        >
                            <Link href="#contact">Book a Table</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 cursor-pointer"
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    aria-label="Scroll down to explore more content"
                >
                    <span className="text-white/60 text-sm tracking-widest uppercase">Explore More</span>
                    <FontAwesomeIcon icon={faChevronDown} className="w-6 h-6 text-white/60" aria-hidden="true" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
