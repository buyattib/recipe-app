import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'

export default function Layout({ children }: { children?: React.ReactNode }) {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	)
}
