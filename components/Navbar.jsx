// Mengambil gambar
import Image from "next/image";
// Mengambil link halaman
import Link from "next/link";
import { useState } from "react";

// Membuat komponen baru
function MyNavbar() {

    const [navbar, setNavbar] = useState(false);

    return (
        <>
            <nav className="w-full bg-green-600 px-5 text-white">
                <div className="flex justify-between md:py-5 md:flex md:justify-around md:align-middle">
                    {/* Logo Web*/}
                    <div className="flex items-center justify-center">
                        <Link href="/">
                            <h2 className="text-2xl font-bold md:pl:5">Belajar Next Js</h2>
                        </Link>
                    </div>

                    {/* Logo Mobile */}
                    <div className="md:hidden py-8">
                        <button className="py-3 rounded-md" onClick={() => setNavbar(!navbar)} >
                            {navbar ? (
                                <Image src="/close-icon.svg" width={30} height={30} alt="close icon button" />
                            ) : (
                                <Image src="/hamburger-icon.svg" width={30} height={30} alt="menu icon button" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Menghubungkan Link, membuat logika untuk menampilkan atau menyembunyikan menu*/}
                <div className={`md:block ${navbar ? 'block' : 'hidden'}`}>
                    <ul className="md:h-auto md:flex cursor-pointer mt-8 h-screen">
                        {/* Pemanggilan Link Halaman, membuat automatic windows drop down */}
                        {/* Halaman Dashboard */}
                        <Link href="/dashboard" onClick={() => setNavbar(!navbar)}>
                            <li className="text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black">
                                Dashboard
                            </li>
                        </Link>

                        {/* Halaman About */}
                        <Link href="/about" onClick={() => setNavbar(!navbar)}>
                            <li className="text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black">
                                Tentang Kami
                            </li>
                        </Link>

                        {/* Halaman Contact */}
                        <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                            <li className="text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black">
                                Hubungi Kami
                            </li>
                        </Link>

                        {/* Halaman Contact */}
                        <Link href="#" onClick={() => setNavbar(!navbar)}>
                            <li className="text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black">
                                Informasi Pelayanan
                            </li>
                        </Link>

                        {/* Halaman Contact */}
                        <Link href="#" onClick={() => setNavbar(!navbar)}>
                            <li className="text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black">
                                Jenis Pelayanan
                            </li>
                        </Link>

                        {/* Halaman Contact */}
                        <Link href="#" onClick={() => setNavbar(!navbar)}>
                            <li className="text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black">
                                Dokumentasi Kegiatan
                            </li>
                        </Link>

                        {/* Halaman Contact */}
                        <Link href="#" onClick={() => setNavbar(!navbar)}>
                            <li className="text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black">
                                Ulasan Kami
                            </li>
                        </Link>
                    </ul>
                </div>

            </nav>
        </>
    )
}

// Memanggil Komponen
export default MyNavbar;