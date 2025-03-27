import './CardSkelton.css';
import { Skeleton } from 'antd';

const CardSklton = () => {
  return (
    <div className="main-card-sklton">
      {/* Image Skeleton */}
      <div className="image-sklton">
        <Skeleton.Image style={{ width: 100, height: 100 }} />
      </div>

      {/* Text Skeleton */}
      <div className="text-sklton">
        <Skeleton.Input active style={{ width: 200, height: 20 }} />
        <Skeleton.Input active style={{ width: 180, height: 20 }} />
        <Skeleton.Input active style={{ width: 150, height: 20 }} />
        <Skeleton.Input active style={{ width: 150, height: 20 }} />
      </div>
    </div>
  );
};

export default CardSklton;
