import { banners } from "../../api/_mock";

const Banner = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5 image-slider">
            {banners.map((item, index) => (
                <img
                    key={index}
                    src={item.photo}
                    alt={`Image ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default Banner;
