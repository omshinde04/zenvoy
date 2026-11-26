"use client"

/**
 * Adsterra 728x90 Leaderboard Banner (Isolated Sandboxed Iframe for zapiya.com)
 * Key: 7366cbdeb4373c426faff4874139e655
 * Script: https://bauval.org/22/7366cbdeb4373c426faff4874139e655
 */
export default function AdsterraBanner728({ className = "" }) {
  const iframeContent = `<!DOCTYPE html>
<html>
<head>
  <base target="_blank">
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      overflow: hidden;
    }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key': '7366cbdeb4373c426faff4874139e655',
      'format': 'iframe',
      'height': 90,
      'width': 728,
      'params': {}
    };
  </script>
  <script type="text/javascript" data-cfasync="false" src="https://bauval.org/22/7366cbdeb4373c426faff4874139e655"></script>
</body>
</html>`

  return (
    <div className={`my-8 hidden md:flex flex-col items-center justify-center overflow-hidden text-center ${className}`}>
      <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#8C867D] select-none">
        Advertisement
      </span>
      <div className="w-[728px] h-[90px] flex items-center justify-center overflow-hidden rounded-lg bg-[#FAF7F2] border border-[#E5DFD3] shadow-xs">
        <iframe
          srcDoc={iframeContent}
          width="728"
          height="90"
          scrolling="no"
          frameBorder="0"
          style={{ border: "none", overflow: "hidden" }}
          title="Sponsored Advertisement"
        />
      </div>
    </div>
  )
}
