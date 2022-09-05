import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants"
import { usePostLikes } from "@/lib/usePostLikes"
import { LoadingDots } from "@/ui/LoadingDots"
import HeartIcon from "@heroicons/react/solid/HeartIcon"
import cx from "clsx"
import React from "react"

const emojis = ["👍", "🙏", "🥰"]

// A visual component that...
// 1. Fills a heart shape with a gradient depending on the number of likes passed
// 2. Animates a thank you emoji as the number of likes increase
export const LikeButton2 = ({ slug }: { slug: string }) => {
  const handleClick = () => {
  }

  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <button
          className={cx(
            "shadow-lgx group relative block transform overflow-hidden rounded-lg bg-gradient-to-tl from-white/5 to-white/30 p-1 transition-all duration-300 ease-out hover:scale-[1.2] hover:rounded-[10px] active:scale-100 active:rounded-lg",
            FOCUS_VISIBLE_OUTLINE,
          )}
          onClick={handleClick}
        >
          <div
            className={cx(
              "absolute inset-0 transform-gpu bg-gradient-to-tl from-purple-500 to-indigo-400 transition-transform",
            )}
          />
          <HeartIcon className="relative w-5 transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110" />
        </button>
      </div>
    </div>
  )
}
