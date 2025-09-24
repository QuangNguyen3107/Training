
export default function MainHero() {
    return (
        <div className="flex flex-row-2 justify-between items-center mx-20">
            
            <div className="mx-20 w-1/2">
                <button className=" border border-gray-300  my-10 rounded-full text-white px-4 py-2 active:scale-95 ">
                    online platforms offer loan
                </button>
                <h1 className="text-5xl font-bold text-white  mb-6   ">
                    Empowering Your Financial Journey with Our Expert Loan Services
                </h1>
                <h6 className="text-lg text-white mb-6 w-3/5">
                    Xin Chào tất cả các bạn đến với Medora, nơi chúng tôi cam kết cung cấp các dịch vụ vay mượn tài chính hàng đầu để giúp bạn đạt được mục tiêu tài chính của mình
                </h6>
                <button className="bg-[#33FFCC] border border-orange-400 rounded-full px-4 py-2 text-black hover:bg-[#33FFCC]/80 transform transition hover:scale-105 active:scale-95">
                    book a free consultation
                </button>
                <button className="mx-2 bg-white/20 text-white hover:bg-white-700 text-black font-bold px-4 py-2 rounded-full hover:bg-white/40 transform transition hover:scale-105 active:scale-95">
                    watch a demo
                </button>
            </div>
            <div className="flex items-end flex-col w-1/2  relative">
            <div className="absolute  ">
                <img src="/public/IMG/bacsi.png" alt="bac si" className="w-3/4 object-cover opacity-50" />
            </div>
                <div className="w-60 h-52 border border-gray-300 rounded-3xl   shadow-lg ">
                    <h4 className="mx-5">Dashboard</h4>
                    <div className=""></div>
                </div>
                <div className="w-72 h-52  border border-gray-300 rounded-3xl  shadow-lg mt-5">
                    <h4 className="mx-5">your daily progress</h4>
                    <div  className=""></div>
                </div>
            </div>
        </div>
    )   
}
