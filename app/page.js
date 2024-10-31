import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#030301] min-h-screen text-white">
      <div>
        <div className="grid grid-cols-2 mx-auto mb-5">
          <div className="grid grid-rows-2 m-28 ">
            <div className="text-7xl">Atharva Ganesh Gourshete</div>
            <div>
              A second year Engineering Student at{" "}
              <span className="text-orange-500 sapce-x-1 mx-1">
                {" "}
                A.P. Shah Instittue of Technology
              </span>
            </div>
          </div>
          <div className="h-44">
            <Image
              src={"/boy.png"}
              width={500}
              height={500}
              className="p-14 ml-10"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}
