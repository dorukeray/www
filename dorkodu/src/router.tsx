/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */

import React, { Suspense } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom'
import CenterLoader from '#/components/loaders/CenterLoader'
import { util } from '#/lib/util'
import App from './App'

import Auth from './components/util/AuthRoute'

function view(path: string) {
  const [folder, file] = path.split(':')

  return suspenseLoader(
    React.lazy(util.wait(() => import(`./views/${folder}/${file}.tsx`)))
  )
}

function layout(path: string) {
  return suspenseLoader(
    React.lazy(util.wait(() => import(`./layouts/${path}.tsx`)))
  )
}

function suspenseLoader(
  Component: React.LazyExoticComponent<React.ComponentType<any>>
) {
  return (
    <Suspense fallback={<CenterLoader />}>
      <Component />
    </Suspense>
  )
}

let isLoggedIn: boolean = true

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={view('flow:Error')}>
      <Route element={layout('WebsiteLayout')}>
        <Route index path="/" element={view('website:Welcome')} />

        <Route path="/about" element={view('website:About')} />

        <Route path="/legal/:document" element={view('website:Legal')} />

        <Route path="/404" element={view('website:NotFound')} />
      </Route>

      {/* User Flow */}
      <Route path="/join" element={view('flow:CreateAccount')} />
      <Route path="/error" element={view('flow:Error')} />

      {/* Error routes & catch all */}
      <Route path="*" element={view('website:NotFound')} />
    </Route>
  )
)