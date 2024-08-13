import Image from "next/image";


function OneBoxHome() {
  return (
    <div className="flex h-[80vh] gap-4 flex-col items-center justify-center">
      <Image
        src={"/no-mail.png"}
        alt="No mail picture"
        width={100}
        height={100}
        className="h-30 w-50"
      />
      <div className="text-center">
        <h3 className="text-lg font-medium">It's the beginning of a legendary sales pipeline </h3>
        <p className="text-sm mx-auto my-2 w-2/3">When you have inbound E-mails you'll see them here</p>
      </div>
    </div>
  );
}

export default OneBoxHome