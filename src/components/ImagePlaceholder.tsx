interface ImagePlaceholderProps {
  caption?: string;
  aspectRatio?: string;
  label?: string;
}

const ImagePlaceholder = ({ caption, aspectRatio = "aspect-[16/9]", label }: ImagePlaceholderProps) => (
  <figure>
    <div className={`${aspectRatio} bg-muted rounded-lg border border-border flex items-center justify-center text-muted-foreground`}>
      <div className="text-center">
        <svg className="w-16 h-16 mx-auto mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-sm">{label || "Image Placeholder"}</span>
      </div>
    </div>
    {caption && <figcaption className="figure-caption">{caption}</figcaption>}
  </figure>
);

export default ImagePlaceholder;
