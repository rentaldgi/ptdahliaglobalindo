import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatePage from "../components/AnimatePage";
import Image from "next/image";

export default function KontakKami() {
  return (
    <div className="bg-[#f7f7f5] min-h-screen flex flex-col font-sans text-[#222]">
      <Navbar />

      <AnimatePage>
        <main className="px-4 sm:px-6 lg:px-8 py-7 sm:py-10 lg:py-12">
          <div className="max-w-6xl mx-auto">

            {/* =========================
                YELLOW HERO AREA
            ========================== */}
            <section
              className="
                relative
                bg-[#FFDD00]
                rounded-[22px] sm:rounded-[26px] lg:rounded-[30px]
                px-6 sm:px-8 lg:px-12
                pt-9 sm:pt-11 lg:pt-14
                pb-28 sm:pb-32 lg:pb-36
              "
            >
              {/* HEADER */}
              <div className="max-w-2xl">
                <p
                  className="
                    text-[10px] sm:text-[11px] lg:text-xs
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    mb-3 sm:mb-4
                  "
                >
                  Dahlia Group
                </p>

                <h1
                  className="
                    text-[26px]
                    sm:text-[31px]
                    md:text-[35px]
                    lg:text-[39px]
                    font-semibold
                    tracking-[-0.035em]
                    leading-[1.14]
                    max-w-xl
                  "
                >
                  Mari ngobrol dan temukan solusi yang sesuai dengan kebutuhan
                  Anda.
                </h1>
              </div>

              {/* =========================
                  FLOATING CARD
                  DESKTOP & TABLET
              ========================== */}
              <div
                className="
                  absolute
                  left-5 right-5
                  sm:left-7 sm:right-7
                  lg:left-10 lg:right-10
                  bottom-[-92px]
                  sm:bottom-[-105px]
                  lg:bottom-[-112px]
                  hidden sm:block
                "
              >
                <ContactCard />
              </div>
            </section>

            {/* =========================
                MOBILE CARD
            ========================== */}
            <div
              className="
                sm:hidden
                relative
                z-10
                mt-[-58px]
                px-1
              "
            >
              <ContactCard />
            </div>

            {/* =========================
                EXTRA SPACE AFTER CARD
            ========================== */}
            <div className="hidden sm:block h-28 lg:h-32" />
            <div className="sm:hidden h-8" />

          </div>
        </main>
      </AnimatePage>

      <Footer />
    </div>
  );
}

function ContactCard() {
  return (
    <div
      className="
        bg-white
        rounded-[18px]
        sm:rounded-[22px]
        lg:rounded-[26px]
        shadow-[0_20px_55px_rgba(0,0,0,0.10)]
        p-5
        sm:p-6
        md:p-7
        lg:p-9
      "
    >
      <div
        className="
          grid
          lg:grid-cols-[1.15fr_0.85fr]
          gap-6
          md:gap-7
          lg:gap-10
        "
      >

        {/* =========================
            CONTACT INFORMATION
        ========================== */}
        <div>
          <div
            className="
              grid
              sm:grid-cols-3
              gap-0
              sm:divide-x
              divide-[#e5e5e5]
            "
          >

            {/* TELEPON */}
            <a
              href="tel:08153135668"
              className="
                group
                pb-5
                sm:pb-0
                sm:pr-5
                lg:pr-7
              "
            >
              <p
                className="
                  text-[9px]
                  sm:text-[10px]
                  lg:text-[11px]
                  text-gray-400
                  uppercase
                  tracking-[0.12em]
                  mb-2
                "
              >
                Telepon
              </p>

              <p
                className="
                  text-[14px]
                  sm:text-[15px]
                  lg:text-[17px]
                  font-medium
                  whitespace-nowrap
                "
              >
                0815 3135 668
              </p>

              <span
                className="
                  inline-block
                  mt-2.5
                  text-sm
                  group-hover:translate-x-1
                  transition-transform
                "
              >
                →
              </span>
            </a>

            {/* FAX */}
            <a
              href="tel:02245720413"
              className="
                group
                py-5
                sm:py-0
                sm:px-5
                lg:px-7
                border-t
                sm:border-t-0
                border-[#e5e5e5]
              "
            >
              <p
                className="
                  text-[9px]
                  sm:text-[10px]
                  lg:text-[11px]
                  text-gray-400
                  uppercase
                  tracking-[0.12em]
                  mb-2
                "
              >
                Fax
              </p>

              <p
                className="
                  text-[14px]
                  sm:text-[15px]
                  lg:text-[17px]
                  font-medium
                  whitespace-nowrap
                "
              >
                022 4572 0413
              </p>

              <span
                className="
                  inline-block
                  mt-2.5
                  text-sm
                  group-hover:translate-x-1
                  transition-transform
                "
              >
                →
              </span>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/dahliagroup.id"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                pt-5
                sm:pt-0
                sm:pl-5
                lg:pl-7
                border-t
                sm:border-t-0
                border-[#e5e5e5]
              "
            >
              <p
                className="
                  text-[9px]
                  sm:text-[10px]
                  lg:text-[11px]
                  text-gray-400
                  uppercase
                  tracking-[0.12em]
                  mb-2
                "
              >
                Instagram
              </p>

              <p
                className="
                  text-[14px]
                  sm:text-[15px]
                  lg:text-[17px]
                  font-medium
                "
              >
                @dahliagroup.id
              </p>

              <span
                className="
                  inline-block
                  mt-2.5
                  text-sm
                  group-hover:translate-x-1
                  transition-transform
                "
              >
                →
              </span>
            </a>

          </div>
        </div>

        {/* =========================
            WHATSAPP
        ========================== */}
        <div
          className="
            lg:border-l
            lg:border-[#e5e5e5]
            lg:pl-10
            pt-6
            md:pt-7
            lg:pt-0
            border-t
            lg:border-t-0
            border-[#e5e5e5]
          "
        >
          <h3
            className="
              text-[19px]
              sm:text-[21px]
              lg:text-[23px]
              font-semibold
              leading-[1.2]
              tracking-[-0.02em]
            "
          >
            Hubungi kami melalui WhatsApp.
          </h3>

          <p
            className="
              mt-3
              text-[12px]
              sm:text-[13px]
              lg:text-sm
              leading-6
              text-gray-500
              max-w-md
            "
          >
            Untuk pertanyaan, informasi layanan, atau kebutuhan lainnya, Anda
            dapat langsung menghubungi tim kami.
          </p>

          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/628153135668"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-5
              inline-flex
              items-center
              gap-3
              bg-[#222]
              text-white
              rounded-xl
              px-4
              sm:px-5
              py-3
              text-[12px]
              sm:text-[13px]
              lg:text-sm
              font-medium
              hover:bg-black
              hover:-translate-y-0.5
              transition-all
              duration-200
            "
          >
            {/* GREEN WHATSAPP ICON */}
            <span
              className="
                w-7
                h-7
                rounded-full
                bg-[#25D366]
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="w-[17px] h-[17px] fill-white"
                aria-hidden="true"
              >
                <path
                  d="M20.52 3.48A11.78 11.78 0 0 0 12.08 0C5.56 0 .26 5.3.26 11.82c0 2.08.54 4.1 1.57 5.89L.16 24l6.43-1.68a11.8 11.8 0 0 0 5.48 1.4h.01c6.52 0 11.82-5.3 11.82-11.82 0-3.16-1.23-6.13-3.38-8.42ZM12.08 21.7h-.01a9.8 9.8 0 0 1-5-1.36l-.36-.21-3.81.99 1.02-3.71-.23-.38a9.82 9.82 0 1 1 8.39 4.67Zm5.39-7.36c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.33.22-.62.07-.29-.15-1.21-.45-2.3-1.43-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.33.44-.49.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.52-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.54c-.19 0-.49.07-.74.37-.26.29-.98.96-.98 2.35s1 2.73 1.14 2.92c.14.19 1.97 3.01 4.77 4.22.67.29 1.19.46 1.59.59.67.21 1.28.18 1.76.11.54-.08 1.7-.69 1.94-1.35.24-.66.24-1.23.17-1.35-.07-.12-.26-.19-.54-.34Z"
                />
              </svg>
            </span>

            <span>
              Chat via WhatsApp
            </span>

            <span className="ml-0.5 text-sm">
              ↗
            </span>
          </a>
        </div>

      </div>
    </div>
  );
};
