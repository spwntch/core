# Spawntech's Tailwind default

## Introduction

Spawntech's Tailwind default is a library that provides a set of pre-configured styles and components based on the Tailwind CSS framework. It aims to simplify the process of setting up and customizing Tailwind CSS for your projects.

## Features

- Pre-configured Tailwind CSS setup
- Ready-to-use utility classes
- Customizable color palette
- Responsive design support
- works with all Spawntech component libraries.

## Getting Started

1. Install the package

```
npm i @spwntch/tailwind
```

2. Consume the presets

```
// tailwind.config.js (in an nx monorepo)

const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spwntch/tailwind/presets')],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],

  plugins: [],
};

};


```

3. Consume the styles

```
// global.css (in a next.js app)

@Import '@spwntch/tailwind/styles';


```
