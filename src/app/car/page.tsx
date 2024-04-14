"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

export default function ChatPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  if (!searchParams) {
    return null;
  }

  const cars = JSON.parse(searchParams.get("cars") || "[]");
  const first = cars ? cars[0] : null;
  const rest = cars ? cars.slice(1) : null;

  const clickOnCar = (car: any) => {
    const newCars = [car, ...cars.filter((x: any) => x !== car)];

    router.push(
      "/car" + "?cars=" + encodeURIComponent(JSON.stringify(newCars))
    );
  };

  if (!cars) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="p-4 bg-[color:var(--color-tertiary)] text-[color:var(--color-secondary)]">
          Invalid car data
          <br />
          <a href="/" className="underline">
            Go back
          </a>
        </div>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <button
        className="absolute top-0 left-0 p-4 m-4 bg-[color:var(--color-tertiary)] text-[color:var(--color-secondary)]"
        onClick={() => router.push("/")}
      >
        Go back
      </button>
      <div className="p-2 z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
        <h1 className="text-center text-4xl p-4">{first.title}</h1>
        <p className="text-center text-[color:var(--color-secondary)] bg-[color:var(--color-tertiary)] p-4">
          {first.excerpt}
        </p>
        <div className="flex flex-col items-center justify-center m-2">
          <Image
            src={first.thumbnail_url || ""}
            width={495}
            height={495}
            alt="8Bit Auto"
          />
          <p className="w-2/4 text-center text-[color:var(--color-secondary)] bg-[color:var(--color-tertiary)] p-2 text-lg ">
            {first.current_bid_formatted}
          </p>
          <p className="w-2/4 text-center text-[color:var(--color-secondary)] bg-[color:var(--color-tertiary)] p-2 mt-2">
            Similar cars
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {rest.map(
            (car: { title: string; thumbnail_url: string }, i: number) => (
              <div key={i} className="m-2 cursor-pointer">
                <Image
                  src={car.thumbnail_url || ""}
                  onClick={() => clickOnCar(car)}
                  width={112}
                  height={100}
                  alt="8Bit Auto"
                />
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
