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
