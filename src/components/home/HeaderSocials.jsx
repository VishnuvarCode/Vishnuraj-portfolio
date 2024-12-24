import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev, FaMailBulk } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/VishnuvarCode' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/v-vishnuraj-2002v' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='mailto:vishnuvishnu31221@gmail.com' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaMailBulk />
            </a>
        </div>
    );
};

export default HeaderSocials;
