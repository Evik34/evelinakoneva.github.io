import { createBrowserRouter } from "react-router-dom"

import Home from "./pages/Home"
import ProjectAI from "./pages/ProjectAI"
import ProjectCameras from "./pages/ProjectCameras"
import ProjectHogwarts from "./pages/ProjectHogwarts"

const router = createBrowserRouter([

{ path: "/", element: <Home/> },

{ path: "/ai-psychologist", element: <ProjectAI/> },

{ path: "/camera-catalog", element: <ProjectCameras/> },

{ path: "/hogwarts-system", element: <ProjectHogwarts/> }

])

export default router