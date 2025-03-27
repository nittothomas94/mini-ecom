import { Skeleton } from 'antd';
import './Order-Cart-Sklton.css'; // Add custom styles if needed

const CartSkeleton = () => {
  return (
    <div className="cart-skeleton">
      {[1, 2].map((_, index) => (
        <div key={index} className="order-cart-skeleton">
          <div className="skeleton-content">
            {/* Skeleton for Product Image */}
            <Skeleton.Image className="skeleton-image" />

            {/* Skeleton for Product Details */}
            <div className="skeleton-details">
              <Skeleton active paragraph={{ rows: 1 }} title={false} />
              <Skeleton.Input style={{ width: '100px' }} active />
            </div>

            {/* Skeleton for Price & Actions */}
            <div className="skeleton-actions">
              <Skeleton.Input style={{ width: '40px' }} active />
              <Skeleton.Button shape="circle" active />
              <Skeleton.Button shape="circle" active />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartSkeleton;
