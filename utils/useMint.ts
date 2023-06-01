import { useState } from "react";

export default function useMint() {
  const [isValidating, setIsValidating] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [error, setError] = useState(false);

  const mint = async () => {
    setIsValidating(true);

    const metadata = {};

    setIsMinting(true);
    setIsValidating(false);

    setIsMinting(false);
  };

  return {
    isValidating,
    isMinting,
    error,
    mint,
  };
}
