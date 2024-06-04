import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";

export default function App() {
  return (
    <section>
      <Header />

      <article className="min-h-screen">
        App
      </article>

      <Footer />
    </section>
  )
}
