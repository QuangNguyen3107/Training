import { useProducts } from '../hooks';
const img = "https://img.ophim.live/uploads/movies/";

export function Products() {
    const products = useProducts();
    return (
        
        <div>
            <div className="flex flex-wrap gap-5 p-5 justify-center">
                {products.map((product) => (
                    <div key={product._id} className="w-72 h-92 border border-gray-300 rounded-2xl shadow-lg">
                        <img 
                            src={`${img}${product.thumb_url}`} 
                            alt={product.name}
                            className="w-full h-72 object-cover rounded-t-3xl"
                            onError={(e) => {
                                e.currentTarget.src ='/placeholder.png'
                            }}
                        />
                        <div className="p-3">
                            <h3 className="text-sm font-semibold flex justify-between">
                                <span className="truncate">{product.name}</span>
                                <span>{product.year}</span>
                                <span>{product.lang}</span>
                            </h3>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
