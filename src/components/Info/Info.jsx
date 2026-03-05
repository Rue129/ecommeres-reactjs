import MainLayout from '@components/Layout/Layout';
import { dataInfo } from './constans.js';
import InfoCart from './InfoCart/InfoCart';
import styles from './styles.module.scss';
function Info() {
    const { container } = styles;
    return (
        <MainLayout>
            <div className={container}>
                {dataInfo.map((item) => {
                    return (
                        <InfoCart
                            content={item.title}
                            description={item.description}
                            src={item.src}
                        />
                    );
                })}
            </div>
        </MainLayout>
    );
}

export default Info;
