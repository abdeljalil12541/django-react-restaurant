import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductLayout = () => {
  const shadow = 'drop-shadow-lg';
  const products = [
    { id: 1, alt: 'Image 1', src: 'https://www.visitmorocco.com/sites/default/files/tajine.jpg', },
    { id: 2, alt: 'Image 2', src: 'https://www.afrah-maghreb-arabi.com/images/traiteur/bestila.webp', },
    { id: 3, alt: 'Image 3', src: 'https://www.afrah-maghreb-arabi.com/images/traiteur/cuisine-international.webp', },
    { id: 4, alt: 'Image 4', src: 'https://choumicha.ma/images/recettes/Pieds%20de%20veau%20%C3%A0%20la%20fa%C3%A7on%20de%20Choumicha/13-Pieds-de-veau-a-la-facon-de-Choumicha.jpg', },
  ];

  const {t, i18n} = useTranslation("global")

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24">
        
      <div className="flex mt-5 flex-col lg:flex-row">
        {/* Left column */}
        <div className="lg:w-1/4 mb-8 lg:mb-0 drop-shadow-lg">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-1 xl:gap-x-8">
            {products.slice(0, 2).map((product) => (
              <div key={product.id} className={`group relative ${shadow}`}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center column */}
        <div className="lg:w-1/2 px-4">
        
        <h2 className="text-4xl font-bold tracking-tight text-[#d1b26b] text-center mb-6 pt-2">
            {t("homePage2.title")}
        </h2>
        
        <p className="text-gray-600 text-center">
          <p style={{lineHeight: '26px', fontSize: '17px', fontWeight: '500', padding: '0 20px', marginBottom: '6px'}}>
            {t("homePage2.p1")}  
          </p>
          <br />
          <p style={{lineHeight: '26px', fontSize: '17px', fontWeight: '500', padding: '0 20px', marginBottom: '6px'}}>
            {t("homePage2.p2")}  
          </p>
          <br />
          <p style={{lineHeight: '26px', fontSize: '17px', fontWeight: '500', padding: '0 20px', marginBottom: '6px'}}>
            {t("homePage2.p3")}  
          </p>
        </p>

        </div>

        {/* Right column */}
        <div className="lg:w-1/4 mt-8 lg:mt-0 drop-shadow-lg">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-1 xl:gap-x-8">
            {products.slice(2, 4).map((product) => (
              <div key={product.id} className={`group relative ${shadow}`}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;