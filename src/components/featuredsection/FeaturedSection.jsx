import { useEffect, useState } from "react";

const FeaturedSection = () => {
  useEffect(() => {
    fetch("../../../public/test.json")
      .then((res) => res.json())
      .then((data) => setTestData(data));
  }, []);
  useEffect(() => {
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((data) => setTestCate(data));
  }, []);
  const [testdata, setTestData] = useState([]);
  const [testCate, setTestCate] = useState([]);
  return (
    <div className="py-10 text-center">
      <h2 className="text-6xl font-bold uppercase">Set career goal 🎯</h2>
      <h2 className="text-sm text-slate-600">Select your goal from the options below and start learning</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 place-items-center">
        {testCate.map((cate, idx) => (
          <div key={idx} className="bg-[#E9EFFF] w-[232px] text-center p-5 rounded-lg">
            <h2 className="text-lg font-semibold ">{cate.name}</h2>
            <p className="text-xs text-slate-500">{testdata.filter((data) => data.category === cate.name).length} Course</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
