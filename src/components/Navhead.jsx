"use client";
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";

const Navhead = () => {
  return (
    <>
      <Navbar fluid={true}>
        <Navbar.Container className="flex items-center justify-between py-2">
          <Navbar.Container className="flex items-center">
            <Navbar.Brand>
              <a className="uppercase futura-font sm:text-lg md:text-2xl text-purple-600 cursor-pointer">Course Monster</a>
            </Navbar.Brand>
            <Navbar.Divider></Navbar.Divider>
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-8 text-sm"
            >
              <Navbar.Link linkName="Home"  className='uppercase text-purple-100'/>
              <Navbar.Link linkName="About Us" className='uppercase text-purple-100'/>
              {/* <Navbar.Link linkName="Projects" /> */}
            </Navbar.Container>
            <Navbar.Collapse collapseType="sidebar">
              <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Navbar.Link linkName="Home"  className='uppercase text-purple-100'/>
              <Navbar.Link linkName="About Us" className='uppercase text-purple-100'/>
                {/* <Navbar.Link linkName="Projects" />
                <Navbar.Link linkName="Blogs" />
                <Navbar.Link linkName="News" />
                <Navbar.Link linkName="Resources" /> */}
              </Navbar.Container>
            </Navbar.Collapse>
          </Navbar.Container>

          <Navbar.Container className="flex gap-2 tex">
            
            <Button size="sm"  customClass='md:px-10 uppercase '  >All Courses</Button>
            <Button size="sm" color customClass='md:px-10 bg-[#9C35DE] text-[#fff] uppercase'>
              Login 
            </Button>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </>
  );
};

export default Navhead;
