export default interface WorkoutPlan {
    id: string,
    userId: string,
    goalId: string,
    name: string | null,
    active: boolean
}