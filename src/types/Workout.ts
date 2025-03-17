export default interface Workout {
    id: string,
    plan: string | null,
    name: string | null,
    description: string | null,
    sets: number | null,
    reps: number | null,
    duration: string | null,
    userid: string | null,
    date: Date | string,
}