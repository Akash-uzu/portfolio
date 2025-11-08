import { useEffect, useRef } from "react";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const useBootSequence = (onComplete: () => void, messages: string[]) => {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const box = document.getElementById("loader-terminal");
    if (!box) return;

    const run = async () => {
      for (const line of messages) {
        const div = document.createElement("div");
        box.appendChild(div);

        for (let i = 0; i < line.length; i++) {
          div.innerHTML = line.slice(0, i + 1);
          await sleep(12);
        }

        await sleep(200);
        box.scrollTop = box.scrollHeight;
      }

      await sleep(400);
      onComplete();
    };

    run();
  }, [onComplete, messages]);
};
