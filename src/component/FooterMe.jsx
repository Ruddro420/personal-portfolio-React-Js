
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
const FooterMe = () => {
    return (
        <div>
            <Footer >
                <div className="w-full bg-black text-white px-10 py-6">
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            by="Ruddro"
                            href="#"
                            year={2023}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon
                                href="#"
                                icon={BsFacebook}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsInstagram}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsTwitter}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsGithub}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsDribbble}
                            />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default FooterMe;