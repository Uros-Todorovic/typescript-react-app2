import { type FC, type PropsWithChildren /* type ReactNode */ } from 'react';

/* interface CourseGoalProps {
	title: string;
	children: ReactNode;
} */

type CourseGoalProps = PropsWithChildren<{ id: number; title: string; onDelete: (id: number) => void }>;

const CourseGoal: FC<CourseGoalProps> = ({ id, title, onDelete, children }) => {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				<p>{children}</p>
				<button onClick={() => onDelete(id)}>Delete</button>
			</div>
		</article>
	);
};

export default CourseGoal;
