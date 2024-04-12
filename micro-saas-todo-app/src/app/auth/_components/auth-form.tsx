
'use client'

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react";
import { toast } from "sonner"

export  function AuthForm() {
  const form = useForm()
  
  const handleSubmit = form.handleSubmit( async (data) =>{
try {
  console.log(data)
  await signIn("email",{email: data.email})
  

  toast({
    title: "Email Sent",
    description: "Please check your email for the magic link",
    status: "success",
    duration: 3000,
    isClosable: true,
  })
  
} catch (error) {
  
}
  })
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="text-center space-y-1">
        <CardTitle className="text-3xl font-bold">Login</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" {...form.register('email')} />
          </div>
          <Button className="w-full" type="submit">Send Magic Link</Button>
        </form>
      </CardContent>
    </Card>
  )
}

// parei em 15:21