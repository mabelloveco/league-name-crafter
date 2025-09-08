import { useEffect } from "react";

type Size = "header" | "sidebar" | "inline";

export function AdSpace({
  size,
  className = "",
  test = false,
  reserve = true, // reserve space (desktop), collapsible on mobile
}: {
  size: Size;
  className?: string;
  test?: boolean;
  reserve?: boolean;
}) {
  const slots: Record<Size, string> = {
    header:  "5208130349",
    sidebar: "3412080366",
    inline:  "2581967004",
  };

  // Responsive reserved height classes
  const reserveCls =
    size === "header"
      ? "min-h-[40px] md:min-h-[90px]"
      : "min-h-0 sm:min-h-[180px] md:min-h-[250px]";

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, [size]);

  return (
    <div className={`${reserve ? reserveCls : ""} ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2337232287180075"
        data-ad-slot={slots[size]}
        data-ad-format="auto"
        data-full-width-responsive="true"
        {...(test ? { "data-adtest": "on" } : {})}
      />
    </div>
  );
}

export default AdSpace;
