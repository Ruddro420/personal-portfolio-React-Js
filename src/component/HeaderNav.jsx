/* eslint-disable react/prop-types */
import { Navbar, Modal, Footer } from "flowbite-react";
import { useState } from "react";
import { BsFacebook, BsGithub, BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

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
          <a style={{ padding: '10px', borderRadius: '5px' }} target="_blank" href="https://www.fiverr.com/ruddro420" className="mobile-off-button gradient-border" rel="noreferrer">
            Get started
          </a>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active>
            <Link to="/">Home</Link>
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
            <Footer.Icon className="pl-10" href="https://web.facebook.com/people/Ali-Fiad-Ruddro/pfbid02EFLFaw2CwNocABt2V5WRpXSUf7F1B7kZGDfE9ggjKUoPBJDW1mAkMwrDVhsj85KKl/" icon={BsFacebook} />
            <Footer.Icon className="pl-10" href="https://www.instagram.com/ruddro420/" icon={BsInstagram} />
            <Footer.Icon className="pl-10" href="https://twitter.com/ruddro90305488" icon={BsTwitter} />
            <Footer.Icon className="pl-10" href="https://github.com/Ruddro420" icon={BsGithub} />
            <Footer.Icon className="pl-10" href="https://t.me/ruddro420" icon={BsTelegram} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HeaderNav;
