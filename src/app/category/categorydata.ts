import phone from "../../../public/Phones.png";
import watch from "../../../public/Smart Watches.png";
import camera from "../../../public/Cameras.png";
import headphone from "../../../public/Headphones.png";
import computer from "../../../public/Computers.png";
import gaming from "../../../public/Gaming.png";

export interface categoryImageType {
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  categoryName: string;
}

export const categoryImage: categoryImageType[] = [
  { id: 1, image: phone, categoryName: "Phones" },
  { id: 2, image: watch, categoryName: "Smart Watches" },
  { id: 3, image: camera, categoryName: "Cameras" },
  { id: 4, image: headphone, categoryName: "Headphones" },
  { id: 5, image: computer, categoryName: "Computers" },
  { id: 6, image: gaming, categoryName: "Gaming" },
];
