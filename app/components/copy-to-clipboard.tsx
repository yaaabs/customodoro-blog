"use client";

import { useState } from "react";
import CheckIcon from "./icons/check-icon";
import ClipboardIcon from "./icons/clipboard-icon";

export default function CopyToClipboard({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      if (typeof globalThis.navigator !== "undefined" && globalThis.navigator.clipboard) {
        await globalThis.navigator.clipboard.writeText(code);
        setCopied(true);
      }
    } catch {
      // Silent error handling - user will see copy button remain unchanged
    } finally {
      if (typeof globalThis.setTimeout !== "undefined") {
        globalThis.setTimeout(() => {
          setCopied(false);
        }, 2000);
      }
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="text-[#646464] hover:text-[#c4c4c4] transition-colors duration-200 ease-in-out"
    >
      {copied ? <CheckIcon /> : <ClipboardIcon />}
    </button>
  );
}
