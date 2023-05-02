import Menu from "@/components/menu";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Menu />
      <Component {...pageProps} />
    </div>
  );
}
