# Shadcn + React (Vite) with JavaScript (no TypeScript)

This project is based on the Net Ninja's [Shadcn UI Crash Course](https://youtu.be/wcTzlJi2Oz4?si=gYwQexECAmyU_oeL) but uses just React (Vite) with JavaScript instead of NextJS and TypeScript. You can see a live demo of this project [here](https://brianetoon.github.io/shadcn-react/).

Each branch in this repository (lesson-1 through lesson-5) correspond to the five video lessons in the tutorial series. You can ignore the github pages related branches.

If you'd like the create your own project with Shadcn and React using Vite, follow the steps below.

## Steps to create your own project with Shadcn and React

**1. Create project**

- Start by creating a new React project using `vite`:

```bash
  npm create vite@latest
```

- When prompted to select a framework, choose React.

- When prompted to select a varaint, choose JavaScript.

- Navigate into your project directory and run `npm install`.

**2. Add Tailwind and its configuration**

- Install `tailwindcss` and its peer dependecnes, then generate your `tailwind.config.js` and `postcss.config.js` files:

```bash
  npm install -D tailwindcss postcss autoprefixer
  
  npx tailwindcss init -p
```

- Add this import header in your main css file, `src/index.css` in our case:

```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  /* ... */
```

- You can delete the `App.css` file if you like.

**3. Create and edit `jsconfig.json`**

- Create a file called `jsconfig.json` in the root directory of your project and add the following code:

```json
  {
    "compilerOptions": {
      "paths": {
        "@/*": ["./src/*"]
      }
    }
  }
```

**4. Update `vite.config.js`**

- Your `vite.config.js` file should look like this:

```js
  import path from "path"
  import react from "@vitejs/plugin-react"
  import { defineConfig } from "vite"
  
  export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  })
```

- **Note:** you will need to run `npm i -D @types/node` so you can import "path" without error

**5. Run the CLI**

- Run the shadcn-ui init command to set up your project:

```bash
  npx shadcn@latest init
```

**6. Configure components.json**

- You will be asked some questions to configure your `components.json` file.

**7. That's all! 🎉**

- Your React project is now up and running with shadcn-ui and Tailwind CSS.

- Try adding a component:

```bash
  npx shadcn@latest add button
```

- You should now have a `src/lib/utils.js` file.

- If you added any components they should be inside `src/components/ui`.

- Happy coding! 😁
