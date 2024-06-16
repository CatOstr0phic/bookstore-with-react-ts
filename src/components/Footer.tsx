
export default function Footer() {
  return (
    <>
      <footer className="bottom-0 w-100 bg-[#00b2dab9] flex items-center justify-center flex-col p-5 mt-3 ">
        <>
          <div className="text-center  max-w-[450px] min-w-[300px] text-[#313131]  ">
            <div className="text-xl">Don't miss out</div>
            <span className="text-sm">sign up for the latest new books, histories and updates</span>
            <div className="flex gap-2 text-left w-100">
              <div className="w-[70%]">
                <div>
                  <strong>Email Address*</strong>
                </div>
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  className="p-2 w-full"
                />
              </div>
              <div className="w-[30%]">
                <div>
                  <strong>Birthday*</strong>
                </div>
                <input type="date" className="p-[7px] w-full" />
              </div>
            </div>
            <div className="border border-[#eee] w-full p-2 text-[#eee] font-semibold text-lg my-2">
              <button>sign up</button>
            </div>
            <span className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi error labore temporibus ea ipsa voluptate, nobis eius dolor
            </span>
          </div>
        </>
      </footer>
    </>
  );
}
