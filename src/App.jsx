import { useEffect, useState } from "react"
import Header from "./components/Header"
import RecipeCard from "./components/RecipeCard"
import Loading from "./components/Loading"

function App() {
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const getRecipes = async () => {
      setIsLoading(true)

      try {
        const res = await fetch('https://brianetoon.github.io/json-data/recipes.json')

        if (!res.ok) {
          throw new Error('failed to fetch the data')
        }
  
        await new Promise(resolve => setTimeout(resolve, 2000))
  
        const data = await res.json()
        setRecipes(data.recipes)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    getRecipes()
  }, [])

  return (
    <div className="px-8">
      <Header />
      <main>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map(recipe => (
              <RecipeCard recipe={recipe} key={recipe.id} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
