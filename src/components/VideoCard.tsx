interface VideoCardProps {
  title?: string;
  description?: string;
  videoSrc?: string;
  label?: string;
}

const VideoCard = ({ title, description, videoSrc, label }: VideoCardProps) => (
  <div className="video-card">
    {videoSrc ? (
      <video className="w-full aspect-video" controls muted loop playsInline>
        <source src={videoSrc} type="video/mp4" />
      </video>
    ) : (
      <div className="video-placeholder">
        <div className="text-center">
          <svg className="w-12 h-12 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm">{label || "Video Placeholder"}</span>
        </div>
      </div>
    )}
    {(title || description) && (
      <div className="p-4">
        {title && <h3 className="font-medium text-card-foreground text-sm mb-1">{title}</h3>}
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
      </div>
    )}
  </div>
);

export default VideoCard;
