interface SectionHeaderProps {
  children: React.ReactNode
  className?: string
}

export function SectionHeader({ children, className = "" }: SectionHeaderProps) {
  return (
    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 sm:mb-8 md:mb-10 ${className}`}>
      {children}
    </h2>
  )
}
