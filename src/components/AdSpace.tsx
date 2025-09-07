interface AdSpaceProps {
  size: "header" | "sidebar" | "inline";
  className?: string;
}

const adSizes = {
  header: { width: "728px", height: "90px", label: "728x90" },
  sidebar: { width: "300px", height: "250px", label: "300x250" },
  inline: { width: "336px", height: "280px", label: "336x280" },
};

export const AdSpace = ({ size, className = "" }: AdSpaceProps) => {
  const adConfig = adSizes[size];

  return (
    <div 
      className={`bg-accent/20 border-2 border-dashed border-border rounded-lg flex items-center justify-center ${className}`}
      style={{ 
        width: adConfig.width, 
        height: adConfig.height,
        maxWidth: "100%"
      }}
    >
      <div className="text-center p-4">
        <p className="text-xs text-muted-foreground font-mono">
          {adConfig.label} Ad Unit
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Google AdSense Ready
        </p>
      </div>
    </div>
  );
};