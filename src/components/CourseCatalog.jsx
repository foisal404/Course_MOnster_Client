import { Tabs, Tab } from "react-tabs-scrollable";
import { useEffect, useState } from "react";
import "react-tabs-scrollable/dist/rts.css";
import './CourseCatelog.css'
import CatalogCard from "./CatalogCard/CatalogCard";
import { Link } from "react-router-dom";

const CourseCatalog = () => {
    
  useEffect(() => {
    fetch("../../public/test.json")
      .then((res) => res.json())
      .then((data) => setTestData(data));
  }, []);
  useEffect(() => {
    fetch("../../public/data.json")
      .then((res) => res.json())
      .then((data) => setTestCate(data));
  }, []);
  const [testdata, setTestData] = useState([]);
  const [testCate, setTestCate] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  const onTabClick = (e, index) => {
    console.log(e);
    setActiveTab(index);
  };

  // Define content for each tab
  const tabContents = testCate.map((item, index) => (
    <div key={index} >
      {/* <h2>{item.name}</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5  md:place-items-stretch ">
      {
        testdata.filter(data=>data.category=== item.name).slice(0,4).map((card,idx)=><CatalogCard key={idx} data={card} />)
      }
      </div>
    </div>
  ));

  return (
    <>
      <Tabs activeTab={activeTab} onTabClick={onTabClick} className="bg-zinc-800" >
        {testCate.map((item) => (
          <Tab className={"bg-zinc-800"} key={item.id}>{item.name}</Tab>
        ))}
      </Tabs>

      {/* Display content based on active tab */}
      <div>{tabContents[activeTab]}</div>
     <div className="p-5 text-center">
     <Link className="uppercase bg-[#E8EDFF] text-blue-500 font-medium p-3 rounded-lg px-16 text-sm inline-block">All Courses</Link>
     </div>
    </>
  );
};

export default CourseCatalog;
