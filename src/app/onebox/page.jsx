"use client";

import Image from "next/image";

function DashboardContent() {
  const length = 5;

  return length > 0 ? (
    <div className=" flex flex-col items-center justify-center h-[80vh]">
      {/* Content when length is greater than 0 */}
      <Image src={"/no-message.png"} alt="Logo" width={200} height={100} />
      <div className="my-4">
        <p className="text-lg font-medium mb-2">It's the beginning of a legendary sales pipeline </p>
        <p className="text-sm text-center w-2/3 mx-auto">When you have inbound E-mails you'll see them here</p>
      </div>
    </div>
  ) : (
    <div className="">{/* Content when length is 0 or less */}</div>
  );
}

export default DashboardContent;
