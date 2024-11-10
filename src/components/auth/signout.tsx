import { signOut } from "@/auth"

export function SignOut() {
    return (
        <button onClick={async () => {
            "use server"
            await signOut()
        }}>Sign Out</button>
    )
}