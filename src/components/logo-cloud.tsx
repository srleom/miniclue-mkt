import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";

const logos = [
  {
    src: "/logo/ntu_logo.png",
    alt: "NTU Logo",
  },
  {
    src: "/logo/nus_logo.png",
    alt: "NUS Logo",
  },
  {
    src: "/logo/smu_logo.png",
    alt: "SMU Logo",
  },
  {
    src: "/logo/oxford_logo.svg",
    alt: "Oxford Logo",
  },
  {
    src: "/logo/cambridge_logo.png",
    alt: "Cambridge Logo",
  },
];

export default function LogoCloud() {
  return (
    <div className="bg-background overflow-hidden py-8">
      <div className="group relative m-auto max-w-7xl">
        <div className="flex w-full flex-col items-center md:flex-row">
          <div className="relative w-full py-6">
            <InfiniteSlider
              speedOnHover={20}
              speed={40}
              gap={112}
              className="w-full"
            >
              {logos.map((logo) => (
                <div className="flex" key={logo.src}>
                  <Image
                    className="mx-auto h-10 w-auto dark:invert"
                    src={logo.src}
                    alt={logo.alt}
                    width={400}
                    height={400}
                  />
                </div>
              ))}
            </InfiniteSlider>

            <ProgressiveBlur
              className="pointer-events-none absolute top-0 left-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute top-0 right-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />

            <div className="from-background absolute inset-y-0 left-0 w-20 bg-linear-to-r"></div>
            <div className="from-background absolute inset-y-0 right-0 w-20 bg-linear-to-l"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
