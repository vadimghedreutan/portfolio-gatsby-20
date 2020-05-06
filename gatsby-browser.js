import React from "react"

import { GlobalProvider } from "./src/context/globalContext"

// Load Oswald typeface
require('typeface-oswald');

export const wrapRootElement = ({ element }) => {
  return <GlobalProvider>{element}</GlobalProvider>
}