import * as React from "react";
import { motion, useTransform } from "framer-motion";
import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
  ReviewStars,
  useContainerScrollContext,
} from "@/components/ui/animated-cards-stack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import bogdanPhoto from "@/assets/bogdan_lamatic.webp";
import stefanPhoto from "@/assets/stefan.webp";
import mihaelaPhoto from "@/assets/mihaela.webp";
import mateiPhoto from "@/assets/matei.webp";
import ancaPhoto from "@/assets/anca-b.webp";

const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Bogdan L.",
    profession: "Avocat, București",
    rating: 5,
    description:
      "De când sunt în Top 3 pe Google Maps, primesc de 3 ori mai multe apeluri de la clienți noi. Colegii avocați mă întreabă cum am reușit. Cea mai bună investiție făcută.",
    avatarUrl: bogdanPhoto,
  },
  {
    id: "testimonial-2",
    name: "Mihaela P.",
    profession: "Proprietar Clinică Medicală",
    rating: 5,
    description:
      "Sincer, nu credeam că o să ajung pe prima pagină în Google Maps atât de repede. M-am înșelat. Pacienții ne găsesc imediat, programările au explodat. Mulțumesc echipei ❤️❤️❤️",
    avatarUrl: mihaelaPhoto,
  },
  {
    id: "testimonial-3",
    name: "Matei R.",
    profession: "Medic, Piatra Neamț",
    rating: 5,
    description:
      "Eram invizibil pe Google Maps. Acum sunt pe locul 1 în orașul meu și pacienții vin direct din căutări. Echipa e de nota 10, rezultatele s-au văzut rapid !!",
    avatarUrl: mateiPhoto,
  },
  {
    id: "testimonial-4",
    name: "Anca B.",
    profession: "Manager Clinică Cluj",
    rating: 5,
    description:
      "Prețul e corect, rezultatele au venit rapid și suntem acum în Top 3 pe Google Maps. Am recomandat deja 3 prieteni. Dacă vrei clienți din căutări locale, aici e alegerea.",
    avatarUrl: ancaPhoto,
  },
  {
    id: "testimonial-5",
    name: "Stefan B.",
    profession: "Owner Coffee Shop",
    rating: 5,
    description:
      "Super tare!! Din prima lună am ajuns pe locul 2 în Google Maps. Acum clienții ne găsesc instant când caută cafenele în zonă. Recomand cu încredere 🤗",
    avatarUrl: stefanPhoto,
  },
];

const ScrollFadeHeader = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useContainerScrollContext();
  const opacity = useTransform(scrollYProgress, [0.65, 0.85], [1, 0]);

  return (
    <motion.div className="sticky top-0 pt-16 md:pt-24 lg:pt-32 pb-[120px]" style={{ opacity }}>
      {children}
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="bg-background border-t border-border px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <ContainerScroll className="h-[250vh]">
          <ScrollFadeHeader>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center">
                <p className="text-brand uppercase tracking-widest text-sm font-bold mb-4">
                  Testimoniale
                </p>
                <h2 className="font-display text-3xl sm:text-5xl md:text-7xl uppercase text-foreground">
                  Ce spun clienții noștri
                </h2>
              </div>
            </motion.div>
          </ScrollFadeHeader>
          <CardsContainer className="h-[50vh] w-full max-w-xl z-20">
            {TESTIMONIALS.map((testimonial, index) => (
              <CardTransformed
                key={testimonial.id}
                index={index}
                arrayLength={TESTIMONIALS.length}
                variant="dark"
                incrementY={12}
                incrementZ={10}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <ReviewStars rating={testimonial.rating} />
                  <p className="text-foreground text-lg leading-relaxed">
                    {testimonial.description}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border border-border">
                    <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                    <AvatarFallback className="bg-brand/20 text-brand text-sm font-bold">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-foreground font-bold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.profession}
                    </p>
                  </div>
                </div>
              </CardTransformed>
            ))}
          </CardsContainer>
        </ContainerScroll>
      </div>
    </section>
  );
};

export default TestimonialsSection;
