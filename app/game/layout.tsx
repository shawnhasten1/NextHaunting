import { Providers } from '../GlobalRedux/provider';

export default function GameLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <Providers>
            {children}
        </Providers>
    )
}