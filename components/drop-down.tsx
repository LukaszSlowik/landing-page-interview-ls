import React from "react";
import * as Dropdown from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { list } from "postcss";
type Props = {
  children?: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  //scroll: boolean;
  trigger: React.ReactNode;
};

const DropDownRadix = ({ children, open, setOpen, trigger }: Props) => {
  return (
    <Dropdown.Root open={open} onOpenChange={setOpen} modal={false}>
      <Dropdown.Trigger asChild>{trigger}</Dropdown.Trigger>
      <Dropdown.Portal>
        <Dropdown.Content className="relative z-[999] focus-visible:outline-none">
          {children}
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  );
};
DropDownRadix.Item = Dropdown.Item;

export default DropDownRadix;
