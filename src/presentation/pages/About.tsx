export function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-white mb-8">
          About Medora
        </h1>
        <p className="text-xl text-white mb-8 leading-relaxed">
          Chào mừng bạn đến với Medora - đối tác tin cậy trong hành trình tài chính của bạn. 
          Chúng tôi cam kết cung cấp các giải pháp vay mượn hiện đại, minh bạch và an toàn.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Tầm nhìn</h3>
            <p className="text-white/80">
              Trở thành nền tảng cho vay hàng đầu Việt Nam, mang đến cơ hội tài chính cho mọi người.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Sứ mệnh</h3>
            <p className="text-white/80">
              Đơn giản hóa quy trình vay vốn, giúp khách hàng dễ dàng tiếp cận nguồn tài chính.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Giá trị cốt lõi</h3>
            <p className="text-white/80">
              Minh bạch, nhanh chóng, an toàn và luôn đặt lợi ích khách hàng lên hàng đầu.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <button className="bg-[#33FFCC] border border-orange-400 rounded-full px-8 py-3 text-black font-semibold hover:bg-[#33FFCC]/80 transform transition hover:scale-105 active:scale-95">
            Liên hệ với chúng tôi
          </button>
        </div>
      </div>
    </div>
  );
}