"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { MyDialog } from "../my-popup/my-dialog";
import { cn } from "@/lib/utils";
import AutoPresentation from "./auto-presentation";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const MyPresentationPopup = ({ open, setOpen }: Props) => {
  let [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, [client]);
  if (!client) return;
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {/* <Dialog.Trigger>test</Dialog.Trigger> */}
      <AnimatePresence>
        {open && (
          <MyDialog key="dialog">
            <div
              onClick={() => {
                setOpen(false);
              }}
              className="fixed right-2 top-2  cursor-pointer text-dark hover:opacity-60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </div>
            <div className={cn(`p-4 sm:min-w-[300px]`)}>
              <AutoPresentation />
            </div>
          </MyDialog>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default MyPresentationPopup;
