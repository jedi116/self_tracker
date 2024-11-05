import { signIn } from "@/auth"

export function SignIn() {
    const handleSignIn = async (formData: FormData) => {
        "use server"
        await signIn("resend", formData)
    }
    return (
        <form
            action={handleSignIn}
        >
            <input type="text" name="email" placeholder="Email" />
            <button type="submit">Signin with Resend</button>
        </form>
    )
}