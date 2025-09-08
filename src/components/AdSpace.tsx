import { useEffect } from "react";

type Size = "header" | "sidebar" | "inline";

export function AdSpace({
  size,
  className,
  test = false,
}: {
  size: Size;
  className?: string;
  test?: boolean; // keep true until AdSense approval
}) {
  // Your real AdSense slot IDs
  const slots: Record<Size, string> = {
    header:  "5208130349",  // header_728x90_resp
    sidebar: "3412080366",  // sidebar_300x250_resp
    inline:  "2581967004",  // inline_300x250_resp
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

