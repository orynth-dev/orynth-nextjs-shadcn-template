'use client'

import { solanaWeb3JsAdapter, projectId, networks } from '../config'
import { createAppKit } from '@reown/appkit/react'
import React, { type ReactNode } from 'react'

const metadata = {
  name: 'Orynth Website Builder',
  description: 'Orynth Website Builder with Solana Support',
  url: 'https://orynth.com',
  icons: ['https://orynth.com/icon.png']
}

let modal: any = null

try {
  modal = createAppKit({
    adapters: [solanaWeb3JsAdapter],
    projectId,
    networks,
    metadata
  })
} catch (error) {
  console.warn('AppKit initialization failed:', error)
}

export { modal }

function ContextProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}

export default ContextProvider