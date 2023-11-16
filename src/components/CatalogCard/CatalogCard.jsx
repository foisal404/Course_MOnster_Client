const CatalogCard = ({ data }) => {
  const {
    title,
    description,
    instructor,
    duration,
    ratings,
    category,
    enrolledStudents,
    syllabus,
    published,
    startDate,
    batch,
    price,
    offerPrice,
    courseThumbnail,
  } = data;
  return (
    <>
      <div className="max-w-sm bg-white border  border-gray-200 hover:border-gray-400 rounded-lg shadow flex flex-col justify-between">
        <div>
          <a href="#">
            <img
              className="rounded-t-lg w-full h-[147px] "
              src={courseThumbnail}
              alt=""
            />
          </a>
          <div className="flex justify-center">
            <button className="bg-[#EAECF0] px-3 p-1 border-0 rounded-lg m-1 text-xs font-bold">
              💲{offerPrice}
            </button> 
            <button className="bg-[#EAECF0] px-3 p-1 border-0 rounded-lg m-1 text-xs font-bold">
              ⌛{duration}
            </button>
            <button className="bg-[#EAECF0] px-3 p-1 border-0 rounded-lg m-1 text-xs font-bold">
              ⭐{ratings}
            </button>
          </div>
          <hr />
        </div>
        <div className="p-5 flex flex-col justify-between">
          <div>
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {title}
              </h5>
              <h2 className="text-xs text-slate-500">{instructor}</h2>
            </a>
          </div>

          <div className="flex gap-1">
            <a
              href="#"
              className="inline-flex  items-center px-3 py-2 text-sm font-medium text-end text-white bg-primary-500 rounded-lg hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              🌐Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex  items-center px-3 py-2 text-sm font-medium text-end text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-300 "
            >
              🎫 Enroll
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogCard;
