import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "¿Cuál fue tu experiencia con los metaQuets?",
    answer: "Una experiencia increíble, me sentí realmente en los lugares que escogía",
    value: "item-1",
  },
  {
    question: "¿Qué te pareció la visita guiada con nuestros amigos el xolo y la serpiente emplumada?",
    answer:
      "Maravilloso, me encantó que metieran algo emblemático de la cultura, me gustó muchísimo el diseño de la serpiente, incluso sentía que podía abrazarla",
    value: "item-2",
  },
  {
    question:
      "¿Qué lugar incluirias en un futuro?",
    answer:
      "El santuario de las mariposas quizá, ya viendo y sintiendo la experiencia, creo que sería un lugar increíble poder verlo con los lentes",
    value: "item-3",
  },
  {
    question: "¿Te gustaría ver más proyectos como estos?",
    answer: "Definitivamente, es para todas las edades, es educativo y puedes viajar de una forma nueva y que te hace sentir como si estuvieras ahí, me encantaría saber hasta donde se puede llegar este proyecto en un futuro",
    value: "item-4",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Preguntas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Frecuentes
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        ¿Te gustaria preguntarnos?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contactanos
        </a>
      </h3>
    </section>
  );
};
