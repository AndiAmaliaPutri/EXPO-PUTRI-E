import React, { useState } from "react";

const mainImages = [
  "https://picsum.photos/id/1015/200/200",
  "https://picsum.photos/id/1016/200/200",
  "https://picsum.photos/id/1018/200/200",
  "https://picsum.photos/id/1020/200/200",
  "https://picsum.photos/id/1024/200/200",
  "https://picsum.photos/id/1027/200/200",
  "https://picsum.photos/id/1033/200/200",
  "https://picsum.photos/id/1035/200/200",
  "https://picsum.photos/id/1037/200/200",
];

const altImages = [
  "https://picsum.photos/id/1011/200/200",
  "https://picsum.photos/id/1012/200/200",
  "https://picsum.photos/id/1013/200/200",
  "https://picsum.photos/id/1014/200/200",
  "https://picsum.photos/id/1019/200/200",
  "https://picsum.photos/id/1021/200/200",
  "https://picsum.photos/id/1022/200/200",
  "https://picsum.photos/id/1025/200/200",
  "https://picsum.photos/id/1026/200/200",
];

type ImageState = {
  isAlt: boolean; // apakah memakai gambar alternatif
  scale: number;  // skala gambar saat ini
};

export default function ImageGrid() {
  // Inisialisasi semua gambar utama, scale 1
  const [images, setImages] = useState<ImageState[]>(
    Array(9).fill({ isAlt: false, scale: 1 })
  );

  // Ketika gambar diklik
  const handleClick = (index: number) => {
    setImages((prev) =>
      prev.map((img, i) => {
        if (i === index) {
          const newScale = Math.min(img.scale * 1.2, 2);
          return {
            isAlt: !img.isAlt,
            scale: newScale,
          };
        } else {
          return img;
        }
      })
    );
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 200px)",
        gridTemplateRows: "repeat(3, 200px)",
        gap: 10,
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      {images.map(({ isAlt, scale }, idx) => (
        <div
          key={idx}
          style={{
            width: 200,
            height: 200,
            overflow: "hidden",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => handleClick(idx)}
        >
          <img
            src={isAlt ? altImages[idx] : mainImages[idx]}
            alt={`gambar-${idx}`}
            style={{
              width: 200,
              height: 200,
              objectFit: "cover",
              transform: `scale(${scale})`,
              transition: "transform 0.3s ease",
              display: "block",
            }}
          />
        </div>
      ))}
    </div>
  );
}
