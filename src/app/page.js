import Image from "next/image";
import comingSoon from "../../public/coming-soon-banner.jpg";

export default function Home() {
  return (
    <section>
      <div className=" w-full flex justify-center items-center h-screen">
        <div className="text-center rounded-2xl max-w-xl lg:max-w-2xl">
          <div className=" flex flex-col shadow-lg rounded-2xl">
            <Image
              src={comingSoon.src}
              alt="Coming-Soon-Banner"
              width={626}
              height={352}
              className="mx-auto w-full h-full object-cover overflow-hidden"
            />
            <div className="p-6">
              <h1 className=" text-2xl lg:text-4xl font-bold text-accent">
                Stay Tune 😃
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
