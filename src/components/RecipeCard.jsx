import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card"

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function RecipeCard({ recipe }) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex-row gap-4 items-center">
        <Avatar>
          <AvatarImage src={`/img/${recipe.image}`} />
          <AvatarFallback>
            {recipe.title.slice(0,2)}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{recipe.title}</CardTitle>
          <CardDescription>{recipe.time} min to cook</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p>{recipe.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>View Recipe</Button>
        {recipe.vegan && <Badge variant="secondary">Vegan!</Badge>}
      </CardFooter>
    </Card>
  )
}
