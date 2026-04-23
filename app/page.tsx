"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import { useRouter } from "next/navigation"
export default function Page() {
  const router = useRouter()
  return (
    <div className="no-scrollbar flex min-h-svh p-6">
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-12">
        <motion.div
          initial={{ filter: "blur(10px)", x: 10 }}
          animate={{ filter: "blur(0px)", x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full flex-row items-center justify-center"
        >
          <Image
            src={"/remainew.png"}
            width={200}
            height={200}
            className="scale-150"
            alt="an image of the rem.ai logo"
          />
          {/*<h1 className="text-5xl">Rem.ai</h1>*/}
        </motion.div>
        <div className="flex scale-100 flex-col items-center justify-center sm:scale-150">
          <motion.h2
            initial={{ filter: "blur(10px)", x: 20 }}
            animate={{ filter: "blur(0px)", x: 0 }}
            transition={{ duration: 1 * 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="sm:text-md text-sm text-gray-300"
          >
            ultimate motivation from Rem,
          </motion.h2>
          <motion.h3
            initial={{ filter: "blur(10px)", x: 20 }}
            animate={{ filter: "blur(0px)", x: 0 }}
            transition={{ duration: 2 * 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm text-gray-300"
          >
            Rem helps you through the{" "}
            <span className="text-green-300">highs </span> and the{" "}
            <span className="text-yellow-300">lows</span>.
          </motion.h3>
        </div>
        <motion.div
          initial={{ filter: "blur(10px)", x: 20 }}
          animate={{ filter: "blur(0px)", x: 0 }}
          transition={{ duration: 3 * 0.5, ease: [0.22, 1, 0.36, 1] }}
          className=""
        >
          <Button
            onClick={() => router.push("/chat")}
            className="mt-4 scale-150"
          >
            Get started
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
