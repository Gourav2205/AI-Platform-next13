import Image from 'next/image'
import { Button } from "@/components/ui/button"


export default function Home() {
    return (
        <main>
            <Button variant="default" className='mx-3 my-3'>Click me</Button>
        </main>
    )
}