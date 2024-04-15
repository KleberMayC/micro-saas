import { auth } from "@/services/auth"
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar"


export default async function page() {
  const session = await auth()
  return (
    <main className="flex items-center justify-center">
      <div>
        <Avatar > 
          <AvatarFallback>U</AvatarFallback> 
         </Avatar>
        <span>{session?.user?.email}</span>
      </div>
      <h1 className="text-3xl font-bold">Hello, {session?.user?.email}</h1>
    </main>
  )
}
