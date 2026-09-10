import type { ReactNode } from 'react'

interface ChatBubbleProps {
  from: 'meera' | 'user'
  children: ReactNode
}

export default function ChatBubble({ from, children }: ChatBubbleProps) {
  if (from === 'user') {
    return (
      <div className="max-w-[80%] self-end rounded-[18px_18px_6px_18px] bg-ink px-[15px] py-[13px] text-[14px] leading-[1.5] text-white">
        {children}
      </div>
    )
  }
  return (
    <div className="max-w-[86%] self-start rounded-[18px_18px_18px_6px] bg-white px-[15px] py-[13px] text-[14px] leading-[1.5] text-[#22314f] shadow-[0_1px_2px_rgba(16,24,40,.05)]">
      {children}
    </div>
  )
}
