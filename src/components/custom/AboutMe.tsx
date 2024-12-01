import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function AboutMe() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <p>
          Hi, I&apos;m Josh Gdovin—a seasoned Web Application Engineer & DevOps
          professional with a passion for implementing best practices and
          enhancing the developer experience.
        </p>
        <p>
          With a background in cloud architecture and infrastructure automation,
          I strive to build scalable and efficient systems.
        </p>
        <p>
          Outside of work, I&apos;m an avid hiker, snowboarder, and disc golf
          enthusiast. I also have a deep love for animals, especially ferrets
          and cats. Welcome to my blog, where I share insights on Technology,
          Devops, Engineering and more!
        </p>
      </CardContent>
    </Card>
  );
}
