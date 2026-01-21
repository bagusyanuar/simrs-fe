import type { RouteObject } from 'react-router-dom'
import { AuthRoutes } from './modules/auth.routes'

export const AppRoutes: RouteObject[] = [
    ...AuthRoutes
]