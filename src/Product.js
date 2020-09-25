import React from 'react'
import './Product.css'

function Product({ id, title, cost, rating, url }) {
    return (
        <div className='product'>
            <div className="product__row">
                <div className="product__container">
                    <div className="product__image">
                        <img src="https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/8/9/8901526001255_3-in-1_wash_with_long_beard_i1.jpg" alt="IMAGE" />
                    </div>
                    <div className="product__desc">
                        <h3>L'Oreal Paris Men Expert Barber Club Beard + Face + Hair 3-In-1 Wash With Long Beard & Skin</h3>
                        <h2>₹712</h2>
                        <span>⭐⭐⭐⭐</span><br />

                    </div>
                    <button >ADD TO BASKET</button>
                </div>

                <div className="product__container">
                    <div className="product__image">
                        <img src="https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/8/9/8904256007498.jpg" alt="IMAGE" />
                    </div>
                    <div className="product__desc">
                        <h3>NIVEA Men Active Clean Shower Gel With Free Loofah</h3>
                        <h2>₹159</h2>
                        <span>⭐⭐⭐</span><br />

                    </div>
                    <button >ADD TO BASKET</button>
                </div>

                <div className="product__container">
                    <div className="product__image">
                        <img src="https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/a/t/athleisure_1.jpg" alt="IMAGE" />
                    </div>
                    <div className="product__desc">
                        <h3>Nykaa matte lux lipstick</h3>
                        <h2>₹720</h2>
                        <span>⭐⭐⭐⭐</span><br />

                    </div>
                    <button >ADD TO BASKET</button>
                </div>
            </div>
            <div className="product__row">
                <div className="product__container">
                    <div className="product__image">
                        <img src="https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/n/y/nykmcf0000004_new2.jpg" alt="IMAGE" />
                    </div>
                    <div className="product__desc">
                        <h3>MCaffeine Naked & Raw Coffee Face Scrub</h3>
                        <h2>₹359</h2>
                        <span>⭐⭐⭐⭐</span><br />

                    </div>
                    <button >ADD TO BASKET</button>
                </div>

                <div className="product__container">
                    <div className="product__image">
                        <img src="https://m.media-amazon.com/images/I/41JkQ1K2fKL._AC_UL320_.jpg" alt="IMAGE" />
                    </div>
                    <div className="product__desc">
                        <h3>KYLIE Makeup Brushes Set Premium Synthetic Kabuki Foundation Face Powder Blush Eyeshadow Brush Makeup Brush</h3>
                        <h2>₹300</h2>
                        <span>⭐⭐⭐</span><br />

                    </div>
                    <button >ADD TO BASKET</button>
                </div>
                <div className="product__container">
                    <div className="product__image">
                        <img src="https://m.media-amazon.com/images/I/41D9AsFarKL._AC_UL320_.jpg" alt="IMAGE" />
                    </div>
                    <div className="product__desc">
                        <h3>TYA Makeup kit + 5 pcs Makeup Brush + 2 pc Blender Puff Combo</h3>
                        <h2>₹333</h2>
                        <span>⭐⭐⭐⭐</span><br />

                    </div>
                    <button >ADD TO BASKET</button>
                </div>
            </div>
            <div className="product__row">
                <div className="product__container">
                    <div className="product__image">
                        <img src="https://m.media-amazon.com/images/I/81Rm1xUxw8L._AC_UL320_.jpg" alt="IMAGE" />
                    </div>
                    <div className="product__desc">
                        <h3>INOVERA (LABEL) 16 Compartment Cosmetic Makeup Jewellery Lipstick Storage Organizer Holder Box</h3>
                        <h2>₹226</h2>
                        <span>⭐⭐⭐⭐</span><br />

                    </div>
                    <button >ADD TO BASKET</button>
                </div>

                <div className="product__container">
                    <div className="product__image">
                        <img src="https://m.media-amazon.com/images/I/71XBzoNUB1L._AC_UL320_.jpg" alt="IMAGE" />
                    </div>
                    <div className="product__desc">
                        <h3>Swiss Beauty Ultimate 9 Color Eyeshadow Palette, Eye MakeUp, Multicolor-05, 9g</h3>
                        <h2>₹350</h2>
                        <span>⭐⭐⭐</span><br />

                    </div>
                    <button >ADD TO BASKET</button>
                </div>
                <div className="product__container">
                    <div className="product__image">
                        <img src="https://m.media-amazon.com/images/I/41wUaaNA0XL._AC_UL320_.jpg" alt="IMAGE" />
                    </div>
                    <div className="product__desc">
                        <h3>Swiss Beauty Professional Liquid Concealer, Face MakeUp, Sand-Sable, 5.6g</h3>
                        <h2>₹180</h2>
                        <span>⭐⭐⭐⭐</span><br />

                    </div>
                    <button >ADD TO BASKET</button>
                </div>
            </div>
        </div>
    )
}

export default Product
