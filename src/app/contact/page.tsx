'use client';

import Navbar from '@/components/Navbar/Navbar';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function ContactPage() {
    return (
        <main>
            <Navbar />
            <div className="pt-20">
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
