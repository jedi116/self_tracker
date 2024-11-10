import { signIn } from "@/auth"

export function SignIn() {
    const handleSignIn = async () => {
        "use server"
        await signIn("github")
    }
    return (
        <form
            action={handleSignIn}
        >
            <button type="submit">Signin with Resend</button>
        </form>
    )
}