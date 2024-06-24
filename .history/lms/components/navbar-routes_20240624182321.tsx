"user client";

import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

export const NavbarRoutes = () => {
    const pathname = usePathname();
    const router = useRouter();
    const isTeacherPage = pathname?.startsWith("/teacher");
    return (
        <div className="flex gap-x-2 ml-auto">
            <UserButton />
        </div>
    )
}