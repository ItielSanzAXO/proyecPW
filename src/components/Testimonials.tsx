import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png", //cambiar a imagen
    name: "Bones Black",
    userName: "@BonesB17",
    comment: "Es asombroso!",
  },
  {
    image: "https://github.com/shadcn.png", //cambiar a imagen
    name: "Johs Dun",
    userName: "@JohsDun1",
    comment:
      "Me encanta, es muy facil de usar y muy intuitivo.",
  },
  {
    image: "https://github.com/shadcn.png", //cambiar a imagen
    name: "Ozz",
    userName: "@OzzLover",
    comment:
      "Fue un encanto darle vida a Xolo, espero que les guste tanto como a mi. Es un proyecto que me ha llenado de alegria"
      +"pesar de los retos que se presentaron. Gracias a todos los que me apoyaron en este proceso.",    
  },
  {
    image: "https://github.com/shadcn.png", //cambiar a imagen
    name: "P4z0s",
    userName: "@P4z0sPunk",
    comment:
      "Todo el juego es una maravilla, lo recomiendo a todos. No puedo esperar mas para verlo terminado.",
  },
  {
    image: "https://github.com/shadcn.png", //cambiar a imagen
    name: "Rosse",
    userName: "@Rosse_12",
    comment:
      "Fan de la primera hora, me encanta el juego y todo lo que han hecho con el. Es un proyecto increible y estoy muy emocionada por verlo terminado.",
  },
  {
    image: "https://github.com/shadcn.png", //cambiar a imagen
    name: "Canelo",
    userName: "@CaneloKing",
    comment:
      "Es mejor que ver al america robarse el campeonato. Me encanta el juego y todo lo que han hecho con el. Es un proyecto increible y estoy muy emocionado por verlo terminado.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Existe el
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Amor{" "}
        </span>
        a primera vista
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Conoce lo que nuestros usuarios piensan de nosotros
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
