This repository demonstrates how to use plop.js to automate the creation of a consistent folder and file structure for components in a Design System. By setting up prompts, templates, and helpers, we ensure that each new component adheres to predefined standards, making it easier to maintain and scale your Design System.

Features

 • Folder Structure by Component Type: Components are organized as atoms, molecules, or organisms, following atomic design principles.
 • Automatic Namespacing: Each component is prefixed based on its type (e.g., a- for atoms, m- for molecules), ensuring consistent naming.
 • Customizable Templates: Each file is generated from a Handlebars template, including HTML and SCSS files that follow standard conventions.
 • Creation Date Helper: Automatically adds a creation date to files as metadata.

Installation

 1. Clone this repository:

 ```
  git clone <https://github.com/your-username/plop-component-generator.git>
```

```
  cd plop-component-generator
```

 2. Install dependencies:

```
  npm install
```

Usage

 1. To generate a new component, run:

 ```
npm run build
```

 2. You will be prompted to provide:
 • Component name (e.g., button)
 • Component type (atom, molecule, or organism)
 3. Based on your input, plop.js will generate a folder structure like:
src/components/atoms/a-button/
├── a-button.njk
├── index.scss
├── index.js
└── README.md

Configuration Details

 • Templates: Templates for HTML, SCSS, and README.md files are located in the plop-templates folder.
 • Helpers:
 • typeAbbreviation: Abbreviates component types (atom → a, molecule → m, organism → o).
 • creationDate: Inserts the current date into file templates for easy tracking.

Customization

You can further customize this setup by:

 • Adding more component types.
 • Including additional templates, like tests or documentation.
 • Modifying the file structure to suit your project’s specific needs.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Happy generating! 🎉

Let me know if there’s anything more you’d like to add.
