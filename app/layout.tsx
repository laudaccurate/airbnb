import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";

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
				<ToasterProvider />
				<RegisterModal />
				<LoginModal />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
