import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UserButton } from "@clerk/nextjs";

const page = () => {
    return (
        <div>
            Landing page (protected)
            <div>
                <Link href="/sign-in">
                    <Button>
                        Login
                    </Button>
                </Link>
                <Link href="/sign-in">
                    <Button>
                        Register
                    </Button>
                </Link>
                <Link href="/dashboard">
                    <Button>
                        Dashboard
                    </Button>
                </Link>
            </div>
            <UserButton />
        </div>
    )
}

export default page
