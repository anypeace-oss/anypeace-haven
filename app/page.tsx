import Link from "next/link";

export default function Home() {
  return (
    <div className=" pt-30 pb-10 flex flex-col min-h-screen justify-center max-w-3xl mx-auto px-4 text-left space-y-4 text-md">
      {/* <section className="relative w-full h-64 md:h-80 lg:h-96 mb-8  overflow-hidden rounded-xl">
        <Image
          alt="Anypeace icon"
          src="/banner.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover"
          fill
          priority
        />
      </section> */}

      {/* Hero Section */}
      <section className="space-y-4">
        <p className="text-md font-normal">
          <strong className="text-2xl">Anypeace.</strong> <br />
          an another software company that builds open-source tools.
        </p>
      </section>
      <section>
        <p>
          Currently building{" "}
          <a
            href="https://kliks.com"
            className="font-bold text-blue-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Kliks
          </a>
          — where your links, ideas, and digital creations live together.
        </p>
      </section>

      {/* About Section */}
      <section className="space-y-4">
        <p className="text-md font-normal">
          We make tools that connect people, support creativity, and are easy to
          use and accessible to everyone.
        </p>
      </section>

      {/* Contact Section */}
      <section className="space-y-4">
        <p className="text-md font-normal">
          If this excites you, we&apos;d love to hear from you. —{" "}
          <a
            href="https://fadils.xyz"
            className="font-bold text-blue-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fadil
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="pt-8 border-t border-gray-700 flex justify-between text-muted-foreground text-sm ">
        <Link href={"/"}>&copy; Anypeace 2025</Link>
        <Link href={"mailto:hello.anypeace@gmail.com"}>
          hello.anypeace@gmail.com
        </Link>
      </footer>
    </div>
  );
}
