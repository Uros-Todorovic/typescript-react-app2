import { type ReactNode } from 'react';
import { CourseGoal as CourseGoalType } from '../App.tsx';
import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox.tsx';

type CourseGoalProps = {
	goals: Array<CourseGoalType>;
	onDelete: (id: number) => void;
};

const CourseGoalList = ({ goals, onDelete }: CourseGoalProps) => {
	if (goals.length === 0) {
		return <InfoBox mode="hint">You have no course goals yet, start adding them.</InfoBox>;
	}

	let warningBox: ReactNode;

	if (goals.length >= 4) {
		warningBox = (
			<InfoBox mode="warning" severity="high">
				You are collecting too many goals
			</InfoBox>
		);
	}

	return (
		<>
			{warningBox}
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
		</>
	);
};

export default CourseGoalList;
