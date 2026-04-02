interface YouTubeEmbedProps {
  videoId: string
  title?: string
}

export default function YouTubeEmbed({ videoId, title = 'YouTube video' }: YouTubeEmbedProps) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="h-full w-full scale-[1.02] border-0"
      />
    </div>
  )
}
