import { useEffect, useState } from "react"
import Header from "./components/Header"
import RecipeCard from "./components/RecipeCard"

function App() {
  const [recipes, setRecipes] = useState([])
  
  useEffect(() => {
    const getRecipes = async () => {
      const res = await fetch('http://localhost:4000/recipes')

      if (!res.ok) {
        throw new Error('failed to fetch the data')
      }

      const data = await res.json()
      setRecipes(data)
    }

    getRecipes()
  }, [])

  return (
    <>
      <Header />
      <main>
        <div className="grid grid-cols-3 gap-8">
          {recipes.map(recipe => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
