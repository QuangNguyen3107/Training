export  interface Product {
    _id: string;
    name: string;
    thumb_url:string;
    poster_url:string;
    lang: string;
    year: number;
}
export interface ApiResponse{
    status: boolean;
    msg: string;
    data: {
        items: Product[];
    };
}
export interface ItemService {
    className?: string;
    onServiceClick?: () => void;
    activeItem?: string;
    onServiceSelect?: (serviceName: string) => void;
}
