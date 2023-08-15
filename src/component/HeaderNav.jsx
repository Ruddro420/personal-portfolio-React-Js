import { Button, Navbar } from "flowbite-react";

const HeaderNav = () => {
    return (
        <div>
            <Navbar
                fluid
                rounded
            >
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
                    <Navbar.Link
                        active
                        href="#"
                    >
                        <p>
                            Home
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="#aboutMe">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNav;