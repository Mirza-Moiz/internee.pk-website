const BlogSection = ({ blogs }) => {
  return (
    <section className=" py-10 flex flex-col items-center justify-center bg-gray-100 text-gray-700">
      <div className="flex flex-col justify-center items-center">
        <p className="text-lg text-grey-500 font-semibold">Our Blog</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Recent Blog
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-[90%]">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
    </section>
  );
};

const BlogCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4  mb-4">
      <h2 className="text-2xl font-semibold text-gray-900 py-4">{title}</h2>
      <p className="text-gray-700 py-2 text-lg">{description}</p>
    </div>
  );
};

export default BlogSection;
