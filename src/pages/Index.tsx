import SectionHeading from "@/components/SectionHeading";
import VideoCard from "@/components/VideoCard";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header / Title */}
      <header className="pt-16 pb-10 section-container text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Your Paper Title Here
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Author One<sup>1</sup>, Author Two<sup>1,2</sup>, Author Three<sup>2</sup>
        </p>
        <p className="text-sm text-muted-foreground">
          <sup>1</sup>University A &nbsp;&nbsp; <sup>2</sup>University B
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            📄 Paper
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-secondary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            💻 Code
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-secondary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            🎬 Video
          </a>
        </div>
      </header>

      {/* Teaser Figure */}
      <section className="section-container mb-16">
        <ImagePlaceholder
          label="Teaser Figure / 论文首图"
          caption="Figure 1: Teaser figure showing the overview of our method and representative results."
          aspectRatio="aspect-[21/9]"
        />
      </section>

      {/* Abstract */}
      <section className="section-container mb-16">
        <SectionHeading title="Abstract" id="abstract" />
        <p className="text-foreground leading-relaxed max-w-4xl">
          在此处粘贴你的论文摘要。Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      {/* Main Figure */}
      <section className="section-container mb-16">
        <SectionHeading title="Method Overview" id="method" />
        <ImagePlaceholder
          label="Main Figure / 论文主图"
          caption="Figure 2: Overview of the proposed pipeline. (Replace with your method figure)"
          aspectRatio="aspect-[16/8]"
        />
      </section>

      {/* Controlled Video Results */}
      <section className="section-container mb-16">
        <SectionHeading title="Controlled Video Generation" id="controlled" />
        <p className="text-muted-foreground mb-6 text-sm">
          以下展示在不同控制条件下的视频生成结果。
        </p>
        <div className="video-grid grid-cols-1 md:grid-cols-2">
          <VideoCard title="Depth Control" description="Depth-conditioned generation result" label="Depth Control Video" />
          <VideoCard title="Pose Control" description="Pose-conditioned generation result" label="Pose Control Video" />
          <VideoCard title="Edge Control" description="Edge-conditioned generation result" label="Edge Control Video" />
          <VideoCard title="Segmentation Control" description="Segmentation-conditioned generation result" label="Segmentation Video" />
        </div>
      </section>

      {/* Regular Video Results */}
      <section className="section-container mb-16">
        <SectionHeading title="Video Generation Results" id="results" />
        <p className="text-muted-foreground mb-6 text-sm">
          更多视频生成结果展示。
        </p>
        <div className="video-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <VideoCard title="Sample 1" label="Result Video 1" />
          <VideoCard title="Sample 2" label="Result Video 2" />
          <VideoCard title="Sample 3" label="Result Video 3" />
          <VideoCard title="Sample 4" label="Result Video 4" />
          <VideoCard title="Sample 5" label="Result Video 5" />
          <VideoCard title="Sample 6" label="Result Video 6" />
        </div>
      </section>

      {/* Footer */}
      <footer className="section-container py-10 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          If you find this work useful, please cite our paper.
        </p>
        <pre className="mt-4 text-left bg-muted text-muted-foreground text-xs p-4 rounded-lg max-w-2xl mx-auto overflow-x-auto">
{`@article{author2026method,
  title={Your Paper Title},
  author={Author, One and Author, Two},
  journal={arXiv preprint arXiv:2026.xxxxx},
  year={2026}
}`}
        </pre>
      </footer>
    </div>
  );
};

export default Index;
