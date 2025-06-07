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
