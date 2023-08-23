## Recipe app

Small FullStack app to practice and learn frontend and backend development.

The frontend is a React project initialized with viteJS.
The idea is to learn TypeScript, MUI, react-hook-form, zustand and wouter trying to implement some concepts of clean architecture.

The backend is made with python's fastAPI library.
This is pretty new to me and my aim is to learn data schemas with pydantic, sql databases (orm) with sql-alchemy and build an API to interact with from the
frontend.

To run the frontend:

-   [recipe-app-fullstack/frontend]$ pnpm dev

To run the backend (first activate virtual environment):

-   [recipe-app-fullstack/backend]$ uvicorn src.main:app --reload
