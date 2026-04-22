"use client"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col p-6">
      {/*minimal top bar*/}
      <div className="h-12 w-full p-2">
        <h1 className="text-2xl sm:text-5xl">Rem.ai</h1>
      </div>
      {/*Message/history area*/}
      <div className="flex-1"></div>
      {/*Input bar*/}
      <div className="h-auto w-full">
        <Textarea className="pr-12"></Textarea>
        <ArrowRight color="light" />
      </div>
    </div>
  )
}
