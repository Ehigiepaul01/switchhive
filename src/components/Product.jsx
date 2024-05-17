import Card from "./ProductCard";

const ProductCards = () => {
  return (
    <section className="card bg-background">      
      <div className="grid flex-wrap grid-cols-3 card-container gap-x-4 gap-y-4">
       {
        Array(9).fill().map((_, i) => (
          <Card key={i} />
        ))
       }
      </div>
    </section>
  );
};

export default ProductCards;
