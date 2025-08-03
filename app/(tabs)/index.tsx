import React, { useState } from 'react';
import './ImageGrid.css';

// Mendefinisikan tipe data untuk setiap gambar agar lebih aman dengan TypeScript
interface ImageState {
  id: number;
  mainSrc: string;
  altSrc: string;
  isFlipped: boolean;
  scale: number;
}

// Data awal untuk 9 gambar.
// Menggunakan picsum.photos untuk contoh gambar yang dinamis.
// Anda bisa mengganti URL ini dengan path ke gambar lokal atau URL gambar Anda.
const initialImages: ImageState[] = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  mainSrc: `https://www.bing.com/images/search?view=detailV2&ccid=SeT9lFOO&id=0ED57F5991DA4546F12AFFE74EEA0067F7523686&thid=OIP.SeT9lFOORNQ0n5lQq4rRwwHaEu&mediaurl=https%3a%2f%2f2.bp.blogspot.com%2f-LWK1tS2y8a8%2fVtjqnQKF6EI%2fAAAAAAAACV4%2fpA450HMUbi4%2fs1600%2fGambar-Wallpaper-Bunga-Cantik-Indah-4.jpg&exph=1020&expw=1600&q=gambar+bunga&simid=608034269280368639&FORM=IRPRST&ck=23BF3AB477ED0E647C8E261963717CFA&selectedIndex=0&itb=0/${i + 10}/300/300`, // Gambar utama
  altSrc: `https://www.bing.com/images/search?view=detailV2&ccid=SeT9lFOO&id=0ED57F5991DA4546F12AFFE74EEA0067F7523686&thid=OIP.SeT9lFOORNQ0n5lQq4rRwwHaEu&mediaurl=https%3a%2f%2f2.bp.blogspot.com%2f-LWK1tS2y8a8%2fVtjqnQKF6EI%2fAAAAAAAACV4%2fpA450HMUbi4%2fs1600%2fGambar-Wallpaper-Bunga-Cantik-Indah-4.jpg&exph=1020&expw=1600&q=gambar+bunga&simid=608034269280368639&FORM=IRPRST&ck=23BF3AB477ED0E647C8E261963717CFA&selectedIndex=0&itb=0/${i + 20}/300/300?grayscale`, // Gambar alternatif (versi grayscale)
  isFlipped: false,
  scale: 1,
}));

const ImageGrid: React.FC = () => {
  const [images, setImages] = useState<ImageState[]>(initialImages);

  const handleImageClick = (index: number) => {
    // Buat salinan array state untuk menghindari mutasi langsung
    const newImages = images.map((image, i) => {
      // Jika gambar yang di-map adalah gambar yang diklik
      if (i === index) {
        // Hitung skala baru, tapi batasi maksimal 2
        const newScale = Math.min(image.scale * 1.2, 2);

        // Kembalikan objek gambar baru dengan state yang diperbarui
        return {
          ...image,
          isFlipped: !image.isFlipped, // Balik status gambar
          scale: newScale,
        };
      }
      // Jika bukan gambar yang diklik, kembalikan gambar tanpa perubahan
      return image;
    });

    // Perbarui state dengan array gambar yang baru
    setImages(newImages);
  };

  return (
    <div className="image-grid-container">
      <h1>Galeri Gambar Interaktif</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-cell" key={image.id}>
            <img
              src={image.isFlipped ? image.altSrc : image.mainSrc}
              alt={`Gambar ${image.id}`}
              onClick={() => handleImageClick(index)}
              style={{
                transform: `scale(${image.scale})`, // Terapkan skala dari state
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;