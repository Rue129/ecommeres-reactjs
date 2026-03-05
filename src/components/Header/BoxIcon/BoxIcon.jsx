import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import instaIcon from '@icons/svgs/instaIcon.svg';
import ytbIcon from '@icons/svgs/ytbIcon.svg';

function BoxIcon({ type, href }) {
    const { boxIcon } = styles;

    const handldeRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbIcon;
            case 'ins':
                return instaIcon;
            case 'ytb':
                return ytbIcon;
        }
    };

    return (
        <div className={boxIcon}>
            <img src={handldeRenderIcon(type)} alt={type} />
        </div>
    );
}

export default BoxIcon;
