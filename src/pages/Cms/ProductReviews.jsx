import { ProductReviewsHeader, ReviewsTable } from "@/components/CMS";
import { useState } from "react";
import { CustomTabs } from "@/components/custom";
import { reviewsArray } from "@/constants/data";

const ProductReviews = () => {
  const [tabValue, setTabValue] = useState('newReview');

  const handleTabChange = (value) => {
    setTabValue(value);
  };

  const filteredReviews = reviewsArray.filter(review => {
    switch (tabValue) {
      case 'newReview':
        return review.status === 'New';
      case 'approvedReview':
        return review.status === 'Approved';
      case 'declinedReview':
        return review.status === 'Declined';
      default:
        return false;
    }
  });

  return (
    <section className="section">
      <ProductReviewsHeader />
      <div className="mt-8" />
      <CustomTabs
        tabs={[
          { label: 'New Review', value: 'newReview' },
          { label: 'Approved Review', value: 'approvedReview' },
          { label: 'Declined Review', value: 'declinedReview' },
        ]}
        onTabChange={handleTabChange}
      />
      <ReviewsTable filteredReviews={filteredReviews} />
    </section>
  )
}

export default ProductReviews