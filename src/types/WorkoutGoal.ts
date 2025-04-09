export default interface WorkoutGoal {
  id: string;
  name: string;
  description: string;
  userId: string;
  weightGoal: string;
  bodyFatGoal: string;
  beginDate: Date;
  endDate: Date;
}
