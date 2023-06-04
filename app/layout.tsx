import Modal from "./components/modals/Modal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

export const metadata = {
	title: "Airbnb",
	description: "Airbnb",
};

const font = Nunito({
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<Modal
					isOpen
					title="Login"
					actionLabel="Submit"
					secondaryActionLabel="Rgister"
				/>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
