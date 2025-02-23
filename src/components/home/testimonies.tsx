"use client";

import type { Testimony } from "@/models/testimony";

import useEmblaCarousel from "embla-carousel-react";

const testimonies: Testimony[] = [
  {
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget mauris vitae sem ultrices.",
    imgUrl: "/images/testimony1.jpg",
  },
  {
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget mauris vitae sem ultrices.",
    imgUrl: "/images/testimony1.jpg",
  },
  {
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget mauris vitae sem ultrices.",
    imgUrl: "/images/testimony1.jpg",
  },
  {
    name: "Jane Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget mauris vitae sem ultrices.",
    imgUrl: "/images/testimony1.jpg",
  },
  {
    name: "Alice Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget mauris vitae sem ultrices.",
    imgUrl: "/images/testimony1.jpg",
  },
];

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
 

function Testimonies() {
  return (
    <>
      <h2 className="text-center mt-10">Ce que disent nos clients</h2>
      <Carousel
        className="container mx-auto bg-[url('/images/world-map.svg')] bg-contain bg-center bg-no-repeat py-12"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {testimonies.map((testimony, index) => (
            <CarouselItem
              key={index}
              className="grid grid-cols-1 gap-4 pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="bg-gray-400/5 rounded-lg sqa shadow-md border-0">
                  <CardContent className="flex flex-col items-center  justify-center gap-4 p-4">
                    <img
                      className="w-20 h-20 rounded-full"
                      src={testimony.imgUrl}
                      alt={testimony.name}
                    />
                    <p className="text-center">{testimony.description}</p>
                    <h3>{testimony.name}</h3>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

//  function Testimonies() {
//   const [emblaRef] = useEmblaCarousel({ loop: true });

//   return (
//     <div className="embla mx-auto mt-12 h-56 max-w-lg border" ref={emblaRef}>
//       <div className="embla__container h-full">
//         <div className="embla__slide flex items-center justify-center ">Slide 1</div>
//         <div className="embla__slide flex items-center justify-center ">Slide 2</div>
//         <div className="embla__slide flex items-center justify-center ">Slide 3</div>
//       </div>
//     </div>
//   );
// }

// export default Testimonies;
// const Testimonies = () => {
//   const [emblaRef] = useEmblaCarousel();
//   return (
//     <>
//       <section className="flex flex-col items-center justify-center">
//         {/* <SectionIntroducer text="Quelques témoignages" /> */}
//         <h2>Ce que disent nos clients</h2>
//         <div
//           className="embla flex items-center min-h-[32em] bg-[url('/images/world-map.svg')] bg-contain bg-center bg-no-repeat"
//           ref={emblaRef}
//         >
//           <div className="embla__container flex gap-4">
//             {testimonies.map((testimony, index) => (
//               <div
//                 key={index}
//                 className=" embla__slide flex flex-col max-w-96 items-center gap-4 p-4 bg-gray-50/20 rounded-lg shadow-md"
//               >
//                 <img
//                   className="w-20 h-20 rounded-full"
//                   src={testimony.imgUrl}
//                   alt={testimony.name}
//                 />
//                 <p>{testimony.description}</p>
//                 <h3>{testimony.name}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

export default Testimonies;
