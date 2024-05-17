import { useGetBlogs } from "@/api/blog";
import { BlogHeader, BlogTable, BlogThumbnail } from "@/components/Blog";
import { CardSkeletonLoader } from "@/components/loading";
import useDisclosure from "@/hooks/useDisclosure";

const Blog = () => {

  const { isOpen, onClose, onOpen } = useDisclosure();
  const { data, isLoading, isError } = useGetBlogs();

  return (
    <section className="section">
      <BlogHeader activeThumbnail={!isOpen} removeThumbnail={onOpen} addThumbnail={onClose} />
      <div className="mt-3">
        {/* Conditional rendering */}
        {isLoading && <CardSkeletonLoader />}
        {isError && <div>Error fetching data</div>}
        {!isLoading && !isError && (!data || data.length < 1) && (
          <div>No Blog Found</div>
        )}
        {/* Render Blog if data is available */}
        {!isLoading && !isError && data && data.length > 0 && (
          !isOpen ? <BlogThumbnail data={data} /> : <BlogTable data={data} />
        )}
      </div>
    </section>
  )
}

export default Blog


