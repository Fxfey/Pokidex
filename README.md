# Pokédex (Original 151)

A web application that displays the original 151 Pokémon using the Pokenode-ts API. The app features clean UI and a component-based architecture.

## 🔍 Features

Core Requirements

-   Display the original 151 Pokémon
-   Pokémon are indexed from 0 to 151 via the API.

Pokemon Details Display
Each Pokémon card shows:

-   Number
-   Name
-   Type(s)
-   Image

Extended View on Click
Clicking on a Pokémon reveals more detailed information

## 🎨 Design & UI Guidelines

### Styling

Uses Styled Components
styled-components.com

Icons via Lucide
lucide.dev

Component-Based Approach

## 🛠️ Tech Stack & Setup

API: Pokenode-ts
Includes:

-   API request helpers
-   Strongly-typed responses
-   Caching via axios-cache-interceptor (enabled by default)

## Component setup

```
/Button
├── Button.tsx
└── Button.styled.tsx
```

Optional VSCode extension for IntelliSense:
styled-components.vscode-styled-components

## Reflections

### Component Setup

Initially using a separated approach for the component and styling seemed like a maintainable approach. After creating many blocks this way, it feels as if it created more bloat then actually required. Keeping the style within the block would be a more feasible approach for a project of this scale.

Also if a component required multiple areas of style for different components you can allow for that in one file. i.e. creating a block using flex with many different children.

I added the display of Pokemon Types using a better component approach and including creating a function which returns the required logo & color for pokemon types. The commit can be seen [here](https://github.com/Fxfey/Pokidex/commit/ce3d89384a362a1c683ba51291cec7241496bde5).

### Loading states

I decided to build out a separate Skeleton loader for the Pokedex grid as its own component, this is far from re-usable and maintainable. Instead a better approach would be to allow a loading state to to be passed to components which would not take any data - this would then populate the relevant areas which would require skeleton loaders.

### Reusability

The way this project has been setup hasn't aligned with future proofing too well, i.e the simpleView and AdvancedView for pokemon both call the `getPokemonByName` method. A better approach here would be to make a wrapper for this and handle the return data in the specific method instead.

This is also the time for Components we use like `<Title >` - this should of been created in a way which takes in arguments to determine sizing, style etc.
