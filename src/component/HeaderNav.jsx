/* eslint-disable react/prop-types */
import { Button, Navbar, Modal, Footer } from "flowbite-react";
import { useState } from "react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const HeaderNav = () => {
  // modal works here
  const [openModal, setOpenModal] = useState("");
  const props = { openModal, setOpenModal };
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
            A.F.R
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 ">
          <Button className="mobile-off-button gradient-border">
            Get started
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active href="#">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link href="#aboutMe">About</Navbar.Link>
          <Navbar.Link
            onClick={() => props.setOpenModal("pop-up")}
            style={{ cursor: "pointer" }}
          >
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      {/* Modal Works Here */}
      <Modal
        show={props.openModal === "pop-up"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
            <h2 className="text-center text-2xl">Contact Me!</h2>
          <div className="text-center contact-icon">
            <Footer.Icon className="pl-10" href="#" icon={BsFacebook} />
            <Footer.Icon className="pl-10" href="#" icon={BsInstagram} />
            <Footer.Icon className="pl-10" href="#" icon={BsTwitter} />
            <Footer.Icon className="pl-10" href="#" icon={BsGithub} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HeaderNav;
