export default function Gift() {
  return (
    <div
      className=""
      style={{
        backgroundSize: "2000px 2000px",
        backgroundImage:
          "url(https://img.freepik.com/free-vector/blurred-valentine-s-day-wallpaper_23-2148819570.jpg?w=996&t=st=1710775724~exp=1710776324~hmac=5d64db4d8645a2be4c6bfeedb15cc1b7fd02d444c9822719a2493273ada71e80)",
      }}
    >
      <div className="flex flex-col w-full pl-40 pr-40">
        <img
          className="rounded-md"
          src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/459811978_2841873469322558_3909839730056106701_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=mLwDVCe6ADIQ7kNvgEjwEOT&_nc_zt=23&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=A-pYlhCYw8PXAgDkVmLVOBS&oh=00_AYA47ZWlbQzIR1NN3KP-OcRHWomxsAqs9VcCk9S_UorMog&oe=673BCDB6"
        />
      </div>

      <br />

      <div className="flex justify-evenly">
        {/* =============== Case 01 =============== */}

        <div className="flex justify-center rounded-md">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 bg-pink-200 rounded-tr-md rounded-tl-md p-10">
              <img
                src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/459523664_2841873465989225_7804827764701249203_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=aRfrAMdW2EkQ7kNvgFR5ksi&_nc_zt=23&_nc_ht=scontent.fbkk13-1.fna&_nc_gid=AAlZ2n56Fy-FdTt-BNol6DZ&oh=00_AYBLppwXhlNfr5zfVUq_hqN-aJFWCJNLCXav6GddFy3Uow&oe=673BC319"
                alt="Case"
                className="rounded-xl hover:scale-125"
              />
            </figure>
            <div className="card-body items-center text-center bg-white">
              <h2 className="card-title font-bold p-[0.2rem]">
                Caturday Case Pink
              </h2>
              <p>
                เคสมือถือพิมพ์รอบด้าน สำหรับ iPhone 5/5s <br />
                และ Note 2/3 <br />
                ราคา 450 บ.
              </p>
              <div className="card-actions flex justify-center p-2">
                <button className="bg-pink-400 rounded-md text-white hover:bg-pink-600 flex justify-center content-center border-2 border-pink-600 px-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =============== Case 02 =============== */}

        <div className="flex justify-center rounded-md">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 bg-pink-200 rounded-tr-md rounded-tl-md p-10">
              <img
                src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/459623883_2841873462655892_2441871238272146948_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=j8ZGGpswlqoQ7kNvgE-SyCo&_nc_zt=23&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=Aa6MouT3dfR4CWM4wL9G8kW&oh=00_AYB7iERD9pQnQq21BLvNCTQRWOV0L7GydIW8XU0R06QQ1w&oe=673BEFF5"
                alt="Case"
                className="rounded-xl hover:scale-125"
              />
            </figure>
            <div className="card-body items-center text-center bg-white">
              <h2 className="card-title font-bold p-[0.2rem]">
                Caturday Case White
              </h2>
              <p>
                รุ่น B&W Glow in the dark ได้ด้วยเมื่อยู่ในที่มืด <br />
                เคสมือถือพิมพ์รอบด้าน สำหรับ iPhone 5/5s <br />
                และ Note 2/3 ราคา 450 บ.
              </p>
              <div className="card-actions flex justify-center p-2">
                <button className="bg-pink-400 rounded-md text-white hover:bg-pink-600 flex justify-center content-center border-2 border-pink-600 px-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="flex justify-evenly">
        {/* =============== Case 03 =============== */}

        <div className="flex justify-center rounded-md">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 bg-pink-200 rounded-tr-md rounded-tl-md p-10">
              <img
                src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/459788079_2841873489322556_8514580669127353956_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=zFEt5h5kN38Q7kNvgG0kKHd&_nc_zt=23&_nc_ht=scontent.fbkk12-1.fna&_nc_gid=AO9MRBe5TjFgIK2UlJ36kZP&oh=00_AYB0PuMQ3u0uF2_LzTtG-UhyzAnT9863Zb-XeeYNGAJIGw&oe=673BBD1A"
                alt="Case"
                className="rounded-xl hover:scale-125"
              />
            </figure>
            <div className="card-body items-center text-center bg-white">
              <h2 className="card-title font-bold p-[0.2rem]">
                Caturday Case Green
              </h2>
              <p>
                Caturday Case เคสมือถือพิมพ์รอบด้าน สำหรับ iPhone 5/5s และ Note
                2/3 <br />
                ราคา 450 บ.
              </p>
              <div className="card-actions flex justify-center p-2">
                <button className="bg-pink-400 rounded-md text-white hover:bg-pink-600 flex justify-center content-center border-2 border-pink-600 px-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =============== Case 04 =============== */}

        <div className="flex justify-center rounded-md">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 bg-pink-200 rounded-tr-md rounded-tl-md p-10">
              <img
                src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/459395123_2841873602655878_5070174368556251763_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=Q3H_BVJbZdUQ7kNvgFL4yCa&_nc_zt=23&_nc_ht=scontent.fbkk12-3.fna&_nc_gid=Ayl7XvYwRPSC4cpR9pQ8-6E&oh=00_AYBs5oFOakLLF2VpcX6cz2BFiDR-r6_h6HDBkqvUZmE1iQ&oe=673BCC87"
                alt="Case"
                className="rounded-xl hover:scale-125"
              />
            </figure>
            <div className="card-body items-center text-center bg-white">
              <h2 className="card-title font-bold p-[0.2rem]">
                Caturday Case Yellow
              </h2>
              <p>
                Caturday Case เคสมือถือพิมพ์รอบด้าน สำหรับ iPhone 5/5s และ Note
                2/3 <br />
                ราคา 450 บ.
              </p>
              <div className="card-actions flex justify-center p-2">
                <button className="bg-pink-400 rounded-md text-white hover:bg-pink-600 flex justify-center content-center border-2 border-pink-600 px-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

<br />

      <div className="flex flex-col w-full pl-40 pr-40">
        <img
          className="rounded-md justify-center"
          src="https://scontent.fbkk22-6.fna.fbcdn.net/v/t31.18172-8/10655355_376977585812171_4370979464586703703_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFs29lxn-d3VxpM-X4PkOjrzXqXDBj5aJLNepcMGPlokhkf62MTmPShyQD1HmG0CkevNMVv0iZPKBziphsHrybj&_nc_ohc=A-8l8P47b84Q7kNvgHdo1Sr&_nc_ht=scontent.fbkk22-6.fna&oh=00_AYAsE8wADD002kqJycjx28zXQn0S6zRMHCF0BHisVw0wTw&oe=669B4423"
        />
      </div>

<br />

<div className="flex justify-evenly">
        {/* =============== Coaster =============== */}

        <div className="flex justify-center rounded-md">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 bg-pink-200 rounded-tr-md rounded-tl-md p-10">
              <img
                src=
                "https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/459983439_2841873752655863_1611377306847518328_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=2CLLGIYWFwEQ7kNvgGwysES&_nc_zt=23&_nc_ht=scontent.fbkk8-4.fna&_nc_gid=AuUiWw9FUDivp9rjCS68bZt&oh=00_AYCiOWbQ8psmpq8kOedFr6oYCZkcxkTUmlCZ2TRnbj7YOg&oe=673BE71C"
                alt="Coaster"
                className="rounded-xl hover:scale-125"
              />
            </figure>
            <div className="card-body items-center text-center bg-white">
              <h2 className="card-title font-bold p-[0.2rem]">
              จานรองแก้วสีแดง
              </h2>
              <p>
                จานรองแก้ว แบบ Full Set Coaster CollectEM all <br />
                ราคา 790 บ.
              </p>
              <div className="card-actions flex justify-center p-2">
                <button className="bg-pink-400 rounded-md text-white hover:bg-pink-600 flex justify-center content-center border-2 border-pink-600 px-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        </div >

<br />

    </div>
  );
}
