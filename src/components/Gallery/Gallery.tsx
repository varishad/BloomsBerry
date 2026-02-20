'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const galleryImages = [
    { src: '/gallery-1.png', alt: 'Bloomsberry Interior' },
    { src: '/gallery-2.png', alt: 'Our Signature Dish' },
    { src: '/gallery-3.png', alt: 'Coffee Art at Bloomsberry' },
    { src: '/about-img.png', alt: 'The Art of Conversation' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const imageVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: "easeOut" as const,
        },
    },
};

const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut" as const,
        },
    },
};

const Gallery = () => {
    return (
        <section id="gallery" className="bg-[#F8FAF8] py-24 md:py-32">
            <motion.div
                className="max-w-[1200px] mx-auto px-4 md:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {/* Header */}
                <motion.div variants={headerVariants} className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-12 h-0.5 bg-[#5F8F72]" />
                        <FontAwesomeIcon icon={faCamera} className="w-5 h-5 text-[#5F8F72]" />
                        <div className="w-12 h-0.5 bg-[#5F8F72]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display text-[#2D3A2F] mb-4">
                        Visual Story
                    </h2>
                    <p className="text-[#5F6B61] text-lg max-w-xl mx-auto">
                        Capturing the essence of Bloomsberry through moments of coffee, conversation, and connection
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            variants={imageVariants}
                            className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-[#2D3A2F]/5"
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <motion.div
                                className="relative w-full h-full"
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                            </motion.div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A2F]/80 via-[#2D3A2F]/20 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
                                <motion.span
                                    className="text-white font-medium text-center px-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileHover={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {img.alt}
                                </motion.span>
                            </div>

                            {/* Corner decoration */}
                            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/0 
                                group-hover:border-white/60 transition-all duration-500 rounded-tr-lg" />
                            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/0 
                                group-hover:border-white/60 transition-all duration-500 rounded-bl-lg" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Gallery;
