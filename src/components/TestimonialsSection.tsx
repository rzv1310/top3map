import { motion } from "framer-motion";
import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
  ReviewStars,
} from "@/components/ui/animated-cards-stack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Bogdan L.",
    profession: "Avocat, București",
    rating: 5,
    description:
      "Site-ul meu e senzațional! Designul e foarte elegant, se încarcă rapid, iar colegii mei avocați sunt invidioși. Cea mai bună investiție făcută.",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
  },
  {
    id: "testimonial-2",
    name: "Mihaela P.",
    profession: "Proprietar Clinică Medicală",
    rating: 5,
    description:
      "Sincer, nu credeam că e posibil așa un site profi în 24 de ore. M-am înșelat. Totul arată exact cum mi-am dorit și funcționează perfect pe mobil. Mulțumesc Oana ❤️❤️❤️",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop",
  },
  {
    id: "testimonial-3",
    name: "Matei R.",
    profession: "Medic, Piatra Neamț",
    rating: 5,
    description:
      "Am avut site la cabinet ani de zile. Acum, după o singură zi, am unul de 10 ori mai bun, mai frumos și mai intuitiv pentru pacienții mei. O recomand cu drag pe Andreea, dar toată echipa e de nota 10 !!",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
  },
  {
    id: "testimonial-4",
    name: "Anca B.",
    profession: "Manager Clinică Cluj",
    rating: 5,
    description:
      "Prețul e corect, livrarea e rapidă și rezultatul e wow. Am recomandat deja 3 prieteni. Dacă vrei un site care aduce clienți, Oana e alegerea.",
    avatarUrl:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=200&auto=format&fit=crop",
  },
  {
    id: "testimonial-5",
    name: "Stefan B.",
    profession: "Owner Coffee Shop",
    rating: 5,
    description:
      "Super tare!! Mi-a luat ideea din cap și a făcut-o realitate exact cum mi-am imaginat. John e un adevărat vrăjitor pe partea tehnică la construit site-uri, răspunde repede și e un om de nota 10. Recomand 🤗",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-background border-t border-border py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10 md:mb-16">
            <p className="text-brand uppercase tracking-widest text-sm font-bold mb-4">
              Testimoniale
            </p>
            <h2 className="font-display text-3xl sm:text-5xl md:text-7xl uppercase text-foreground">
              Ce spun clienții noștri
            </h2>
          </div>
        </motion.div>

        <ContainerScroll className="h-[190vh]">
          <CardsContainer className="h-[50vh] w-full max-w-xl">
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
