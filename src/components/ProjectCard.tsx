
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  imageSrc, 
  tags, 
  liveUrl, 
  repoUrl, 
  featured = false 
}: ProjectCardProps) => {
  return (
    <Card className={`overflow-hidden card-hover ${featured ? 'border-primary/50' : ''}`}>
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-primary hover:bg-primary/80">Featured</Badge>
          </div>
        )}
      </div>
      <CardHeader className="p-4 pb-0">
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        {liveUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1">
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </a>
          </Button>
        )}
        {repoUrl && (
          <Button variant="outline" size="sm" asChild className={!liveUrl ? "ml-auto" : ""}>
            <a href={repoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1">
              <Link className="h-4 w-4" />
              <span>Source</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
