"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator"

import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import FileUploader from "./FileUploader";
import { signOutUser } from "@/lib/actions/user.actions";

interface Props {
  avatar: string;
  fullName: string;
  email: string;
  $id: string;
  accountId: string;
}

const MobileNavigation = ({$id:ownerId,accountId,fullName,avatar,email}: Props) => {

  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  return (
    <header className="mobile-header">
      <Image
        src="/assets/icons/logo-full-brand.svg"
        alt="logo"
        width={120}
        height={52}
        className="h-auto"
      />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="h-auto"
          />
        </SheetTrigger>
        <SheetContent className="shad-sheet h-screen px-3">
          <SheetHeader>
            <SheetTitle>
              <div className="header-user">
                <Image
                  src="/assets/images/avatar.png"
                  alt="user"
                  width={24}
                  height={24}
                  className="header-user-avatar"
                />

                <div className="sm:hidden lg:block">
                  <p className="subtitle-2 capitalize flex ml-2">{fullName}</p>
                  <p className="caption flex ml-2">{email}</p>
                </div>
              </div>
              <Separator className="mb-2 bg-light-200/20" />
            </SheetTitle>
            <nav className="mobile-nav">
              <ul className="mobile-nav-list">
                {navItems.map(({ url, name, icon }) => (
                  <Link href={url} key={name} className="lg:w-full">
                    <li
                      className={cn(
                        "mobile-nav-item",
                        pathname === url && "shad-active"
                      )}
                    >
                      <Image
                        src={icon}
                        alt={name}
                        width={24}
                        height={24}
                        className={cn(
                          "nav-icon",
                          pathname === url && "nav-icon-active"
                        )}
                      />
                      <p>{name}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
            <Separator className="my-5 bg-light-200/20" />
            <div className="flex flex-col justify-between gap-5pb-5">
              <FileUploader ownerId={ownerId} accountId={accountId} />
              <Button
                type="submit"
                className="sign-out-button mt-4"
                onClick={async () => await signOutUser()}
              >
                <Image
                  src="/assets/icons/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
                <p>Logout</p>
              </Button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNavigation;
