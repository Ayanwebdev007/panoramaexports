import React from "react";

const products = [
    {
        name: "Classic White Tee",
        image:
            "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Denim Jacket",
        image:
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Luxury Handbag",
        image:
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Statement Sneakers",
        image:
            "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
    },
];

const Products = () => {
    return (
        <div
            className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=1740&q=80')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-white">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
                    Our Products
                </h2>
                <p className="text-center text-lg md:text-xl mb-16 max-w-3xl mx-auto">
                    From everyday essentials to statement styles—explore our versatile,
                    trend-forward, and meticulously made collections.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300 hover:bg-white/20"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-sm text-gray-300 mt-12">
                    ** We need to put proper product shoots here with high resolution &
                    trend-forward pictures **
                </p>
            </div>
        </div>
    );
};

export default Products;
