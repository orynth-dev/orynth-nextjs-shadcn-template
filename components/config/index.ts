import { solana } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "162f061fcc08eee3ed1840ff1717d8ef"

export const networks = [solana] as [AppKitNetwork, ...AppKitNetwork[]]

export const solanaWeb3JsAdapter = new SolanaAdapter()