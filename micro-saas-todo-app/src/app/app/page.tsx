
import { auth } from "@/services/auth"
import { UserInfo } from "./_components/user-infox"




export default async function page() {
  const session = await auth()
  return (
    <main className="flex items-center justify-center">
      <UserInfo user={session?.user}/>
     
    </main>
  )
}
