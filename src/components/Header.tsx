import { ReactNode } from 'react';

type HeaderProps = {
	image: {
		src: string;
		alt: string;
	};
	children: ReactNode;
};

const Header = ({ image, children }: HeaderProps) => {
	return (
		<header>
			<h1>{children}</h1>
			<img {...image} />
		</header>
	);
};

export default Header;
