import { useEffect } from "react";

type Size = "header" | "sidebar" | "inline";

export function AdSpace({
  size,
  className,
  test = false,
}: {
  size: Size;
  className?: string;
  test?: boolean; // set true until AdSense approval
}) {
  // Map your AdSense slot IDs here (from AdSense → Ad units)
  const slots: Record<Size, string> = {
    header:  "REPLACE_WITH_HEADER_SLOT_ID",
    sidebar: "REPLACE_WITH_SIDEBAR_SLOT_ID",
    inline:  "REPLACE_WITH_INLINE_SLOT_ID",
  };

  // Reserve space to avoid layout shift
  const wrapperStyle =
    size === "header"
      ? { minHeight: 90 }
      : size === "sidebar"
      ? { minHeight: 250 }
      : { minHeight: 250 };

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, [size]);

  return (
    <div className={className} style={wrapperStyle}>
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
