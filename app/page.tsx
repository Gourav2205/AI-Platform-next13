import Image from 'next/image'
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <main>
      <h1 className='text-6xl text-green-500'>Hello</h1>
      <Button variant="default" className='mx-3 my-3'>Click me</Button>
    </main>
  )
}
