import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { menuCard2Designs } from "../constants/designProjects";

const MenuCard2 = () => {
    const location = useLocation();
    const prevLocation = location.state?.data || "";
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="max-w-container mx-auto px-4">
            <Breadcrumbs title="Menu Card 2 Designs" prevLocation={prevLocation} />

            <div className="pb-20">
                <h1 className="text-3xl font-bold text-primeColor mb-2">Menu Card 2 Designs</h1>
                <p className="text-base text-lightText mb-10">
                    An extended collection of menu card designs featuring diverse layouts and styles for various culinary establishments.
                </p>

                {/* Menu Card Grid */}
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                    {menuCard2Designs.map((design) => (
                        <div
                            key={design.id}
                            className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300"
                            onClick={() => setSelectedImage(design)}
                        >
                            <img
                                src={design.img}
                                alt={design.title}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <span className="text-white font-semibold text-base p-4">
                                    {design.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-5xl max-h-[90vh] animate-fadeIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-red-400 transition-colors duration-200"
                        >
                            ✕
                        </button>
                        <img
                            src={selectedImage.img}
                            alt={selectedImage.title}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        />
                        <p className="text-center text-white text-lg font-semibold mt-4">
                            {selectedImage.title}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuCard2;
