import Image from "next/image"

export default function Avatar({
  name,
  url,
  size = "md",
}: {
  name: string
  url: string
  size?: "sm" | "md" | "lg"
}) {
  const blurDataURL = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10 sm:w-12 sm:h-12",
    lg: "w-14 h-14 sm:w-16 sm:h-16",
  }

  const textClasses = {
    sm: "text-sm font-medium",
    md: "text-base sm:text-lg font-semibold",
    lg: "text-lg sm:text-xl font-bold",
  }

  return (
    <div className="flex items-center gap-3">
      <div className={`${sizeClasses[size]} relative flex-shrink-0`}>
        <Image
          alt={name}
          className="object-cover h-full w-full rounded-full"
          height={96}
          width={96}
          sizes="96px"
          placeholder="blur"
          blurDataURL={blurDataURL}
          src={url || "/placeholder.svg"}
        />
      </div>
      <span className={textClasses[size]}>{name}</span>
    </div>
  )
}
