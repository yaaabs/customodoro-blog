import Image from "next/image"

export function BodyImage({
  src,
  alt,
  caption,
}: {
  src: string
  alt?: string
  width?: number
  height?: number
  caption?: string
}) {
  return (
    <figure>
      <Image
        src={src || "/placeholder.svg"}
        alt={caption ?? alt ?? "Image"}
        className="rounded-lg"
        width={700}
        height={700}
      />
      {caption && <figcaption className="text-center">{caption}</figcaption>}
    </figure>
  )
}
