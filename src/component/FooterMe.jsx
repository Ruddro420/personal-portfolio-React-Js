
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTelegram, BsTwitter } from 'react-icons/bs';
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
                                href="https://web.facebook.com/people/Ali-Fiad-Ruddro/pfbid02EFLFaw2CwNocABt2V5WRpXSUf7F1B7kZGDfE9ggjKUoPBJDW1mAkMwrDVhsj85KKl/"
                                icon={BsFacebook}
                            />
                            <Footer.Icon
                                href="https://www.instagram.com/ruddro420/"
                                icon={BsInstagram}
                            />
                            <Footer.Icon
                                href="https://twitter.com/ruddro90305488"
                                icon={BsTwitter}
                            />
                            <Footer.Icon
                                href="https://github.com/Ruddro420"
                                icon={BsGithub}
                            />
                            <Footer.Icon
                                href="https://t.me/ruddro420"
                                icon={BsTelegram}
                            />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default FooterMe;