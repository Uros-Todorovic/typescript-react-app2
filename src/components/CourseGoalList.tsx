import { CourseGoal as CourseGoalType } from '../App.tsx';
import CourseGoal from './CourseGoal';

type CourseGoalProps = {
	goals: Array<CourseGoalType>;
	onDelete: (id: number) => void;
};

const CourseGoalList = ({ goals, onDelete }: CourseGoalProps) => {
	return (
		<ul>
			{goals.map((goal) => {
				const { id, title, description } = goal;
				return (
					<li key={id}>
						<CourseGoal id={id} title={title} onDelete={onDelete}>
							{description}
						</CourseGoal>
					</li>
				);
			})}
		</ul>
	);
};

export default CourseGoalList;
