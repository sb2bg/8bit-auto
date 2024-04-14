"use client";

import Gallery from "./components/Gallery";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-2 z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Image src="/logo.png" width={250} height={250} alt="8Bit Auto" />
        <p className="text-center text-[color:var(--color-secondary)] bg-[color:var(--color-tertiary)] p-4">
          Find your dream retro vehicle
        </p>
      </div>

      <Image
        src="/splash.png"
        width={100}
        height={100}
        objectPosition="center"
        objectFit="cover"
        alt="Splash logo"
        className="splash-image"
      />

      <Gallery
        images={[
          "https://bringatrailer.com/wp-content/uploads/2024/02/DSC_8525-67035-scaled.jpg?resize=470%2C318",
          "https://bringatrailer.com/wp-content/uploads/2023/09/1960_fiat_750_img_2327-1-52889.jpeg?resize=470%2C318",
          "https://bringatrailer.com/wp-content/uploads/2024/01/1959_abarth_record-monza-zagato_img_9485-66298.jpeg?resize=470%2C318",
          "https://bringatrailer.com/wp-content/uploads/2023/09/1962_cisitalia_850_a7c07182-67893.jpg?resize=470%2C318",
          "https://bringatrailer.com/wp-content/uploads/2023/08/1962_fiat_abarth-850-zagato-record-monza_834c4a1d-1eda-4b09-a49a-a135aba5c277-43567.jpeg?resize=470%2C318",
          "https://bringatrailer.com/wp-content/uploads/2021/09/2003_acura_cl_163545152131808136dIMG_7583.jpg?resize=470%2C318",
          "https://bringatrailer.com/wp-content/uploads/2017/12/1023-1.jpg?resize=470%2C318",
          "https://bringatrailer.com/wp-content/uploads/2023/05/1996_acura_integra_img_2348-4-21706.jpg?resize=470%2C318",
        ]}
      />
      <a
        href="/chat"
        className="p-4 text-white bg-[color:var(--color-secondary)] focus:border-transparent border-1 border-[color:rgba(0.6,0.6,0.6,0.6)] shadow-[inset_1px_1px_1px_1px_rgba(0.6,0.6,0.6,0.6)]"
      >
        Chat with AutoBetty
      </a>
    </main>
  );
}
