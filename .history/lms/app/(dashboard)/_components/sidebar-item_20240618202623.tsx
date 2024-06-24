"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "utils/cn";

interface SidebarItemProps {
    icon:LucideIcon;
    label:string;
    href:string;
}


export const SidebarItem = ({
    icon: Icon,
    label,
    href,
}: SidebarItemProps) => {
    const pathname = usePathname();
    const router = useRouter();
    // This is more complicated, what do these things mean?
    const isActive = 
    (pathname ==="/"&&href=="/")||
    pathname===href||
    pathname?.startsWith(`${href}/`);

    const onClick = () => {
        router.push(href);
    }

    return (
        <button
        onClick={onClick}
        type="button"
        className="cn(
        "
    )
}