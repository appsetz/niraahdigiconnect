import { cn } from "@/lib/utils"
import Image from "next/image"

export interface TestimonialAuthor {
  name: string
  handle?: string
  avatar?: string // Making it optional, though no longer used
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className 
}: TestimonialCardProps) {
  return (
    <div className={cn(
      "flex flex-col justify-between gap-4 rounded-3xl p-6 sm:p-8",
      "w-[350px] shrink-0",
      className
    )}
    style={{
      backgroundColor: '#ffffff',
      border: '1px solid #f3f4f6',
      background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
    }}>
      <div className="flex flex-col gap-4">
        {/* Simple quotes icon placeholder */}
        <span style={{ color: '#10b981', fontSize: '2rem', lineHeight: 1, fontFamily: 'serif' }}>"</span>
        <p className="text-base leading-relaxed" style={{ color: '#4b5563' }}>{text}</p>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <div className="flex flex-col">
          <span className="font-serif font-bold" style={{ color: '#000000' }}>{author.name}</span>
          {author.handle && <span className="text-xs font-medium uppercase tracking-wider mt-1" style={{ color: '#10b981' }}>{author.handle}</span>}
        </div>
      </div>
    </div>
  )
}
