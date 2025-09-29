export function Consulting() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold mb-4">Dịch Vụ Tư Vấn</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Chúng tôi cung cấp các giải pháp tư vấn chuyên nghiệp để giúp doanh nghiệp của bạn phát triển
                    </p>
                </div>
            </div>
            <div className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Dịch Vụ Của Chúng Tôi
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-blue-600 text-4xl mb-4">📊</div>
                            <h3 className="text-xl font-semibold mb-3">Tư Vấn Chiến Lược</h3>
                            <p className="text-gray-600">
                                Phân tích và xây dựng chiến lược kinh doanh hiệu quả cho doanh nghiệp của bạn
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-blue-600 text-4xl mb-4">💻</div>
                            <h3 className="text-xl font-semibold mb-3">Tư Vấn Công Nghệ</h3>
                            <p className="text-gray-600">
                                Hỗ trợ chuyển đổi số và ứng dụng công nghệ hiện đại vào quy trình làm việc
                            </p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-blue-600 text-4xl mb-4">📈</div>
                            <h3 className="text-xl font-semibold mb-3">Tư Vấn Marketing</h3>
                            <p className="text-gray-600">
                                Xây dựng chiến lược marketing toàn diện để tăng cường thương hiệu và doanh số
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Quy Trình Làm Việc
                    </h2>
                    
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                            <h4 className="font-semibold mb-2">Phân Tích Nhu Cầu</h4>
                            <p className="text-gray-600 text-sm">Tìm hiểu và phân tích yêu cầu của khách hàng</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                            <h4 className="font-semibold mb-2">Lập Kế Hoạch</h4>
                            <p className="text-gray-600 text-sm">Xây dựng kế hoạch chi tiết và roadmap thực hiện</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                            <h4 className="font-semibold mb-2">Triển Khai</h4>
                            <p className="text-gray-600 text-sm">Thực hiện các giải pháp theo kế hoạch đã định</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                            <h4 className="font-semibold mb-2">Theo Dõi</h4>
                            <p className="text-gray-600 text-sm">Giám sát và đánh giá kết quả sau triển khai</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">
                        Sẵn Sàng Bắt Đầu?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và tìm hiểu cách chúng tôi có thể giúp đỡ doanh nghiệp của bạn
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                            Liên Hệ Ngay
                        </button>
                        <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
                            Tìm Hiểu Thêm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
