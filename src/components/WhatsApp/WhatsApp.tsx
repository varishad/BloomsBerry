import styles from './WhatsApp.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsApp = () => {
    return (
        <a
            href="https://wa.me/8801934472047"
            className={styles.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
        </a>
    );
};

export default WhatsApp;
