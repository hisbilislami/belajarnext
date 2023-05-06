import '@/styles/globals.css'
// Memanggil komponen navbar pada setiap halaman
import MyNavbar from '@/components/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MyNavbar/>
      <Component {...pageProps} />
    </>
  )
}
