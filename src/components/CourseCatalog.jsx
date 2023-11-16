import { Tabs, Tab } from "react-tabs-scrollable";
import { useEffect, useState } from "react";
import "react-tabs-scrollable/dist/rts.css";
import './CourseCatelog.css'

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
  const [activeTab, setActiveTab] = useState(1);

  const onTabClick = (e, index) => {
    console.log(e);
    setActiveTab(index);
  };

  // Define content for each tab
  const tabContents = testdata.map((item, index) => (
    <div key={index} >
      <h2>Tab {item.title}</h2>
      <p>Content for Tab {item.description}</p>
      {/* Add your specific data or components related to each tab here */}
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
    </>
  );
};

export default CourseCatalog;
