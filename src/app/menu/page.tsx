'use client';

import Navbar from '@/components/Navbar/Navbar';
import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer/Footer';

export default function MenuPage() {
    return (
        <main>
            <Navbar />
            <div className="pt-20">
                <Menu />
            </div>
            <Footer />
        </main>
    );
}
