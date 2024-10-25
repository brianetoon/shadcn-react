import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "./ui/card"

export default function RecipeCard({ recipe }) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex-row gap-4 items-center">
        {/* avatar */}
        <div>
          <CardTitle>{recipe.title}</CardTitle>
          <CardDescription>{recipe.time} to cook.</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p>{recipe.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <button>View Recipe</button>
        {recipe.vegan && <p>Vegan!</p>}
      </CardFooter>
    </Card>
  )
}
