# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Getting Started

### Prerequisites

To run this project you need the following installed:

- [Node 20.9.0](https://nodejs.org/) 

### Setup

Clone this repository to your desired folder:

```bash
git clone https://github.com/Ehigiepaul01/switchhive.git
```

Install project dependencies:
```bash
cd switchhive-dashboard
npm install
```

Run development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

<!-- CONTRIBUTING -->

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### Contribution Guidelines

1. Clone the repo `git clone  https://github.com/Ehigiepaul01/switchhive-dashboard`.
2. Create a new branch from the `dev` branch `git checkout -b Feat/{feature you're working on}`
3. Make sure your branch is up to date with the `dev` branch: `git pull origin dev`
4. After making changes, do `git add .`
5. Commit your changes with a descriptive commit message: `git commit -m "your commit message"`.
6. To make sure there are no conflicts, run `git pull origin dev`.
7. Push changes to your new branch, run `git push -u origin Feat/{feature you're working on}`.
8. Create a pull request to the `dev` branch not `main`.
9. Ensure to describe your pull request.

### _Commit CheatSheet_

| Type     |                          | Description                                                                                                 |
| -------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| feat     | Features                 | A new feature you're adding                                                                                              |
| fix      | Bug Fixes                | A bug fix                                                                                                   |
| docs     | Documentation            | Documentation only changes                                                                                  |
| style    | Styles                   | Features and updates relating to styling                                                                   |
| refactor | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
| perf     | Performance Improvements | A code change that improves performance                                                                     |
| test     | Tests                    | Adding missing tests or correcting existing tests                                                           |
| build    | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| chore    | Chores                   | Other changes that don't modify, frontend or test files                                                    |
| revert   | Reverts                  | Reverts a previous commit                                                                                   |

> _Sample Commit Messages_

- `feat: Added plugin info endpoints` := `feat` is used here because the feature was non-existent before the commit.


