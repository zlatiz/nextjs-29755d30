import React from "react";
import Image from "next/image";
import Card from "../components/ui/card";
import Button from "../components/ui/button";

interface Img {
  src: string;
  alt: string;
}

const IMAGES: Img[] = [
  { src: "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png", alt: "Garber Bros logo" },
  { src: "https://garberbrosinc.com/websites/garberbrosinc/images/home-vessels.jpg", alt: "Home vessels" },
  { src: "https://garberbrosinc.com/websites/garberbrosinc/images/home-employment.jpg", alt: "Employment" },
  { src: "https://garberbrosinc.com/websites/garberbrosinc/images/home-contact.jpg", alt: "Contact" },
  { src: "https://garberbrosinc.com/;%20%20%20%20%20%20%20%20//if%20we%20have%20the%20properties%20from%20the%20settings%20we%20pass%20them%20in%20and%20set%20up%20the%20resizer%20%20%20%20%20%20%20%20%20%20%20%20%20content%20=%20content%20+", alt: "Support script url 1" },
  { src: "https://garberbrosinc.com/;%20%20%20%20%20%20%20%20//if%20we%20have%20the%20properties%20from%20the%20settings%20we%20pass%20them%20in%20and%20set%20up%20the%20resizer%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20content%20=%20content%20+", alt: "Support script url 2" },
  { src: "https://garberbrosinc.com/%27/Images/Transparent.html", alt: "Transparent" }
];

export default function Page(){
  const images = Array.isArray(IMAGES) ? IMAGES : [];
  const heroImage = images[1];

  return (
    <div className="space-y-12 py-12">
      <section className="pt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <h1 className="text-4xl font-bold">Garber Bros Inc</h1>
            <p className="mt-4 text-gray-700">For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry. We pride ourselves on supplying the absolute best marine services to all types of industries. Contact Garber Bros Inc. for all your marine transportation and service needs.</p>
            <div className="mt-6">
              <Button href="/vessels">View Our Fleet of Vessels</Button>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-md border border-border overflow-hidden bg-gray-50 aspect-[16/9]">
              {heroImage && (
                (() => {
                  const safeSrc = encodeURI(heroImage.src);
                  return <Image src={safeSrc} alt={heroImage.alt} width={1200} height={675} className="object-cover w-full h-full" unoptimized />;
                })()
              )}
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <a href="javascript:previousSlide6347994()">Prev</a>
              <a href="javascript:nextSlide6347994()">Next</a>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="features" className="">
        <h2 id="features" className="text-2xl font-semibold">Highlights</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card>
            <div className="aspect-[4/3] bg-gray-100 rounded-md overflow-hidden">
              {(() => {
                const safeSrc = encodeURI(images[1].src);
                return <Image src={safeSrc} alt={images[1].alt} width={600} height={450} className="object-cover w-full h-full" unoptimized />;
              })()}
            </div>
            <h3 className="mt-4 font-semibold">Our Vessels</h3>
            <p className="mt-2 text-gray-700">Garber Bros Inc has an elite fleet of vessels of use in all types of projects.</p>
            <a href="/vessels" className="mt-4 inline-block text-primary font-medium">View Our Vessels »</a>
          </Card>

          <Card>
            <div className="aspect-[4/3] bg-gray-100 rounded-md overflow-hidden">
              {(() => {
                const safeSrc = encodeURI(images[2].src);
                return <Image src={safeSrc} alt={images[2].alt} width={600} height={450} className="object-cover w-full h-full" unoptimized />;
              })()}
            </div>
            <h3 className="mt-4 font-semibold">Employment</h3>
            <p className="mt-2 text-gray-700">Interested in working at Garber Bros? Download our employment application.</p>
            <a href="/websites/garberbrosinc/images/application.pdf" className="mt-4 inline-block text-primary font-medium">View Our Employment Application »</a>
          </Card>

          <Card>
            <div className="aspect-[4/3] bg-gray-100 rounded-md overflow-hidden">
              {(() => {
                const safeSrc = encodeURI(images[3].src);
                return <Image src={safeSrc} alt={images[3].alt} width={600} height={450} className="object-cover w-full h-full" unoptimized />;
              })()}
            </div>
            <h3 className="mt-4 font-semibold">Contact Us</h3>
            <p className="mt-2 text-gray-700">To contact Garber Bros Inc regarding vessel availability, click here.</p>
            <a href="/contact" className="mt-4 inline-block text-primary font-medium">Contact Garber Bros Inc »</a>
          </Card>
        </div>
      </section>

      <section aria-labelledby="gallery">
        <h2 id="gallery" className="text-2xl font-semibold">Image Gallery</h2>
        <p className="mt-2 text-gray-600">Photographic elements from the original site and supporting assets.</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {images.slice(0,6).map((img, idx) => {
            return (
              <div key={idx} className="rounded-md border border-border overflow-hidden bg-gray-50">
                {(() => {
                  const safeSrc = encodeURI(img.src);
                  return <Image src={safeSrc} alt={img.alt} width={600} height={400} className="object-cover w-full h-full" unoptimized />;
                })()}
              </div>
            );
          })}
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium">More Images</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.slice(6).map((img, idx) => {
              return (
                <div key={idx} className="rounded-md border border-border p-4 flex items-center gap-4 bg-white">
                  <div className="w-32 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                    {(() => {
                      const safeSrc = encodeURI(img.src);
                      return <Image src={safeSrc} alt={img.alt} width={320} height={200} className="object-cover w-full h-full" unoptimized />;
                    })()}
                  </div>
                  <div className="text-gray-700">{img.alt}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="extras" className="pb-12">
        <h2 id="extras" className="text-2xl font-semibold">Resources & Links</h2>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <a href="/" className="text-blue-600">Home</a><br />
            <a href="/about" className="text-blue-600">About Us</a><br />
            <a href="/lock-status" className="text-blue-600">Lock Status</a><br />
            <a href="/vessels" className="text-blue-600">Vessels</a><br />
            <a href="/barges" className="text-blue-600">Barges</a><br />
            <a href="/websites/garberbrosinc/images/application.pdf" className="text-blue-600">Employment</a><br />
            <a href="/contact" className="text-blue-600">Contact Us</a>
          </div>

          <div>
            <a href="http://www.goodhiring.com/garberbrosinc/apply/open" className="text-blue-600">GoodHiring Apply</a><br />
            <a href="contact.aspx" className="text-blue-600">contact.aspx</a><br />
            <a href="/transparency-in-coverage" className="text-blue-600">Transparency in Coverage</a><br />
            <a href="#">Back to top anchor</a>
          </div>
        </div>
      </section>
    </div>
  );
}
